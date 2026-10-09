import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { SeminarSpotlight } from "@/components/seminar-spotlight";
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
import { JsonLd } from "@/components/json-ld";
import { seminar, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const seminarJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: seminar.title,
  description: seminar.teaser,
  startDate: seminar.startIso,
  endDate: seminar.endIso,
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "VirtualLocation",
    url: seminar.registerUrl,
  },
  organizer: {
    "@type": "Organization",
    name: seminar.organizer,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
    availability: "https://schema.org/InStock",
    url: seminar.registerUrl,
  },
  performer: {
    "@type": "Person",
    name: seminar.speakerName,
  },
  url: `${site.url}/#seminar`,
};

export default function Home() {
  return (
    <>
      <JsonLd data={seminarJsonLd} />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SeminarSpotlight />
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
