import test from "node:test";
import assert from "node:assert/strict";
import ledger from "../docs/candidate-reconciliation-2026-09-14.json";
import { publicGuides } from "../src/lib/public-guides";

test("dated candidate reconciliation counts scoped coverage without turning alternatives or protected records into approvals", () => {
  assert.equal(ledger.catalogueCount, publicGuides.length);
  assert.equal(ledger.originalCandidateCount, 200);
  assert.equal(ledger.originalProtectedCount, 46);
  assert.equal(ledger.mappings.length, 63);
  assert.equal(
    new Set(ledger.mappings.map((item) => item.candidateId)).size,
    63,
  );
  const counts: Record<string, number> = {};
  for (const mapping of ledger.mappings) {
    assert.ok(publicGuides.some((guide) => guide.id === mapping.guideId));
    assert.ok(mapping.candidateId >= 1 && mapping.candidateId <= 200);
    assert.ok(mapping.boundary.length > 40);
    counts[mapping.relation] = (counts[mapping.relation] ?? 0) + 1;
  }
  assert.deepEqual(counts, {
    narrowed_public_scope: 50,
    related_alternative: 11,
    protected_public_programme_only: 2,
  });
  assert.equal(ledger.eaSelectedApprovals, 0);
  assert.equal(ledger.localValidationCompleted, false);
  assert.equal(ledger.outreachPerformed, false);
  assert.equal(
    ledger.newSourceReviews.find((review) => review.candidateId === 20)?.status,
    "evidence_hold",
  );
  assert.equal(
    ledger.newSourceReviews.find((review) => review.candidateId === 108)
      ?.status,
    "evidence_hold",
  );
  assert.equal(
    ledger.newSourceReviews.find((review) => review.candidateId === 9)?.status,
    "narrowed_public_scope",
  );
  for (const candidateId of [3, 17, 25, 81, 85]) {
    assert.equal(
      ledger.newSourceReviews.find(
        (review) => review.candidateId === candidateId,
      )?.status,
      "narrowed_public_scope",
    );
  }
  assert.ok(!ledger.mappings.some((mapping) => mapping.candidateId === 108));
  assert.ok(!ledger.mappings.some((mapping) => mapping.candidateId === 36));
  assert.ok(!ledger.mappings.some((mapping) => mapping.candidateId === 74));
  assert.ok(!ledger.mappings.some((mapping) => mapping.candidateId === 22));
  assert.ok(!ledger.mappings.some((mapping) => mapping.candidateId === 89));
  assert.equal(
    ledger.mappings.find((mapping) => mapping.candidateId === 20)?.relation,
    "related_alternative",
  );
  assert.equal(
    ledger.mappings.find((mapping) => mapping.candidateId === 24)?.relation,
    "related_alternative",
  );
  assert.equal(
    ledger.mappings.find((mapping) => mapping.candidateId === 51)?.relation,
    "related_alternative",
  );
  assert.equal(
    ledger.mappings.find((mapping) => mapping.candidateId === 154)?.relation,
    "related_alternative",
  );
  assert.equal(
    ledger.mappings.find((mapping) => mapping.candidateId === 157)?.relation,
    "narrowed_public_scope",
  );
  for (const candidateId of [51, 154, 157]) {
    assert.ok(
      ledger.newSourceReviews.some(
        (review) =>
          review.candidateId === candidateId &&
          review.checkedOn === "2026-09-14" &&
          review.outreachPerformed === false,
      ),
    );
  }
  assert.equal(
    ledger.mappings.find((mapping) => mapping.candidateId === 110)?.relation,
    "narrowed_public_scope",
  );
  assert.equal(
    ledger.mappings.find((mapping) => mapping.candidateId === 114)?.relation,
    "related_alternative",
  );
  for (const candidateId of [94, 99]) {
    assert.equal(
      ledger.mappings.find((mapping) => mapping.candidateId === candidateId)
        ?.relation,
      "related_alternative",
    );
    assert.ok(
      ledger.newSourceReviews.some(
        (review) =>
          review.candidateId === candidateId &&
          review.checkedOn === "2026-09-15" &&
          review.outreachPerformed === false,
      ),
    );
  }
  assert.equal(
    ledger.newSourceReviews.find((review) => review.candidateId === 200)
      ?.status,
    "evidence_hold",
  );
  assert.ok(!ledger.mappings.some((mapping) => mapping.candidateId === 200));
  for (const candidateId of [166, 153, 196]) {
    assert.ok(
      ledger.newSourceReviews.some(
        (review) =>
          review.candidateId === candidateId &&
          review.checkedOn === "2026-09-14" &&
          review.outreachPerformed === false,
      ),
    );
    assert.ok(
      !ledger.mappings.some((mapping) => mapping.candidateId === candidateId),
    );
  }
});
