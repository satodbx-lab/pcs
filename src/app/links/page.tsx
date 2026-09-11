import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "お役立ちリンク集",
  description:
    "経営者の再スタートに役立つ、公的機関・支援制度などの情報源をまとめています。",
};

const groups = [
  {
    heading: "公的な相談・支援",
    items: [
      { label: "中小企業庁", href: "https://www.chusho.meti.go.jp/" },
      { label: "中小企業基盤整備機構（中小機構）", href: "https://www.smrj.go.jp/" },
      { label: "日本政策金融公庫", href: "https://www.jfc.go.jp/" },
    ],
  },
  {
    heading: "事業再生・相談窓口",
    items: [
      { label: "中小企業活性化協議会（各都道府県）", href: "https://www.chusho.meti.go.jp/keiei/saisei/" },
      { label: "よろず支援拠点", href: "https://yorozu.smrj.go.jp/" },
    ],
  },
];

export default function LinksPage() {
  return (
    <PageShell
      eyebrow="Links"
      title="お役立ちリンク集"
      intro="経営者の再スタートに役立つ、公的機関・支援制度などの情報源です。制度の詳細は各サイトの最新情報をご確認ください。"
    >
      <Prose>
        {groups.map((g) => (
          <div key={g.heading}>
            <h2>{g.heading}</h2>
            <ul>
              {g.items.map((it) => (
                <li key={it.label}>
                  <a href={it.href} target="_blank" rel="noopener noreferrer">
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-[0.82rem] text-muted">
          ※ 外部サイトへのリンクです。内容について当サイトは責任を負いません。
        </p>
      </Prose>
    </PageShell>
  );
}
