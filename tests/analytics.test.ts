import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const component = readFileSync(
  new URL("../src/components/analytics-consent.tsx", import.meta.url),
  "utf8",
);

test("basic analytics consent loads no Google tag before an explicit grant", () => {
  const grantCheck = component.indexOf('choice !== "granted"');
  const scriptCreation = component.indexOf('document.createElement("script")');
  assert.ok(grantCheck >= 0);
  assert.ok(scriptCreation > grantCheck);
  assert.match(component, /analytics_storage: "denied"/);
  assert.match(component, /ad_storage: "denied"/);
  assert.match(component, /ad_user_data: "denied"/);
  assert.match(component, /ad_personalization: "denied"/);
});

test("analytics page views exclude search parameters and private local data", () => {
  assert.doesNotMatch(component, /useSearchParams/);
  assert.match(
    component,
    /page_location: `\$\{location\.origin\}\$\{pathname\}`/,
  );
  assert.match(component, /page_referrer: safeReferrer\(\)/);
  assert.match(component, /referrer\.origin\}\$\{referrer\.pathname/);
  assert.doesNotMatch(component, /ea:passport:v1|ea:trip:v1/);
  assert.match(component, /allow_google_signals: false/);
  assert.match(component, /allow_ad_personalization_signals: false/);
});
