import test from "node:test";
import assert from "node:assert/strict";
import { publicGuides } from "../src/lib/public-guides";
import {
  getJournalArticles,
  journalArticles,
  journalArticleStructuredData,
} from "../src/lib/journal";

test("journal is a six-article edition with useful depth and distinct leads", () => {
  const articles = getJournalArticles(publicGuides);
  assert.equal(articles.length, 6);
  assert.equal(
    new Set(articles.map((article) => article.slug)).size,
    articles.length,
  );
  assert.equal(
    new Set(articles.map((article) => article.media.src)).size,
    articles.length,
  );

  for (const article of articles) {
    assert.ok(
      article.wordCount >= 450 && article.wordCount <= 700,
      article.slug + " has " + article.wordCount + " words",
    );
    assert.ok(article.sections.length >= 4 && article.sections.length <= 6);
    assert.equal(article.guides.length, article.guideSlugs.length);
    assert.ok(article.sources.length >= 2);
    assert.ok(
      article.sources.every((source) =>
        article.sourceGuideSlugs.includes(source.guideSlug),
      ),
    );
  }

  assert.doesNotMatch(JSON.stringify(journalArticles), /[—;]/);
});

test("journal fails closed when publication removes a referenced guide", () => {
  const first = journalArticles[0];
  const activeWithoutLead = publicGuides.filter(
    (guide) => guide.slug !== first.leadGuideSlug,
  );
  const articles = getJournalArticles(activeWithoutLead);

  assert.ok(!articles.some((article) => article.slug === first.slug));
  const activeSlugs = new Set(activeWithoutLead.map((guide) => guide.slug));
  for (const article of articles) {
    assert.ok(article.guideSlugs.every((slug) => activeSlugs.has(slug)));
    assert.ok(
      article.sources.every((source) => activeSlugs.has(source.guideSlug)),
    );
  }
});

test("journal structured data describes editorial articles and cited media", () => {
  const article = getJournalArticles(publicGuides)[0];
  const data = journalArticleStructuredData(article);
  const graph = data["@graph"];
  const articleNode = graph[0];
  const imageNode = graph[1];

  assert.equal(articleNode["@type"], "Article");
  assert.equal(articleNode.wordCount, article.wordCount);
  assert.deepEqual(
    articleNode.citation,
    article.sources.map((source) => source.url),
  );
  assert.equal(imageNode["@type"], "ImageObject");
  assert.equal(
    "contentUrl" in imageNode &&
      imageNode.contentUrl.endsWith(article.media.src),
    true,
  );
  assert.ok(!JSON.stringify(data).includes("Review"));
});
