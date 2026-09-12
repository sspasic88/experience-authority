import { publisher } from "./publisher";

export const correctionTopics = [
  "A fact or description",
  "Opening times, booking or closure",
  "A photograph, credit or rights concern",
  "Cultural context or responsible access",
  "Something on the website does not work",
  "Something else",
] as const;

/** Only public EA paths belong in a prefilled report. Never carry URL queries. */
export function correctionPage(value: unknown): string {
  if (typeof value !== "string" || value.length > 300) return "";
  try {
    const url = new URL(value, "https://experienceauthority.com");
    if (
      url.origin !== "https://experienceauthority.com" ||
      url.username ||
      url.password
    )
      return "";
    if (!/^\/(?:[a-z0-9-]+\/?){0,4}$/.test(url.pathname)) return "";
    return url.origin + url.pathname;
  } catch {
    return "";
  }
}

export type CorrectionDraft = {
  page: string;
  title: string;
  topic: string;
  context: string;
  source: string;
};

export function correctionMessage(draft: CorrectionDraft) {
  const title = draft.title
    .replace(/[\r\n]/g, " ")
    .trim()
    .slice(0, 180);
  const topic =
    correctionTopics.find((topic) => topic === draft.topic) || "Something else";
  const subject = `EA correction: ${title || topic}`;
  const body = [
    "Hello Experience Authority,",
    "",
    `Page: ${draft.page.trim().slice(0, 300) || "Not specified"}`,
    ...(title ? [`Title: ${title}`] : []),
    `Topic: ${topic}`,
    "",
    "What needs attention:",
    draft.context.trim().slice(0, 2400),
    "",
    `Supporting public source: ${draft.source.trim().slice(0, 1000) || "Not provided"}`,
    "",
    "Please review this report before making an editorial change.",
  ].join("\n");
  return {
    subject,
    body,
    text: `To: ${publisher.email}\nSubject: ${subject}\n\n${body}`,
    href: `mailto:${publisher.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
