export const passportStages = [
  "saved",
  "want-to",
  "experienced",
  "return-to",
] as const;
export type PassportStage = (typeof passportStages)[number];
export type PassportData = {
  saved: Record<string, PassportStage>;
  compare: string[];
};
export const emptyPassport: PassportData = { saved: {}, compare: [] };
/** Add a group atomically without downgrading an existing stage or touching a plan. */
export function addPassportGuides(
  data: PassportData,
  ids: string[],
  allowedIds: string[],
): PassportData {
  const allowed = new Set(allowedIds);
  const saved = { ...data.saved };
  for (const id of ids) if (allowed.has(id) && !saved[id]) saved[id] = "saved";
  return { ...data, saved };
}
export function sanitizePassport(
  value: unknown,
  allowedIds: string[],
): PassportData {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return { saved: {}, compare: [] };
  const input = value as Record<string, unknown>;
  const allow = new Set(allowedIds);
  const saved: Record<string, PassportStage> = {};
  if (
    input.saved &&
    typeof input.saved === "object" &&
    !Array.isArray(input.saved)
  ) {
    for (const [id, stage] of Object.entries(input.saved)) {
      if (allow.has(id) && passportStages.includes(stage as PassportStage))
        saved[id] = stage as PassportStage;
    }
  }
  const compare = Array.isArray(input.compare)
    ? [
        ...new Set(
          input.compare.filter(
            (id): id is string => typeof id === "string" && allow.has(id),
          ),
        ),
      ].slice(0, 3)
    : [];
  return { saved, compare };
}
