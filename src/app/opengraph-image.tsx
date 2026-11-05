import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "小さいから儲かる仕事研究会 ｜ PCSスタイル";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFonts() {
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "assets/NotoSansJP-Regular.woff")),
    readFile(join(process.cwd(), "assets/NotoSansJP-Bold.woff")),
  ]);
  return [
    {
      name: "Noto Sans JP",
      data: regular,
      style: "normal" as const,
      weight: 400 as const,
    },
    {
      name: "Noto Sans JP",
      data: bold,
      style: "normal" as const,
      weight: 700 as const,
    },
  ];
}

export default async function OgImage() {
  const fonts = await loadFonts();
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
          fontFamily: "Noto Sans JP",
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
            PCS ― 小さいから儲かる
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.2, opacity: 0.9 }}>
            事務所なし。従業員なし。
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.2, opacity: 0.9 }}>
            好きな仕事を、好きな時間に、好きな場所で。
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
          <span>適性を見極める / 会社の整理 / 仕事紹介 / 資金調達</span>
          <span style={{ fontWeight: 700 }}>energysite.net</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
