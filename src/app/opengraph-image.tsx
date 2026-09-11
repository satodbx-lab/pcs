import { ImageResponse } from "next/og";

export const alt = "小さいから儲かる仕事研究会 ｜ PCSスタイル";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#1b3a8f",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.10) 2px, transparent 2px)",
          backgroundSize: "34px 34px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              border: "3px solid rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            P
          </div>
          <div style={{ fontSize: 24, letterSpacing: 4, opacity: 0.85 }}>
            PCS — PROFITABLE COZ SMALL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.2, opacity: 0.9 }}>
            No office. No employees.
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.2, opacity: 0.9 }}>
            Your work, your hours, your place.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            opacity: 0.8,
          }}
        >
          <span>Fit check / Restructuring / Work intro / Funding</span>
          <span style={{ fontWeight: 700 }}>energysite.net</span>
        </div>
      </div>
    ),
    size,
  );
}
