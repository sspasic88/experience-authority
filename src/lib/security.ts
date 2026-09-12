// Crawler preferences, not a security boundary: user-agent strings can be spoofed.
export const TRAINING_BOTS = [
  "GPTBot",
  "CCBot",
  "ClaudeBot",
  "anthropic-ai",
  "Bytespider",
  "Amazonbot",
  "cohere-ai",
  "Meta-ExternalAgent",
  "Diffbot",
  "ImagesiftBot",
  "Omgilibot",
  "Omgili",
];
export const TRAINING_ROBOTS = [
  ...TRAINING_BOTS,
  "Google-Extended",
  "Applebot-Extended",
];
export function isTrainingBot(userAgent: string): boolean {
  return TRAINING_BOTS.some((bot) =>
    new RegExp(`(?:^|[^a-z0-9_-])${bot}(?:$|[^a-z0-9_-])`, "i").test(userAgent),
  );
}

export function contentSecurityPolicy(
  nonce: string,
  development: boolean,
): string {
  if (!/^[A-Za-z0-9+/=_-]{16,}$/.test(nonce))
    throw new Error("Invalid CSP nonce");
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${development ? " 'unsafe-eval'" : ""}`,
    "script-src-attr 'none'",
    // Next Image and React use style attributes. Scripts remain nonce-only.
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    `connect-src 'self'${development ? " ws: wss: https://mcp.figma.com" : ""}`,
    "object-src 'none'",
    "base-uri 'none'",
    "frame-ancestors 'none'",
    "frame-src 'none'",
    "form-action 'self'",
  ].join("; ");
}
