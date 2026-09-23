const origin = process.env.EA_TEST_URL ?? "http://127.0.0.1:3100";

const decode = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .replace(/<[^>]+>/g, "")
    .trim();

const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  match[1].replace("https://experienceauthority.com", origin),
);
if (!urls.length) {
  throw new Error(
    "The sitemap is empty. This audit requires an indexable production configuration and must not pass without checking any routes.",
  );
}
const titles = new Map();
const descriptions = new Map();
const failures = [];

for (let index = 0; index < urls.length; index += 12) {
  await Promise.all(
    urls.slice(index, index + 12).map(async (url) => {
      try {
        const response = await fetch(url);
        const html = await response.text();
        const title = decode(
          html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "",
        );
        const description = decode(
          html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? "",
        );
        const canonical =
          html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] ?? "";

        if (
          response.status !== 200 ||
          !title ||
          !description ||
          !canonical ||
          new URL(canonical).origin !== "https://experienceauthority.com"
        ) {
          failures.push({
            url,
            status: response.status,
            title: Boolean(title),
            description: Boolean(description),
            canonical,
          });
        }

        if (title) titles.set(title, [...(titles.get(title) ?? []), url]);
        if (description) {
          descriptions.set(description, [
            ...(descriptions.get(description) ?? []),
            url,
          ]);
        }
      } catch (error) {
        failures.push({ url, error: error.message });
      }
    }),
  );
}

const duplicateTitles = [...titles].filter(([, routes]) => routes.length > 1);
const duplicateDescriptions = [...descriptions].filter(
  ([, routes]) => routes.length > 1,
);

console.log(
  JSON.stringify(
    {
      routes: urls.length,
      failures,
      duplicateTitles,
      duplicateDescriptions,
    },
    null,
    2,
  ),
);

if (failures.length || duplicateTitles.length || duplicateDescriptions.length) {
  process.exitCode = 1;
}
