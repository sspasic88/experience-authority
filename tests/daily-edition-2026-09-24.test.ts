import test from "node:test";
import assert from "node:assert/strict";
import { guideBatch41 } from "../src/lib/guide-batch-41";
import { guideBatch40 } from "../src/lib/guide-batch-40";
import {
  edition20260924,
  discoveryBatch41,
} from "../src/lib/discovery-batch-41";
import {
  interests,
  matchesInterest,
  connectedExperiences,
} from "../src/lib/catalog";
import { publicGuides } from "../src/lib/public-guides";
import { canPublishGuide } from "../src/lib/publication";
import { guideMediaFor } from "../src/lib/media";
import { publishedReleases } from "../src/lib/releases";
import { editorialPathways } from "../src/lib/editorial-pathways";
import { cityChapters } from "../src/lib/city-chapters";

test("24 September has eighteen net-new guides and exactly three primary allocations in each interest", () => {
  const slugs = Object.values(edition20260924).flat();
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.deepEqual([...slugs].sort(), guideBatch41.map((g) => g.slug).sort());
  assert.deepEqual(
    Object.keys(edition20260924).sort(),
    interests.map((i) => i.slug).sort(),
  );
  for (const [interestSlug, entries] of Object.entries(edition20260924)) {
    assert.equal(entries.length, 3);
    const interest = interests.find((i) => i.slug === interestSlug)!;
    for (const slug of entries) {
      const guide = guideBatch41.find((g) => g.slug === slug)!;
      assert.ok(matchesInterest(guide, interest), slug);
      assert.ok(canPublishGuide(guide, "2026-09-24"), slug);
      assert.ok(!canPublishGuide(guide, "2026-09-23"), slug);
      assert.ok(
        !guideBatch40.some((g) => g.slug === slug || g.id === guide.id),
      );
      assert.ok(discoveryBatch41[slug]);
      assert.ok(guideMediaFor(guide.id));
      assert.ok(
        editorialPathways.some((p) =>
          (p.guideSlugs as readonly string[]).includes(slug),
        ),
        slug,
      );
      assert.match(guide.evidence, /EA has not/);
      const copy = [
        guide.title,
        guide.summary,
        guide.kernel,
        guide.rootedness,
        guide.shift,
        guide.humanReturn,
        guide.responsibility,
        guide.evidence,
        guide.duration,
        guide.participation,
        guide.access,
      ].join(" ");
      assert.doesNotMatch(copy, /[;—]/);
    }
  }
  assert.equal(
    publishedReleases(publicGuides, "2026-09-24")[0].guides.length,
    18,
  );
});

test("today's practical boundaries survive the catalogue integration", () => {
  const byId = (id: string) => guideBatch41.find((g) => g.id === id)!;
  assert.ok(
    matchesInterest(
      byId("bangkok-sompong-curry"),
      interests.find((i) => i.slug === "eat-drink")!,
    ),
  );
  assert.ok(
    matchesInterest(
      byId("bangkok-sompong-curry"),
      interests.find((i) => i.slug === "make-learn")!,
    ),
  );
  assert.match(
    byId("lisbon-puraceramica-handbuilding").responsibility,
    /three to four weeks/,
  );
  assert.match(byId("tokyo-sokichi-kiriko").responsibility, /cash payment/);
  assert.match(byId("sydney-manly-adult-surf").evidence, /phone or email/);
  assert.equal(
    byId("sydney-manly-adult-surf").guideReview?.reviewBy,
    "2026-10-08",
  );
  assert.match(
    byId("buenos-aires-south-circuit").responsibility,
    /different meeting addresses/,
  );
  assert.match(byId("taipei-ri-xing-type").participation, /No hands-on class/);
  assert.match(byId("london-parliament-hill-lido").rootedness, /unheated/);
  assert.match(
    byId("rotorua-pavilion-pools").responsibility,
    /head above water/,
  );
  assert.match(byId("bangkok-sala-chalermkrung").evidence, /mixed performance/);
  assert.match(byId("new-orleans-preservation-hall").access, /730 Saint Peter/);
  assert.match(byId("seoul-saturday-gugak").responsibility, /ages eight/);
  assert.equal(
    guideMediaFor("taipei-ri-xing-type")?.rightsBasis,
    "documented_license",
  );
  assert.equal(
    guideMediaFor("london-parliament-hill-lido")?.licenseName,
    "CC BY-SA 2.0",
  );
});

test("new local chapters connect distinct activities without mixing cities or selling a package", () => {
  for (const name of ["tokyo", "taipei", "bangkok"]) {
    const chapter = cityChapters.find((c) => c.slug === name)!;
    assert.ok(chapter);
    assert.match(chapter.planning, /package|shared booking/);
    for (const stop of chapter.stops) {
      const guide = publicGuides.find((g) => g.slug === stop.slug)!;
      assert.equal(guide.regionSlug, name);
      const next = connectedExperiences(guide, publicGuides)[0];
      assert.equal(next.scope, "same_area");
      assert.notEqual(next.item.field, guide.field);
    }
  }
});
