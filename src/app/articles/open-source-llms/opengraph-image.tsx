import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#212121",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#ebebeb",
              color: "#212121",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "sans-serif",
              letterSpacing: "-0.5px",
              borderRadius: "6px",
              padding: "4px 10px",
            }}
          >
            KI
          </div>
          <span style={{ color: "#606060", fontSize: 15, fontFamily: "sans-serif" }}>
            khizarimran.com
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              color: "#6badf5",
              fontSize: 14,
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ML Engineering
          </div>
          <div
            style={{
              color: "#ebebeb",
              fontSize: 54,
              fontFamily: "sans-serif",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            Do Open Source LLMs Make Us A Frontier Lab?
          </div>
        </div>

        <div style={{ color: "#606060", fontSize: 16, fontFamily: "sans-serif" }}>
          Khizar Imran · April 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
