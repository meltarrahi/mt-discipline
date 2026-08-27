import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e2a47",
          borderRadius: 14,
          color: "#f1e3c4",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
        }}
      >
        MT
      </div>
    ),
    { ...size },
  );
}
