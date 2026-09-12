import type { PublicExperience, Status } from "./catalog";
import { guideMediaFor } from "./media";

export type EditorialRecord = {
  id: string;
  status: Status;
  publicCopy: PublicExperience;
  protectedPublicCopy?: PublicExperience;
  privateNotes?: string;
  preciseCoordinates?: [number, number];
  holderContact?: string;
};
const visible = new Set<Status>([
  "public_guide",
  "selected_open",
  "selected_context_required",
  "protected_visibility",
  "paused",
]);

function safeSourceUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}

/** A separate, narrow desk-guide route. This never confers EA Selected status. */
export function canPublishGuide(
  p: PublicExperience,
  today = new Date().toISOString().slice(0, 10),
) {
  const r = p.guideReview;
  const media = guideMediaFor(p.id);
  const validDate = (value: string) =>
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    Number.isFinite(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value;
  return Boolean(
    p.status === "public_guide" &&
    !p.demo &&
    Boolean(
      media &&
      p.image === media.src &&
      p.imageAlt === media.alt &&
      safeSourceUrl(media.sourceUrl) &&
      safeSourceUrl(media.licenseUrl) &&
      media.photographer.trim() &&
      media.title.trim() &&
      media.licenseName.trim() &&
      ["documented_license", "official_source"].includes(media.rightsBasis) &&
      validDate(media.rightsCheckedOn) &&
      media.visualReview.outcome === "approved" &&
      validDate(media.visualReview.checkedOn) &&
      media.visualReview.checkedOn <= today &&
      media.visualReview.rationale.trim().length > 40,
    ) &&
    p.kernel.trim() &&
    p.rootedness.trim() &&
    p.responsibility.trim() &&
    p.evidence.trim() &&
    r &&
    r.basis === "public_sources" &&
    r.requiresSpecialPermission === false &&
    ["public_programme", "public_admission", "public_hospitality"].includes(
      r.scope,
    ) &&
    validDate(r.checkedOn) &&
    validDate(r.reviewBy) &&
    r.checkedOn <= today &&
    today <= r.reviewBy &&
    r.checkedOn < r.reviewBy &&
    Date.parse(r.reviewBy) - Date.parse(r.checkedOn) <= 90 * 86400000 &&
    r.sources.length >= 2 &&
    new Set(r.sources.map((s) => s.url)).size >= 2 &&
    r.sources.every(
      (s) => safeSourceUrl(s.url) && s.title.trim() && s.note.trim(),
    ) &&
    safeSourceUrl(r.accessUrl) &&
    r.sources.some((s) => s.url === r.accessUrl),
  );
}

/** An explicit allowlist. Never serialize the editorial record or spread its copy. */
export function toPublicExperience(
  record: EditorialRecord,
): PublicExperience | null {
  if (!visible.has(record.status)) return null;
  const p =
    record.status === "protected_visibility"
      ? record.protectedPublicCopy
      : record.publicCopy;
  // A protected story needs independently reviewed public wording, not redacted raw copy.
  if (!p || p.id !== record.id || p.status !== record.status) return null;
  if (p.status === "public_guide" && !canPublishGuide(p)) return null;
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    field: p.field,
    place: p.place,
    country: p.country,
    countrySlug: p.countrySlug,
    regionSlug: p.regionSlug,
    status: p.status,
    image: p.image,
    imageAlt: p.imageAlt,
    kernel: p.kernel,
    rootedness: p.rootedness,
    shift: p.shift,
    humanReturn: p.humanReturn,
    responsibility: p.responsibility,
    evidence: p.evidence,
    duration: p.duration,
    participation: p.participation,
    access: p.access,
    demo: p.demo,
    ...(p.status === "public_guide" && p.guideReview
      ? {
          guideReview: {
            basis: p.guideReview.basis,
            scope: p.guideReview.scope,
            requiresSpecialPermission: p.guideReview.requiresSpecialPermission,
            checkedOn: p.guideReview.checkedOn,
            reviewBy: p.guideReview.reviewBy,
            accessUrl: p.guideReview.accessUrl,
            sources: p.guideReview.sources.map((s) => ({
              title: s.title,
              url: s.url,
              note: s.note,
            })),
          },
        }
      : {}),
  };
}
export function isDemoEnabled(env: Record<string, string | undefined>) {
  // Build-time flag can never enable demo records on the production Vercel target.
  if (env.VERCEL_ENV === "production") return false;
  try {
    const host = new URL(env.EA_SITE_URL || "http://localhost:3100").hostname;
    if (
      host === "experienceauthority.com" ||
      host.endsWith(".experienceauthority.com")
    )
      return false;
  } catch {
    return false;
  }
  return env.EA_DEMO_MODE === "true";
}
export type Approval = {
  reviewerId: string;
  role: "editor" | "local_reviewer" | "commercial";
  revision: number;
};
export function canPublish(input: {
  status: Status;
  revision: number;
  highRisk: boolean;
  holderConsent: boolean;
  evidenceReviewed: boolean;
  approvals: Approval[];
}) {
  if (
    input.status === "public_guide" ||
    !visible.has(input.status) ||
    !input.holderConsent ||
    !input.evidenceReviewed
  )
    return false;
  const reviewers = input.approvals.filter(
    (a) => a.revision === input.revision && a.role !== "commercial",
  );
  if (!reviewers.some((a) => a.role === "editor")) return false;
  if (input.highRisk || input.status === "protected_visibility") {
    return reviewers.some(
      (local) =>
        local.role === "local_reviewer" &&
        reviewers.some(
          (editor) =>
            editor.role === "editor" && editor.reviewerId !== local.reviewerId,
        ),
    );
  }
  return true;
}
