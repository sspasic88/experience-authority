import Link from "next/link";
import { TripPlanner } from "@/components/trip-planner";
import { getExperiences } from "@/lib/data";
import { chapterHref, resolveCityChapters } from "@/lib/city-chapters";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Plan a journey",
  "Arrange saved experiences by day, keep practical notes and share your private journey draft.",
  "/plan",
);

export default function PlanPage() {
  const items = getExperiences();
  const chapters = resolveCityChapters(items).slice(0, 4);
  return (
    <div className="wrap page-section plan-workspace">
      <div className="plan-workspace-heading">
        <div>
          <p className="eyebrow">Your EA journey</p>
          <h1>Make it a plan.</h1>
        </div>
        <Link className="text-link" href="/passport">
          Your saved experiences ↗
        </Link>
      </div>
      <TripPlanner items={items} />
      <section className="plan-local-ideas">
        <h2>Still choosing a place?</h2>
        <p>
          Start with a local combination, save what interests you, then arrange
          your days here.
        </p>
        <div className="plan-destination-links">
          {chapters.map((chapter) => (
            <Link href={chapterHref(chapter).split("#")[0]} key={chapter.slug}>
              {chapter.name} ↗
            </Link>
          ))}
          <Link href="/places">All destinations ↗</Link>
        </div>
      </section>
    </div>
  );
}
