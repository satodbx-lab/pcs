import Link from "next/link";

export function ContactCta() {
  return (
    <section id="contact" className="brand-field text-brand-contrast">
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 md:py-20">
        <div className="max-w-[40rem]">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-brand-contrast/70">
            Contact
          </p>
          <h2 className="mt-3 text-[length:var(--text-fluid-h2)] font-bold leading-[1.4] text-brand-contrast">
            PCSスタイルの始め方も、今の会社のことも
          </h2>
          <p className="mt-4 text-[0.95rem] leading-[1.95] text-brand-contrast/85">
            適性の見極めから、今の会社の整理、仕事紹介、資金調達まで。
            相談内容がまとまっていなくても構いません。相談は無料、秘密は厳守します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-sm bg-brand-contrast px-6 py-3 text-[0.92rem] font-bold text-brand transition-opacity hover:opacity-90"
            >
              お問い合わせフォームへ
            </Link>
            <Link
              href="/about/pcs"
              className="inline-flex items-center rounded-sm border border-brand-contrast/40 px-6 py-3 text-[0.92rem] font-bold text-brand-contrast transition-colors hover:bg-brand-contrast/10"
            >
              PCSについて詳しく
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
