import test from "node:test";
import assert from "node:assert/strict";
import {
  canPublish,
  isDemoEnabled,
  toPublicExperience,
  type EditorialRecord,
} from "../src/lib/publication";
import {
  filterExperiences,
  type PublicExperience,
  type Status,
} from "../src/lib/catalog";
import { sanitizePassport } from "../src/lib/passport";

const fixture: PublicExperience = {
  id: "one",
  slug: "one",
  title: "A clay story",
  summary: "Hands at work",
  field: "make",
  place: "Alentejo",
  country: "Portugal",
  countrySlug: "portugal",
  regionSlug: "alentejo",
  status: "selected_context_required",
  image: null,
  imageAlt: "",
  kernel: "A demo",
  rootedness: "Unverified",
  shift: "Look closer",
  humanReturn: "A possibility",
  responsibility: "No access",
  evidence: "Demo only",
  duration: "Unknown",
  participation: "Unknown",
  access: "Not available",
  demo: true,
};
test("only public lifecycle states can produce a public DTO", () => {
  for (const status of [
    "research_candidate",
    "do_not_publish",
    "retired",
  ] as Status[])
    assert.equal(
      toPublicExperience({ id: "one", status, publicCopy: fixture }),
      null,
    );
  assert.equal(
    toPublicExperience({
      id: "one",
      status: fixture.status,
      publicCopy: fixture,
    })?.id,
    "one",
  );
});
test("DTO allowlist removes unknown and private properties recursively by construction", () => {
  const leaked = {
    ...fixture,
    privateNotes: "SECRET",
    preciseCoordinates: [12.12345, 16.12345],
    holderContact: "PRIVATE",
  };
  const result = toPublicExperience({
    id: "one",
    status: fixture.status,
    publicCopy: leaked,
    privateNotes: "SECRET",
    holderContact: "PRIVATE",
    preciseCoordinates: [12.12345, 16.12345],
  });
  const serialized = JSON.stringify(result);
  for (const marker of [
    "SECRET",
    "PRIVATE",
    "12.12345",
    "privateNotes",
    "holderContact",
    "preciseCoordinates",
  ])
    assert.ok(!serialized.includes(marker));
});
test("protected records fail closed without separate reviewed public narrative", () => {
  const record: EditorialRecord = {
    id: "one",
    status: "protected_visibility",
    publicCopy: {
      ...fixture,
      status: "protected_visibility",
      title: "SECRET PLACE",
      summary: "SECRET DIRECTIONS",
    },
  };
  assert.equal(toPublicExperience(record), null);
  const result = toPublicExperience({
    ...record,
    protectedPublicCopy: {
      ...fixture,
      status: "protected_visibility",
      title: "A protected story",
      place: "Withheld",
      country: "Not disclosed",
      countrySlug: "",
      regionSlug: "",
    },
  });
  assert.ok(!JSON.stringify(result).includes("SECRET"));
  assert.equal(result?.place, "Withheld");
});
test("record identity and review status mismatches are rejected", () => {
  assert.equal(
    toPublicExperience({
      id: "different",
      status: fixture.status,
      publicCopy: fixture,
    }),
    null,
  );
  assert.equal(
    toPublicExperience({ id: "one", status: "paused", publicCopy: fixture }),
    null,
  );
});
test("demo flag is opt-in and cannot override production or canonical domain gate", () => {
  assert.equal(isDemoEnabled({}), false);
  assert.equal(isDemoEnabled({ EA_DEMO_MODE: "false" }), false);
  assert.equal(isDemoEnabled({ EA_DEMO_MODE: "true" }), true);
  assert.equal(
    isDemoEnabled({ EA_DEMO_MODE: "true", VERCEL_ENV: "preview" }),
    true,
  );
  assert.equal(
    isDemoEnabled({ EA_DEMO_MODE: "true", VERCEL_ENV: "production" }),
    false,
  );
  for (const url of [
    "https://experienceauthority.com",
    "https://www.experienceauthority.com",
    "not a URL",
  ])
    assert.equal(
      isDemoEnabled({ EA_DEMO_MODE: "true", EA_SITE_URL: url }),
      false,
    );
});
test("search is case-insensitive, intersects filters and has a real empty state", () => {
  assert.equal(
    filterExperiences([fixture], {
      q: " CLAY ",
      field: "make",
      place: "portugal",
      status: fixture.status,
    }).length,
    1,
  );
  assert.equal(filterExperiences([fixture], { field: "taste" }).length, 0);
  assert.equal(filterExperiences([fixture], { q: "<script>" }).length, 0);
  assert.equal(
    filterExperiences([{ ...fixture, place: "Reykjavík" }], {
      q: "Reykjavik",
    }).length,
    1,
  );
});
test("commercial approval never grants editorial publication authority", () => {
  assert.equal(
    canPublish({
      status: "selected_open",
      revision: 2,
      highRisk: false,
      holderConsent: true,
      evidenceReviewed: true,
      approvals: [{ reviewerId: "seller", role: "commercial", revision: 2 }],
    }),
    false,
  );
});
test("protected publication requires distinct current editor and local reviewer", () => {
  const input = {
    status: "protected_visibility" as const,
    revision: 2,
    highRisk: true,
    holderConsent: true,
    evidenceReviewed: true,
  };
  assert.equal(
    canPublish({
      ...input,
      approvals: [
        { reviewerId: "a", role: "editor", revision: 2 },
        { reviewerId: "a", role: "local_reviewer", revision: 2 },
      ],
    }),
    false,
  );
  assert.equal(
    canPublish({
      ...input,
      approvals: [
        { reviewerId: "a", role: "editor", revision: 2 },
        { reviewerId: "b", role: "local_reviewer", revision: 1 },
      ],
    }),
    false,
  );
  assert.equal(
    canPublish({
      ...input,
      approvals: [
        { reviewerId: "a", role: "editor", revision: 2 },
        { reviewerId: "b", role: "local_reviewer", revision: 2 },
      ],
    }),
    true,
  );
  assert.equal(
    canPublish({
      ...input,
      holderConsent: false,
      approvals: [
        { reviewerId: "a", role: "editor", revision: 2 },
        { reviewerId: "b", role: "local_reviewer", revision: 2 },
      ],
    }),
    false,
  );
});
test("local Passport sanitizes unknown identifiers, malformed data and comparison overflow", () => {
  assert.deepEqual(sanitizePassport(null, ["one"]), { saved: {}, compare: [] });
  assert.deepEqual(
    sanitizePassport(
      {
        saved: { one: "saved", secret: "saved", two: "invalid" },
        compare: ["one", "one", "secret", "two", "three", "four"],
      },
      ["one", "two", "three", "four"],
    ),
    { saved: { one: "saved" }, compare: ["one", "two", "three"] },
  );
  assert.deepEqual(sanitizePassport({ saved: [], compare: "one" }, ["one"]), {
    saved: {},
    compare: [],
  });
});
