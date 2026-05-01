import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Simply Social — Social media, fara complicatii";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0b",
          color: "#f4efe7",
          display: "flex",
          flexDirection: "column",
          padding: "72px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Accent blob */}
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "9999px",
            background: "#d9fb50",
            opacity: 0.18,
            filter: "blur(80px)",
          }}
        />

        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#a8a196",
          }}
        >
          <span>Simply Social</span>
          <span>simplysocial.ro</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "32px",
            fontSize: 132,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          <span>social media,</span>
          <span style={{ display: "flex", gap: "20px" }}>
            <span style={{ fontStyle: "italic", color: "#a8a196" }}>fara</span>
            <span>complicatii.</span>
          </span>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(244,239,231,0.12)",
            paddingTop: "28px",
            fontSize: 28,
            color: "#f4efe7",
          }}
        >
          <span>20 postari / luna · Facebook + Instagram</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 24px",
              borderRadius: "9999px",
              background: "#d9fb50",
              color: "#0a0a0b",
              fontSize: 26,
              fontWeight: 500,
            }}
          >
            299€ / luna
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
