# energysite.net — 小さいから儲かる仕事研究会 / PCS

中小企業経営者向けメディアサイト（Next.js 16 / React 19 / Tailwind CSS v4）。
私的整理による資産保全、収益づくり、資金調達・財務改善の情報を発信します。

## 技術スタック

| 項目 | 採用 |
| --- | --- |
| フレームワーク | Next.js 16（App Router / Turbopack） |
| UI | React 19 / TypeScript |
| スタイル | Tailwind CSS v4（`src/app/globals.css` の `@theme`） |
| アニメーション | Motion |
| テーマ切替 | next-themes（OS 連動 + 手動、ライト / ダーク） |
| フォント | next/font：Zen Kaku Gothic New(見出し) / Noto Sans JP(本文) / IBM Plex Mono(英字) |
| メール送信 | Resend（Server Action、未設定時は mailto フォールバック） |

## セットアップ

```bash
npm install
cp .env.example .env.local   # 必要に応じて値を設定
npm run dev                  # http://localhost:3000
```

> このマシンには Node.js が無かったため、winget で Node.js 24 LTS を導入済みです。
> 新しいターミナルを開けば `node` / `npm` が使えます。

## スクリプト

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバー |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番サーバー（要 `build`） |
| `npm run lint` | ESLint |

## ディレクトリ

```
src/
  app/
    page.tsx            トップページ
    layout.tsx          フォント・メタデータ・テーマ
    globals.css         デザイントークン
    actions.ts          お問い合わせ Server Action（Resend）
    icon.svg            favicon
    opengraph-image.tsx OGP 画像（動的生成）
    sitemap.ts robots.ts
    contact/ about/ about/pcs/ about/profile/
    links/ news/ privacy/ legal/ disclaimer/
  components/           セクション別コンポーネント
  lib/site.ts           サイト全体のコンテンツ定義（ここを編集）
```

コピー・データはすべて `src/lib/site.ts` に集約しています。

## お問い合わせフォームの有効化

1. [Resend](https://resend.com) でアカウントを作成し、送信元ドメイン（`energysite.net`）を認証
2. `.env.local` に設定:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=info@energysite.net
   CONTACT_FROM_EMAIL=no-reply@energysite.net
   ```
3. 未設定の場合、フォームは「メールソフトで送信する」フォールバックを表示します
   （送信先は `src/lib/site.ts` の `contactEmail`）。

## 未確定・要差し替え

- `src/app/legal/page.tsx`：特定商取引法の表記（角括弧 ［ ］ の事業者情報）
- `src/app/privacy/page.tsx`：問い合わせ窓口・制定日
- `src/lib/site.ts` の `contactEmail`：実アドレス
- `src/lib/site.ts` の `updates`：お知らせ本文（配列に追加すると一覧へ反映）

## デプロイ（推奨：Vercel）

1. このディレクトリを Git 管理下に置く（このマシンに git が未インストールのため未実施）
   ```bash
   git init && git add -A && git commit -m "initial"
   ```
2. GitHub にリポジトリを作成して push
3. [Vercel](https://vercel.com) で Import。環境変数（`RESEND_API_KEY` ほか）を設定
4. ドメイン `energysite.net` を Vercel に追加し、DNS を切り替え
