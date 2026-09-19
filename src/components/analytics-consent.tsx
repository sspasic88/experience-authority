"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ANALYTICS_CONSENT_KEY,
  ANALYTICS_EVENT,
  ANALYTICS_PREFERENCES_EVENT,
  type AnalyticsConsentChoice,
  type AnalyticsEventParameters,
} from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedEvent = {
  name: string;
  parameters: AnalyticsEventParameters;
};

const deniedConsent = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
};

function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((part) => part.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith("_ga")));
  const domains = [
    "",
    `;domain=${location.hostname}`,
    `;domain=.${location.hostname}`,
  ];
  for (const name of names)
    for (const domain of domains)
      document.cookie = `${name}=;Max-Age=0;path=/${domain};SameSite=Lax`;
}

function safeReferrer() {
  if (!document.referrer) return "";
  try {
    const referrer = new URL(document.referrer);
    return `${referrer.origin}${referrer.pathname}`;
  } catch {
    return "";
  }
}

export function AnalyticsConsent({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const started = useRef(false);
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<AnalyticsConsentChoice | null>(null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(ANALYTICS_CONSENT_KEY);
      setChoice(stored === "granted" || stored === "denied" ? stored : null);
    } catch {
      // Consent cannot be remembered, so analytics must remain off.
      setChoice("denied");
    }
    setReady(true);
    const open = () => setPreferencesOpen(true);
    window.addEventListener(ANALYTICS_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(ANALYTICS_PREFERENCES_EVENT, open);
  }, []);

  useEffect(() => {
    if (choice !== "granted" || started.current) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
    window.gtag("consent", "default", deniedConsent);
    window.gtag("consent", "update", {
      ...deniedConsent,
      analytics_storage: "granted",
    });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: `${location.origin}${location.pathname}`,
      page_referrer: safeReferrer(),
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.eaAnalytics = "true";
    document.head.appendChild(script);
    started.current = true;
  }, [choice, measurementId]);

  useEffect(() => {
    if (choice !== "granted" || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: `${location.origin}${pathname}`,
      page_referrer: safeReferrer(),
      page_title: document.title,
    });
  }, [choice, pathname]);

  useEffect(() => {
    const send = (event: Event) => {
      if (choice !== "granted" || !window.gtag) return;
      const detail = (event as CustomEvent<TrackedEvent>).detail;
      if (!detail || !/^[a-z][a-z0-9_]{0,39}$/.test(detail.name)) return;
      window.gtag("event", detail.name, {
        ...detail.parameters,
        page_location: `${location.origin}${pathname}`,
      });
    };
    window.addEventListener(ANALYTICS_EVENT, send);
    return () => window.removeEventListener(ANALYTICS_EVENT, send);
  }, [choice, pathname]);

  function remember(next: AnalyticsConsentChoice) {
    try {
      localStorage.setItem(ANALYTICS_CONSENT_KEY, next);
    } catch {
      // Never start analytics when the visitor's choice cannot be retained.
      setChoice("denied");
      setPreferencesOpen(false);
      return;
    }
    setChoice(next);
    setPreferencesOpen(false);
    if (next === "denied" && started.current) {
      window.gtag?.("consent", "update", deniedConsent);
      clearAnalyticsCookies();
      location.reload();
    }
  }

  if (!ready || (choice !== null && !preferencesOpen)) return null;

  return (
    <aside
      className="analytics-consent"
      role="dialog"
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-copy"
    >
      <p className="eyebrow">Analytics choice</p>
      <h2 id="analytics-consent-title">Private by default.</h2>
      <p id="analytics-consent-copy">
        Count visits and a small set of actions. No advertising. Search,
        Passport and journey notes stay private. Analytics remains off until
        you allow it.
      </p>
      <div className="analytics-consent-actions">
        <button
          className="button"
          type="button"
          onClick={() => remember("granted")}
        >
          Allow analytics
        </button>
        <button
          className="button button-paper"
          type="button"
          onClick={() => remember("denied")}
        >
          Keep analytics off
        </button>
      </div>
      <Link href="/privacy">How it works</Link>
    </aside>
  );
}

export function AnalyticsPreferencesButton() {
  return (
    <button
      type="button"
      className="analytics-preferences-button"
      onClick={() =>
        window.dispatchEvent(new Event(ANALYTICS_PREFERENCES_EVENT))
      }
    >
      Analytics choices
    </button>
  );
}
