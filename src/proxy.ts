import { NextResponse, type NextRequest } from "next/server";
import { contentSecurityPolicy, isTrainingBot } from "@/lib/security";
import { indexingEnabled } from "@/lib/seo";

export function proxy(request: NextRequest) {
  if (isTrainingBot(request.headers.get("user-agent") || "")) {
    return new NextResponse("Automated training collection is not permitted.", {
      status: 403,
      headers: {
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex, nofollow",
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const basePolicy = contentSecurityPolicy(
    nonce,
    process.env.NODE_ENV === "development",
  );
  const csp =
    basePolicy +
    (process.env.NODE_ENV === "production" &&
    process.env.EA_SITE_URL === "https://experienceauthority.com"
      ? "; upgrade-insecure-requests"
      : "");
  const requestHeaders = new Headers(request.headers);
  // Overwrite, never trust client-supplied nonce or CSP headers.
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("Cache-Control", "private, no-store");
  if (
    !indexingEnabled() ||
    ["/passport", "/suggest", "/corrections"].includes(
      request.nextUrl.pathname,
    ) ||
    request.nextUrl.search
  ) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static/|_next/image|images/|icon.svg$|opengraph-image$).*)",
  ],
};
