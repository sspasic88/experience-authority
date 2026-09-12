import { notFound } from "next/navigation";
import { PageIntro } from "@/components/editorial";
import { DraftForm } from "@/components/draft-form";
import { editorialPages } from "@/lib/pages";
import { publicGuideMedia } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
const knownSections = new Set([
  ...Object.keys(editorialPages),
  "suggest",
  "corrections",
  "credits",
]);
type Props = {
  params: Promise<{ section: string }>;
  searchParams: Promise<{ experience?: string }>;
};
export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  if (!knownSections.has(section)) notFound();
  const title =
    editorialPages[section]?.eyebrow ||
    (
      {
        suggest: "Suggest an experience",
        corrections: "Corrections",
        credits: "Image & font credits",
      } as Record<string, string>
    )[section] ||
    "Page not found";
  if (title === "Page not found") notFound();
  const descriptions: Record<string, string> = {
    suggest: "Prepare an unsent suggestion for a locally rooted experience.",
    corrections:
      "Prepare an unsent correction or raise a concern about a story.",
    credits:
      "Photography, typography and icon credits for Experience Authority.",
  };
  return pageMetadata(
    title,
    editorialPages[section]?.intro || descriptions[section],
    `/${section}`,
    ["suggest", "corrections"].includes(section),
  );
}
export default async function Page({ params, searchParams }: Props) {
  const { section } = await params;
  if (!knownSections.has(section)) notFound();
  if (section === "suggest" || section === "corrections") {
    const { experience } = await searchParams;
    const correction = section === "corrections";
    return (
      <div className="wrap page-section">
        <PageIntro
          eyebrow={
            correction
              ? "Keep our selection accountable"
              : "Help a story find its place"
          }
          title={
            correction ? "Help us get it right." : "What should we know about?"
          }
        >
          <p>
            {correction
              ? "Knowledge changes. Context matters. Prepare a correction or raise a concern — without sharing sensitive details."
              : "Tell us about an experience that is rooted in a place. A suggestion is a starting point for research, never a promise of publication."}
          </p>
        </PageIntro>
        <DraftForm
          correction={correction}
          initialExperience={
            typeof experience === "string" ? experience.slice(0, 180) : ""
          }
        />
      </div>
    );
  }
  if (section === "credits")
    return (
      <div className="wrap">
        <PageIntro
          eyebrow="People behind the images"
          title="Sources & credits."
        >
          <p>
            Every published photograph has a named creator, source page and
            licence record. Guide imagery is editorial context, never evidence
            that EA attended, assessed or endorses a named experience.
          </p>
        </PageIntro>
        <div className="prose-layout">
          <aside className="prose-aside">
            No AI-generated imagery is used. We avoid provider imagery unless
            its rights record is clear. Every guide photo is labelled as either
            illustrative context or a real photograph of the place, with its
            limits stated below.
          </aside>
          <article className="prose">
            <section>
              <h2>Photography.</h2>
              <h3>Compass guides.</h3>
              <ul>
                {publicGuideMedia.map((media) => (
                  <li id={`media-${media.guideId}`} key={media.guideId}>
                    <a href={media.sourceUrl} target="_blank" rel="noreferrer">
                      {media.photographer} — {media.title}
                    </a>
                    . {media.licenseName} ({" "}
                    <a href={media.licenseUrl} target="_blank" rel="noreferrer">
                      licence
                    </a>
                    ); source and rights checked {media.rightsCheckedOn}. {media.depiction}
                  </li>
                ))}
              </ul>
              <p>
                Unsplash photographs are used under the{" "}
                <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">
                  Unsplash License
                </a>. The Rajaportti image is used under its stated CC BY-SA 4.0
                licence. No photographer, subject or place endorses Experience Authority.
              </p>
              <h3>Homepage & collections.</h3>
              <ul>
                <li>
                  <a
                    href="https://unsplash.com/photos/Tq4YjCa2BSc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Alex Jones — pottery and craft
                  </a>
                  . Actual place unspecified; not evidence of an Alentejo
                  experience.
                </li>
                <li>
                  <a
                    href="https://unsplash.com/photos/Dw3prNMuoBc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Meg von Haartman — Korčula harbour, Croatia
                  </a>
                  . Not evidence of a hosted harbour experience.
                </li>
                <li>
                  <a
                    href="https://unsplash.com/photos/SAPvKo12dQE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Anne Preble — Pike Place Market, Seattle, USA
                  </a>
                  . Used only as a generic produce illustration, not an Italian
                  market.
                </li>
                <li>
                  <a
                    href="https://unsplash.com/photos/vdYjZXdoykQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yosuke Ota — Meiji Shrine forest, Tokyo, Japan
                  </a>
                  . Not evidence of a verified guided activity.
                </li>
              </ul>
              <p>
                Downloaded on 12 September 2026 under the{" "}
                <a
                  href="https://unsplash.com/license"
                  target="_blank"
                  rel="noreferrer"
                >
                  Unsplash License
                </a>
                . No photographer or depicted person endorses Experience
                Authority.
              </p>
            </section>
            <section>
              <h2>Typography & icons.</h2>
              <p>
                <a href="https://github.com/google/fonts/tree/main/ofl/sourcesans3">
                  Source Sans 3
                </a>{" "}
                is the site typeface. It is self-hosted from the Google Fonts
                source repository under the SIL Open Font License 1.1.
              </p>
              <p>
                Interface icons are from{" "}
                <a href="https://lucide.dev/license">Lucide</a> under its
                open-source license.
              </p>
            </section>
          </article>
        </div>
      </div>
    );
  const page = editorialPages[section];
  if (!page) notFound();
  return (
    <div className="wrap">
      <PageIntro eyebrow={page.eyebrow} title={page.title}>
        <p>{page.intro}</p>
      </PageIntro>
      <div className="prose-layout">
        <aside className="prose-aside">
          <p>{page.aside}</p>
        </aside>
        <article className="prose">
          {page.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
