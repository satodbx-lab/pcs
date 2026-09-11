import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { EraShift } from "@/components/era-shift";
import { SupportPillars } from "@/components/support-pillars";
import { Concerns } from "@/components/concerns";
import { Restructuring } from "@/components/restructuring";
import { Ventures } from "@/components/ventures";
import { Funding } from "@/components/funding";
import { Association } from "@/components/association";
import { Updates } from "@/components/updates";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <EraShift />
        <SupportPillars />
        <Concerns />
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
