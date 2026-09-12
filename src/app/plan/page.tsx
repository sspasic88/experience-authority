import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bookmark, Check } from "lucide-react";
import {
  ExperienceCard,
  PageIntro,
  SectionHeading,
} from "@/components/editorial";
import { getExperiences } from "@/lib/data";
import {
  journeyModes,
  journeySteps,
  planningChecks,
} from "@/lib/journey-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Plan a journey",
  "Turn independent experience guides into a journey you can verify, save, compare and shape around the way you want to be in a place.",
  "/plan",
);

const exampleSlugs = [
  "marble-steam-istanbul",
  "venice-through-an-oar",
  "a-morning-at-the-hawker-table",
];

export default function PlanPage() {
  const experiences = getExperiences();
  const examples = exampleSlugs.flatMap((slug) => {
    const item = experiences.find((experience) => experience.slug === slug);
    return item ? [item] : [];
  });

  return (
    <div className="page-section">
      <div className="wrap">
        <PageIntro
          eyebrow="From a good idea to a real journey"
          title="Plan with a point of view."
        >
          <p>
            EA helps you decide what is worth making time for, understand how
            access works and keep the details that matter. You remain in control
            of booking, transport and the final route.
          </p>
        </PageIntro>

        <ol className="journey-step-grid" aria-label="How to plan with EA">
          {journeySteps.map((step, index) => (
            <li key={step.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{step.label}</h2>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <section className="journey-modes">
        <div className="wrap">
          <SectionHeading
            eyebrow="Three useful ways to begin"
            title="Start with the decision that already feels clear."
          />
          <div className="journey-mode-grid">
            {journeyModes.map((mode) => (
              <article key={mode.index}>
                <span className="eyebrow">Way in / {mode.index}</span>
                <h3>{mode.title}</h3>
                <p>{mode.text}</p>
                <Link className="text-link" href={mode.href}>
                  {mode.link} <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap">
        <SectionHeading
          eyebrow="Before anything is booked"
          title="Six checks that protect a good plan."
        />
        <div className="planning-check-grid">
          {planningChecks.map((check, index) => (
            <article key={check.title}>
              <span className="planning-check-icon" aria-hidden="true">
                <Check size={17} />
              </span>
              <div>
                <p className="eyebrow">
                  Check {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{check.title}</h3>
                <p>{check.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="plan-passport-band">
        <div className="wrap plan-passport-layout">
          <Bookmark size={42} strokeWidth={1.2} aria-hidden="true" />
          <div>
            <p className="eyebrow">Private by default</p>
            <h2>Keep the trip in your hands.</h2>
          </div>
          <div>
            <p>
              Your Passport and journey draft stay in this browser. Save guides,
              compare the practical details, arrange them by day and download a
              copy when the route begins to feel real.
            </p>
            <Link className="button button-paper" href="/passport?view=plan">
              Open my journey <ArrowRight size={18} />
            </Link>
            <span className="small-note">
              No account, payment or cloud sync.
            </span>
          </div>
        </div>
      </section>

      {examples.length > 0 && (
        <section className="section wrap">
          <SectionHeading
            eyebrow="A first set to consider"
            title="Three familiar places. Three different ways in."
            href="/explore"
            link="Open Compass"
          />
          <p className="section-note">
            Examples for discovery, not a suggested route or a ranking.
          </p>
          <div className="experience-grid">
            {examples.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
