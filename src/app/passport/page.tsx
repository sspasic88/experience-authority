import { PageIntro } from "@/components/editorial";
import { PassportView } from "@/components/passport-view";
import { getExperiences } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "My Passport",
  "Your device-local collection of curiosities, future journeys and experiences to return to.",
  "/passport",
  true,
);
export default async function Passport({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const params = await searchParams;
  const view = [
    "all",
    "saved",
    "want-to",
    "experienced",
    "return-to",
    "compare",
    "plan",
  ].includes(params.view || "")
    ? params.view!
    : "all";
  return (
    <div className="wrap page-section">
      <PageIntro eyebrow="Your way through the world" title="My Passport.">
        <p>
          Keep your discoveries. Compare your favourites. Turn a few good ideas
          into a journey you can return to and share.
        </p>
      </PageIntro>
      <PassportView items={getExperiences()} view={view} />
    </div>
  );
}
