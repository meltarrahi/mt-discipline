import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0e2a47 0%, #12362b 100%)",
          color: "#faf8f4",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: "#b8862f" }}>
          Belastingen • Financiën • AI
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, marginTop: 24 }}>
          MT<span style={{ color: "#b8862f" }}>-</span>Discipline
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 24, color: "rgba(250,248,244,0.85)" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
