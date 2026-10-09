import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Noto_Sans_JP, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

const zen = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://energysite.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "小さいから儲かる仕事研究会 ｜ PCSスタイルの確立と実践",
    template: "%s ｜ 小さいから儲かる仕事研究会",
  },
  description:
    "地方・一人・低固定費で、自分の得意な仕事を好きな時間に行う「PCSスタイル」。適性の見極め、今の会社の整理方法、仕事紹介、資金調達まで、確立・実践に必要な情報を発信します。",
  openGraph: {
    title: "小さいから儲かる仕事研究会 ｜ PCSスタイルの確立と実践",
    description:
      "地方・一人・低固定費で働く「PCSスタイル」。適性の見極めから会社の整理、仕事紹介、資金調達までを紹介します。",
    url: siteUrl,
    siteName: "小さいから儲かる仕事研究会",
    locale: "ja_JP",
    type: "website",
  },
  // canonical は各ページで個別に指定する（ルートで固定すると全ページが
  // トップページの重複扱いになってしまうため）
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "ED3l9ZjMDdSFDRrK8dduKMWaSkT3WdQ3l2Q6wY2Tifc",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "地方・一人・低固定費で働く「PCSスタイル」を確立・実践するための情報を発信するメディア。",
  parentOrganization: {
    "@type": "Organization",
    name: site.publisher,
    founder: { "@type": "Person", name: site.representative },
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      addressRegion: "埼玉県",
      addressLocality: "蕨市",
      streetAddress: "北町1-8-16",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneE164,
    email: site.contactEmail,
    contactType: "customer service",
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  // 私的整理に関するご相談を提供する関連団体（代表理事は同一人物）
  affiliation: {
    "@type": "Organization",
    name: site.operator,
  },
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: siteUrl,
  inLanguage: "ja",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${zen.variable} ${noto.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
