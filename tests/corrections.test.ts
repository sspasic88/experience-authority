import test from "node:test";
import assert from "node:assert/strict";
import {
  correctionMessage,
  correctionPage,
  correctionTopics,
} from "../src/lib/corrections";
import { publisher } from "../src/lib/publisher";

test("correction prefills keep only public same-origin page paths", () => {
  assert.equal(
    correctionPage("/experiences/a-bowl-of-attention?email=private#notes"),
    "https://experienceauthority.com/experiences/a-bowl-of-attention",
  );
  assert.equal(
    correctionPage("/journal/a-better-question-than-is-it-authentic"),
    "https://experienceauthority.com/journal/a-better-question-than-is-it-authentic",
  );
  for (const value of [
    undefined,
    ["/"],
    "//evil.example",
    "https://experienceauthority.com.evil.example/",
    "javascript:alert(1)",
    "https://name:secret@experienceauthority.com/",
    "/%0aBCC",
  ])
    assert.equal(correctionPage(value), "");
});
test("the email draft includes context and safely encodes user text without adding recipients", () => {
  const draft = correctionMessage({
    page: "https://experienceauthority.com/experiences/a-bowl-of-attention",
    title: "Tea\nBcc: example@test.invalid",
    topic: correctionTopics[1],
    context: "The opening times changed. Tea & coffee cost €20?",
    source: "https://example.org/source?a=1&b=2",
  });
  const url = new URL(draft.href);
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, publisher.email);
  assert.deepEqual([...url.searchParams.keys()], ["subject", "body"]);
  assert.doesNotMatch(url.searchParams.get("subject")!, /[\r\n]/);
  assert.equal(url.searchParams.get("body"), draft.body);
  assert.match(draft.body, /The opening times changed/);
  assert.match(draft.body, /https:\/\/example.org\/source\?a=1&b=2/);
  assert.match(draft.text, /To: info@innovationauthority.com/);
});
