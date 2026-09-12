import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { indexingEnabled, SITE_DESCRIPTION, SITE_ORIGIN } from "@/lib/seo";
import "@/styles/tokens.css";
import "@/styles/global.css";
import { Header, Footer } from "@/components/chrome";
import { PassportProvider } from "@/components/passport-provider";
import { demoMode, getExperiences } from "@/lib/data";

const nimbusSans = localFont({
  src: [
    {
      path: "../assets/fonts/NimbusSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/NimbusSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nimbus-sans",
  display: "swap",
  fallback: ["Arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Experience Authority — Experience the world from within.",
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
    <html lang="en" className={nimbusSans.variable}>
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
          <Header />
          <div className="preview-notice">
            <span className="preview-dot" />
            {demoMode ? "DESIGN PREVIEW" : "PUBLIC-SOURCE EDITION"}
            <span className="preview-notice-detail">
              {demoMode
                ? "Demo stories. No verified access or bookings."
                : "Original guides. Sources and access notes in every story."}
            </span>
          </div>
          <main id="main">{children}</main>
          <Footer />
        </PassportProvider>
      </body>
    </html>
  );
}
