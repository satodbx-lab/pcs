import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ConsultationSpotlight } from "@/components/consultation-spotlight";
import { EraShift } from "@/components/era-shift";
import { SupportPillars } from "@/components/support-pillars";
import { Concerns } from "@/components/concerns";
import { AiSupport } from "@/components/ai-support";
import { Restructuring } from "@/components/restructuring";
import { Ventures } from "@/components/ventures";
import { Funding } from "@/components/funding";
import { Association } from "@/components/association";
import { Updates } from "@/components/updates";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ConsultationSpotlight />
        <EraShift />
        <SupportPillars />
        <Concerns />
        <AiSupport />
        <Restructuring />
        <Ventures />
        <Funding />
        <Association />
        <Updates />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
