import type { PublicExperience } from "./catalog";
import { edition20260923 } from "./discovery-batch-40";
import { edition20260924 } from "./discovery-batch-41";

/** Publication dates are distinct from source-check dates. Older undated guides are not backfilled. */
export const guideReleases = [
  { date: "2026-09-24", slugs: Object.values(edition20260924).flat() },
  { date: "2026-09-23", slugs: Object.values(edition20260923).flat() },
  {
    date: "2026-09-19",
    slugs: [
      "stay-where-the-town-knows-your-host",
      "follow-the-colour-back-to-the-wool",
      "meet-the-island-through-the-uga",
      "let-the-room-introduce-mindelo",
      "stay-until-the-desert-loses-its-colour",
      "build-hudut-from-the-coconut-outward",
      "pick-the-leaf-before-the-cup",
      "coil-the-lowcountry-one-stitch-at-a-time",
      "raise-a-room-from-a-circle",
      "watch-the-body-tension-the-loom",
      "read-prague-through-a-movement",
      "hear-the-flute-before-anyone-plays",
      "walk-where-terere-is-everyday-language",
      "meet-the-largest-fish-on-its-terms",
      "let-the-drum-recover-its-history",
      "let-the-clay-keep-the-fingerprints",
      "meet-the-cloth-before-it-becomes-a-gift",
      "enter-sevdah-through-the-room-that-remembers-it",
      "watch-silver-become-a-line",
      "let-the-ballad-move-the-circle",
      "hear-the-drum-after-sunset",
      "hear-the-wooden-racket-crack",
      "follow-cardboard-toward-bay-street",
      "move-the-stone-that-holds-the-water",
      "choose-the-harvest-before-the-cellar",
    ],
  },
  {
    date: "2026-09-15",
    slugs: [
      "draw-the-line-that-keeps-the-colour-out",
      "meet-the-wine-below-the-cellar-floor",
      "climb-without-making-the-mountain-yours",
      "let-the-jebena-slow-the-cup",
      "let-the-lateen-sail-read-lamus-water",
      "hear-the-mallet-open-the-cloth",
      "begin-haida-gwaii-with-haida-voices",
      "let-the-band-open-the-dance-floor",
      "watch-rio-build-the-parade-before-carnaval",
      "stand-where-the-sound-system-does-the-talking",
      "roast-the-cup-on-kilimanjaros-slopes",
      "listen-for-the-turn-inside-mugham",
      "hear-a-drum-become-an-instrument",
      "read-the-ballroom-above-the-shop",
      "read-the-island-one-stone-at-a-time",
      "read-the-ring-before-the-horse-runs",
      "let-the-pony-read-the-mountain",
      "wait-until-the-turtle-is-ready",
      "read-nubia-before-the-sail-opens",
      "watch-one-bolt-cross-the-republic",
      "meet-the-rose-before-it-becomes-water",
      "walk-inside-the-earthen-ring",
      "follow-the-pearl-back-underwater",
      "read-a-city-from-the-waterline",
      "let-the-delta-decide-the-route",
      "follow-a-sheet-back-to-the-mulberry-branch",
      "follow-kente-one-strip-at-a-time",
      "see-lunch-built-from-fire-stone-and-leaves",
      "take-the-lagoon-one-stroke-at-a-time",
    ],
  },
  {
    date: "2026-09-14",
    slugs: [
      "let-the-city-take-its-evening-walk",
      "watch-a-town-move-in-prayer",
      "let-the-leaves-reach-the-water-first",
      "watch-flowers-enter-the-paper",
      "taste-the-distance-from-pod-to-bar",
      "meet-the-rose-before-the-perfume",
      "let-the-shadows-move-after-angkor",
      "hear-a-landscape-without-instruments",
      "learn-hong-kong-one-hand-at-a-time",
      "draw-with-silver-in-skopjes-old-bazaar",
      "read-a-ship-before-the-sails-arrive",
      "read-monument-valley-beyond-the-scenic-drive",
      "follow-balis-water-before-the-rice",
      "make-tea-before-taipei-drinks-it",
      "follow-appenzeller-from-vat-to-cellar",
      "watch-a-dhow-take-shape-beside-the-creek",
      "follow-medellins-flowers-back-to-the-farm",
      "read-a-hive-from-the-inside",
      "follow-mastiha-back-to-the-tree",
    ],
  },
  {
    date: "2026-09-13",
    slugs: [
      "make-halloumi-before-it-reaches-the-plate",
      "read-a-smoke-sauna-before-the-heat",
      "fold-a-pattern-into-the-blue",
      "make-the-bagel-before-new-york-serves-it",
      "follow-the-fizz-through-a-working-factory",
      "open-the-other-side-of-ellis-island",
      "make-pasta-until-the-sauce-makes-sense",
      "ride-the-road-rome-built-to-leave-it",
      "put-the-gods-back-among-the-machines",
      "ask-the-market-where-london-came-from",
      "meet-the-work-before-the-curtain-rises",
      "open-a-door-the-underground-left-behind",
      "make-the-morning-before-it-reaches-the-cafe",
      "watch-a-picture-grow-one-thread-at-a-time",
      "see-what-keeps-paris-moving-underground",
      "twist-the-city-before-you-taste-it",
      "take-the-window-back-to-the-workbench",
      "watch-a-city-arrive-in-miniature",
      "meet-the-bay-on-its-working-hours",
      "read-the-landscape-one-grain-at-a-time",
      "make-something-from-the-broken-pieces",
      "watch-the-work-before-the-performance",
      "hear-the-church-before-you-climb",
      "let-the-market-write-your-menu",
      "find-a-place-through-its-scent",
      "draw-a-small-shape-in-flame",
    ],
  },
  // The preceding edition shipped at 23:06 UTC on 12 September (commit 8e42e98).
  {
    date: "2026-09-12",
    slugs: [
      "lift-a-pattern-from-the-water",
      "hear-the-arena-answer-back",
      "begin-with-rice-not-the-bottle",
      "let-the-dog-read-the-forest",
      "taste-what-time-does-to-port",
      "let-the-rainforest-be-introduced",
      "find-the-citys-wilder-edge",
    ],
  },
] as const;

export function publishedReleases(
  items: PublicExperience[],
  today = new Date().toISOString().slice(0, 10),
) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return guideReleases
    .filter((release) => release.date <= today)
    .flatMap((release) => {
      const guides = release.slugs.flatMap((slug) => bySlug.get(slug) ?? []);
      return guides.length ? [{ date: release.date, guides }] : [];
    });
}

export function recentGuideReleases(
  items: PublicExperience[],
  today = new Date().toISOString().slice(0, 10),
) {
  const cutoff = new Date(`${today}T00:00:00Z`);
  cutoff.setUTCDate(cutoff.getUTCDate() - 30);
  return publishedReleases(items, today)
    .filter((release) => release.date >= cutoff.toISOString().slice(0, 10))
    .flatMap((release) => release.guides);
}
