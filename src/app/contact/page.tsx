import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "お問い合わせフォーム",
  description:
    "私的整理・資金調達・財務改善などのご相談を受け付けています。相談は無料、秘密は厳守します。",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="お問い合わせフォーム"
      intro="ご相談内容がまとまっていなくても構いません。現状をお聞きし、とりうる選択肢を一緒に整理します。相談は無料、秘密は厳守します。"
    >
      <ContactForm />
    </PageShell>
  );
}
