"use client";
import Link from "next/link";
import { usePassport } from "./passport-provider";
import { EmptyState, ExperienceCard, StatusBadge } from "./editorial";
import { passportStages, type PassportStage } from "@/lib/passport";
import type { PublicExperience } from "@/lib/catalog";
import { TripPlanner } from "./trip-planner";
const names: Record<PassportStage, string> = {
  saved: "Saved",
  "want-to": "Want to experience",
  experienced: "Experienced",
  "return-to": "Return to",
};
export function PassportView({
  items,
  view,
}: {
  items: PublicExperience[];
  view: string;
}) {
  const { data, ready, message, setStage, toggleCompare } = usePassport();
  const saved = items.filter(
    (item) =>
      data.saved[item.id] && (view === "all" || data.saved[item.id] === view),
  );
  const compared = data.compare.flatMap((id) => {
    const item = items.find((e) => e.id === id);
    return item ? [item] : [];
  });
  const tabs = [
    ["all", "All saved"],
    ["plan", "My journey"],
    ...Object.entries(names),
    ["compare", `Compare (${data.compare.length}/3)`],
  ];
  return (
    <>
      <nav className="passport-tabs" aria-label="Passport sections">
        {tabs.map(([value, name]) => (
          <Link
            href={`/passport?view=${value}`}
            key={value}
            aria-current={view === value ? "page" : undefined}
          >
            {name}
          </Link>
        ))}
      </nav>
      {!ready ? (
        <p role="status">Opening your local Passport…</p>
      ) : view === "plan" ? (
        <TripPlanner items={items} />
      ) : view === "compare" ? (
        compared.length ? (
          <>
            <p className="section-note">
              Which experience fits your plans? Compare time, participation and
              access before deciding. This is not a quality ranking.
            </p>
            <div
              className="compare-scroll"
              tabIndex={0}
              role="region"
              aria-label="Experience comparison"
            >
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">At a glance</th>
                    {compared.map((e) => (
                      <th scope="col" key={e.id}>
                        <Link href={`/experiences/${e.slug}`}>{e.title} ↗</Link>
                        <button
                          className="remove-compare"
                          aria-label={`Remove ${e.title} from comparison`}
                          onClick={() => toggleCompare(e.id)}
                        >
                          Remove
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Place</th>
                    {compared.map((e) => (
                      <td key={e.id}>
                        {e.place}
                        {e.countrySlug && `, ${e.country}`}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Field</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.field}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Time needed</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.duration}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">What you do</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.participation}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Editorial status</th>
                    {compared.map((e) => (
                      <td key={e.id}>
                        <StatusBadge status={e.status} demo={e.demo} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">The shift</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.shift}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Access</th>
                    {compared.map((e) => (
                      <td key={e.id}>{e.access}</td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row">Evidence</th>
                    {compared.map((e) => (
                      <td key={e.id}>
                        {e.guideReview
                          ? `Public sources checked ${e.guideReview.checkedOn}. No on-site review.`
                          : e.evidence}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <EmptyState title="Put your curiosities side by side.">
            <p>
              Open a story and choose Compare. You can keep up to three stories
              here.
            </p>
            <Link href="/explore" className="button">
              Find a story ↗
            </Link>
          </EmptyState>
        )
      ) : saved.length ? (
        <div className="passport-grid">
          <h2 className="sr-only">Your saved experiences</h2>
          {saved.map((item, i) => (
            <div key={item.id}>
              <ExperienceCard item={item} index={i} />
              <div className="passport-entry-controls">
                <label>
                  Keep in
                  <select
                    aria-label={`Passport category for ${item.title}`}
                    value={data.saved[item.id]}
                    onChange={(e) =>
                      setStage(item.id, e.target.value as PassportStage)
                    }
                  >
                    {passportStages.map((stage) => (
                      <option value={stage} key={stage}>
                        {names[stage]}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  className="compare-toggle"
                  aria-pressed={data.compare.includes(item.id)}
                  onClick={() => toggleCompare(item.id)}
                >
                  {data.compare.includes(item.id) ? "Comparing" : "Compare"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState title="A blank page. A world of possibilities.">
          <p>
            Use the bookmark on any story to keep it here. Your Passport is
            stored only in this browser — clearing its data will remove it.
          </p>
          <Link href="/explore" className="button">
            Find your first story ↗
          </Link>
        </EmptyState>
      )}
      <p className="passport-message" role="status">
        {message ||
          "Saved in this browser. No account or cloud sync. Your private plan is not sent to EA."}
      </p>
    </>
  );
}
