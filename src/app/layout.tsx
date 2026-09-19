import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { indexingEnabled, SITE_DESCRIPTION, SITE_ORIGIN } from "@/lib/seo";
import "@/styles/tokens.css";
import "@/styles/global.css";
import "@/styles/prototype.css";
import "@/styles/visitor.css";
import "@/styles/expansion.css";
import "@/styles/journal.css";
import "@/styles/discovery.css";
import "@/styles/refinement.css";
import "@/styles/direction-2026.css";
import { Header, Footer } from "@/components/chrome";
import { PassportProvider } from "@/components/passport-provider";
import { demoMode, getExperiences } from "@/lib/data";
import { analyticsMeasurementId } from "@/lib/analytics";
import { AnalyticsConsent } from "@/components/analytics-consent";

const sourceSans = localFont({
  src: [
    {
      path: "../assets/fonts/SourceSans3-Variable.ttf",
      weight: "200 900",
      style: "normal",
    },
  ],
  variable: "--font-source-sans",
  display: "swap",
  fallback: ["Arial"],
});

const newsreader = localFont({
  src: [
    {
      path: "../assets/fonts/Newsreader-Variable.ttf",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "../assets/fonts/Newsreader-Italic-Variable.ttf",
      weight: "200 800",
      style: "italic",
    },
  ],
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Georgia"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Experience Authority | Experience the world from within.",
    template: "%s | Experience Authority",
  },
  description: SITE_DESCRIPTION,
  robots: { index: indexingEnabled(), follow: indexingEnabled() },
};
export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nonce = (await headers()).get("x-nonce") || undefined;
  const measurementId = analyticsMeasurementId(
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  );
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${newsreader.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {process.env.NODE_ENV === "development" && (
          <script
            nonce={nonce}
            src="https://mcp.figma.com/mcp/html-to-design/capture.js"
            async
          />
        )}
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <PassportProvider ids={getExperiences().map((e) => e.id)}>
          {demoMode && (
            <aside className="preview-notice" aria-label="Design preview">
              <span>DESIGN PREVIEW</span>
              <span className="preview-notice-detail">
                Demo stories. No verified access or bookings.
              </span>
            </aside>
          )}
          <Header />
          <main id="main">{children}</main>
          {measurementId && <AnalyticsConsent measurementId={measurementId} />}
          <Footer analyticsAvailable={Boolean(measurementId)} />
        </PassportProvider>
      </body>
    </html>
  );
}
