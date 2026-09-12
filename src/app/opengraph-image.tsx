import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Experience Authority — Experience the world from within.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
const regular = readFile(
  join(process.cwd(), "src/assets/fonts/SourceSans3-Regular.ttf"),
);
const semibold = readFile(
  join(process.cwd(), "src/assets/fonts/SourceSans3-Semibold.ttf"),
);
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#081b2a",
        color: "#f4f1ea",
        padding: "54px 66px",
        fontFamily: "Source Sans 3",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 12,
            height: 55,
            background: "#ff4f1f",
            transform: "skew(-18deg)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 28,
            fontWeight: 600,
            lineHeight: 0.95,
          }}
        >
          <span>Experience</span>
          <span>Authority</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 60,
          fontSize: 88,
          letterSpacing: -4,
          lineHeight: 0.98,
        }}
      >
        <span>Experience the world</span>
        <div style={{ display: "flex" }}>
          from within<span style={{ color: "#ff4f1f" }}>.</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingTop: 30,
          borderTop: "1px solid #55534F",
          fontSize: 18,
        }}
      >
        <span>Experience first. Provider second.</span>
        <span>experienceauthority.com</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Source Sans 3",
          data: await regular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Source Sans 3",
          data: await semibold,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
