import { notFound } from "next/navigation";
import { publisher } from "@/lib/publisher";
import Link from "next/link";
import { PageIntro } from "@/components/editorial";
import { DraftForm } from "@/components/draft-form";
import { CorrectionForm } from "@/components/correction-form";
import { correctionPage } from "@/lib/corrections";
import { editorialPages } from "@/lib/pages";
import { publicGuideMedia } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { getExperiences } from "@/lib/data";
const knownSections = new Set([
  ...Object.keys(editorialPages),
  "suggest",
  "corrections",
  "credits",
]);
type Props = {
  params: Promise<{ section: string }>;
  searchParams: Promise<{ experience?: string; page?: string }>;
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
      "Report an inaccurate detail, changed access, a photo concern or a problem with the website to the EA editorial team.",
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
    const { experience, page } = await searchParams;
    const correction = section === "corrections";
    const guide =
      typeof experience === "string"
        ? getExperiences().find((item) => item.slug === experience)
        : undefined;
    return (
      <div className="wrap page-section">
        <PageIntro
          eyebrow={
            correction ? "Help keep EA accurate" : "Help a story find its place"
          }
          title={
            correction ? "Help us get it right." : "What should we know about?"
          }
        >
          <p>
            {correction
              ? "Spotted something wrong? Tell us about an inaccurate detail, changed access, a photograph or something that does not work. A useful guide should be open to correction."
              : "Tell us about an experience that is rooted in a place. A suggestion is a starting point for research, never a promise of publication."}
          </p>
        </PageIntro>
        {correction ? (
          <CorrectionForm
            initialPage={
              guide
                ? correctionPage(`/experiences/${guide.slug}`)
                : correctionPage(page)
            }
            initialTitle={guide?.title}
          />
        ) : (
          <>
            <p className="prose">
              To send a message, email{" "}
              <a
                href={
                  "mailto:" +
                  publisher.email +
                  "?subject=" +
                  encodeURIComponent(
                    correction ? "EA correction" : "EA suggestion",
                  )
                }
              >
                {publisher.email}
              </a>
              . The tool below only prepares an unsent draft.
            </p>
            <DraftForm
              correction={correction}
              initialExperience={
                typeof experience === "string" ? experience.slice(0, 180) : ""
              }
            />
          </>
        )}
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
            Every published photograph has a named credit, source page and
            visible rights record. Guide imagery is editorial context, never
            evidence that EA attended, assessed or endorses an experience.
          </p>
        </PageIntro>
        <div className="prose-layout">
          <aside className="prose-aside">
            No AI-generated imagery is used. Open licences are preferred. When
            an exceptional official-source image is the clearest honest view, we
            identify that status instead of implying a licence we do not hold.
            Every photograph has a depiction boundary below.
          </aside>
          <article className="prose">
            <section>
              <h2>Photography.</h2>
              <h3>Compass guides.</h3>
              <ul>
                {publicGuideMedia.map((media) => (
                  <li id={`media-${media.guideId}`} key={media.guideId}>
                    <a href={media.sourceUrl} target="_blank" rel="noreferrer">
                      {media.photographer}: {media.title}
                    </a>
                    . {media.licenseName} ({" "}
                    <a href={media.licenseUrl} target="_blank" rel="noreferrer">
                      {media.rightsBasis === "documented_license"
                        ? "licence"
                        : "official source"}
                    </a>
                    ). Source and rights checked {media.rightsCheckedOn}.{" "}
                    {media.depiction}
                  </li>
                ))}
              </ul>
              <p>
                Unsplash photographs are used under the{" "}
                <a
                  href="https://unsplash.com/license"
                  target="_blank"
                  rel="noreferrer"
                >
                  Unsplash License
                </a>
                . Creative Commons photographs are used under the individual
                licences linked above. Images are resized and compressed for the
                web and may be cropped by the responsive layout. No AI image
                generation or content alteration is used. Adapted versions of CC
                BY-SA photographs remain available under the same CC BY-SA
                licence. No photographer, subject or place endorses Experience
                Authority.
              </p>
              <p>
                Official-source use is limited, credited in good faith and never
                presented as ownership or endorsement. If a creator or rights
                holder believes a credit or use should change, the{" "}
                <Link href="/corrections">corrections page</Link> can help
                prepare a message. It opens your email app or provides a copy,
                and sends nothing until you choose to send it yourself.
              </p>
              <h3>Prototype archive.</h3>
              <p>
                These earlier illustrative assets belong to the opt-in design
                prototype. Public guide, homepage, collection and Journal
                photography is credited individually above.
              </p>
              <ul>
                <li>
                  <a
                    href="https://unsplash.com/photos/Tq4YjCa2BSc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Alex Jones: pottery and craft
                  </a>
                  . Actual place unspecified. Not evidence of an Alentejo
                  experience.
                </li>
                <li>
                  <a
                    href="https://unsplash.com/photos/Dw3prNMuoBc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Meg von Haartman: Korčula harbour, Croatia
                  </a>
                  . Not evidence of a hosted harbour experience.
                </li>
                <li>
                  <a
                    href="https://unsplash.com/photos/SAPvKo12dQE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Anne Preble: Pike Place Market, Seattle, USA
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
                    Yosuke Ota: Meiji Shrine forest, Tokyo, Japan
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
  const items = getExperiences();
  const proof =
    section === "method"
      ? [
          {
            number: "01 / The experience",
            title: "Something worth doing.",
            text: "A specific way to take part, observe or understand a place. Every guide explains the encounter before introducing the organisation that makes it possible.",
          },
          {
            number: "02 / The context",
            title: "A reason it belongs here.",
            text: "The connection to local knowledge, working landscapes or shared life. Source links let you follow the account beyond our words.",
          },
          {
            number: "03 / The practical route",
            title: "A way to plan it.",
            text: "What you do, how much time to allow and where to check current access. The source date and the limits of our research stay visible in the guide.",
          },
        ]
      : section === "about"
        ? [
            {
              number: `${items.length} guides`,
              title: "A growing world.",
              text: `Specific ways into ${new Set(items.map((item) => item.countrySlug)).size} countries and territories. Each one starts with a real public experience and the curiosity it invites.`,
            },
            {
              number: "Your own direction",
              title: "Find what moves you.",
              text: "Food, making, movement, music and quieter moments. Look for the kind of day you want, then explore the place through it.",
            },
            {
              number: "No account needed",
              title: "Keep the good ideas.",
              text: "Save a guide in Passport, compare it with another and begin a private journey draft. Share an idea now or return when the dates take shape.",
            },
          ]
        : [];
  return (
    <div className="wrap">
      <PageIntro eyebrow={page.eyebrow} title={page.title}>
        <p>{page.intro}</p>
      </PageIntro>
      {proof.length > 0 && (
        <div className="editorial-proof">
          {proof.map((item) => (
            <section key={item.title}>
              <p className="eyebrow">{item.number}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </section>
          ))}
        </div>
      )}
      {page.sections.length > 3 && (
        <nav className="editorial-jump-links" aria-label="On this page">
          {page.sections.map((s, index) => (
            <a key={s.title} href={`#section-${index + 1}`}>
              {s.title}
            </a>
          ))}
        </nav>
      )}
      <div className="prose-layout">
        <aside className="prose-aside">
          <p>{page.aside}</p>
        </aside>
        <article className="prose">
          {["legal", "privacy", "about", "transparency"].includes(section) && (
            <p>
              <a
                href={
                  "mailto:" +
                  publisher.email +
                  "?subject=" +
                  encodeURIComponent("EA enquiry")
                }
              >
                {publisher.email}
              </a>{" "}
              · <Link href="/legal">Publisher details</Link>
            </p>
          )}
          {section === "legal" && (
            <p>
              <a href={publisher.registerUrl}>Company register ↗</a>
            </p>
          )}
          {section === "privacy" && (
            <p>
              <a href="https://vercel.com/legal/privacy-notice">
                Vercel privacy notice ↗
              </a>{" "}
              ·{" "}
              <a href="https://ico.org.uk/make-a-complaint/">
                Contact the ICO ↗
              </a>
            </p>
          )}
          {page.sections.map((s, index) => (
            <section key={s.title} id={`section-${index + 1}`}>
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
