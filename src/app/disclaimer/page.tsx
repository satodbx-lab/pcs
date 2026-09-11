import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "免責事項",
  description: "本サイトのコンテンツに関する免責事項です。",
};

export default function DisclaimerPage() {
  return (
    <PageShell eyebrow="Disclaimer" title="免責事項">
      <Prose>
        <h2>情報の正確性について</h2>
        <p>
          本サイトの掲載情報については可能な限り正確を期していますが、その完全性・正確性・
          有用性・最新性を保証するものではありません。掲載内容は予告なく変更・削除される場合があります。
        </p>
        <h2>専門的判断について</h2>
        <p>
          私的整理・資金調達・財務改善などに関する記述は一般的な情報提供を目的としたものであり、
          特定の手続きの結果や収益を保証するものではありません。個別の判断にあたっては、
          弁護士・税理士等の専門家、または当会の相談窓口へご確認ください。
        </p>
        <h2>損害の免責</h2>
        <p>
          本サイトの利用によって生じたいかなる損害についても、当会は一切の責任を負いません。
        </p>
        <h2>外部リンク</h2>
        <p>
          本サイトからリンクする外部サイトの内容について、当会は責任を負いません。
        </p>
      </Prose>
    </PageShell>
  );
}
