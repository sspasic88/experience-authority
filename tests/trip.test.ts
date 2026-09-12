import test from "node:test";
import assert from "node:assert/strict";
import { emptyTrip, sanitizeTrip, tripText } from "../src/lib/trip";
import { publicGuides } from "../src/lib/public-guides";

test("trip data is bounded and restricted to current guide ids", () => {
  for (const bad of [null, [], true, "bad"])
    assert.deepEqual(sanitizeTrip(bad, []), emptyTrip);
  const id = publicGuides[0].id;
  const trip = sanitizeTrip(
    {
      name: "x".repeat(300),
      logistics: "y".repeat(4000),
      entries: [
        { id, day: 99, note: "z".repeat(800) },
        { id, day: 2 },
        { id: "private-record", day: 1 },
        null,
      ],
    },
    [id],
  );
  assert.equal(trip.name.length, 80);
  assert.equal(trip.logistics.length, 2000);
  assert.deepEqual(trip.entries, [{ id, day: 1, note: "z".repeat(600) }]);
});
test("sharing excludes private free text unless explicitly included, and retains only public links", () => {
  const trip = {
    name: "PRIVATE NAME",
    logistics: "PRIVATE HOTEL",
    entries: [
      { id: publicGuides[0].id, day: 2, note: "PRIVATE NOTE" },
      { id: publicGuides[1].id, day: 1, note: "" },
    ],
  };
  const publicText = tripText(trip, publicGuides);
  assert.ok(!publicText.includes("PRIVATE"));
  assert.ok(publicText.indexOf("Day 1") < publicText.indexOf("Day 2"));
  assert.ok(publicText.includes("not confirmed reservations"));
  assert.ok(tripText(trip, publicGuides, true).includes("PRIVATE HOTEL"));
});
