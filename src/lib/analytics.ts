export const ANALYTICS_CONSENT_KEY = "ea:analytics-consent:v1";
export const ANALYTICS_PREFERENCES_EVENT = "ea:analytics-preferences";
export const ANALYTICS_EVENT = "ea:analytics-event";

export type AnalyticsConsentChoice = "granted" | "denied";
export type AnalyticsEventParameters = Record<
  string,
  string | number | boolean
>;

export function analyticsMeasurementId(value?: string): string | null {
  const id = value?.trim().toUpperCase() || "";
  return /^G-[A-Z0-9]+$/.test(id) ? id : null;
}

export function trackEaEvent(
  name: string,
  parameters: AnalyticsEventParameters = {},
) {
  if (typeof window === "undefined" || !/^[a-z][a-z0-9_]{0,39}$/.test(name))
    return;
  window.dispatchEvent(
    new CustomEvent(ANALYTICS_EVENT, { detail: { name, parameters } }),
  );
}
