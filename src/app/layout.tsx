import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { indexingEnabled, SITE_DESCRIPTION, SITE_ORIGIN } from "@/lib/seo";
import "@/styles/tokens.css";
import "@/styles/global.css";
import "@/styles/prototype.css";
import "@/styles/visitor.css";
import { Header, Footer } from "@/components/chrome";
import { PassportProvider } from "@/components/passport-provider";
import { demoMode, getExperiences } from "@/lib/data";

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
  return (
    <html lang="en" className={sourceSans.variable}>
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
          <aside className="preview-notice" aria-label="Editorial edition">
            <span className="preview-dot" />
            {demoMode ? "DESIGN PREVIEW" : "EA / PUBLIC GUIDE EDITION"}
            <span className="preview-notice-detail">
              {demoMode
                ? "Demo stories. No verified access or bookings."
                : "Original guides. Sources and access notes in every story."}
            </span>
          </aside>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </PassportProvider>
      </body>
    </html>
  );
}
