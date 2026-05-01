import { DeliverablesSection } from "@/components/DeliverablesSection";
import { FaqSection } from "@/components/FaqSection";
import { FeedMockup } from "@/components/FeedMockup";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFrame } from "@/components/SiteFrame";
import { SolutionSection } from "@/components/SolutionSection";
import { faqs, servicePackages } from "@/data/site";

const SITE_URL = "https://www.simplysocial.ro";

const pack = servicePackages[0];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Administrare social media",
  name: "Pachet Simply Social — 20 postări/lună",
  provider: {
    "@type": "Organization",
    name: "Simply Social",
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "Romania" },
  description: pack.description,
  offers: {
    "@type": "Offer",
    price: "299",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "299",
      priceCurrency: "EUR",
      unitText: "MONTH",
    },
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/contact`,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: pack.name,
    itemListElement: pack.features.map((f) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: f },
    })),
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function Home() {
  return (
    <SiteFrame pathname="/">
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DeliverablesSection />
      <FeedMockup />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <FinalCtaSection />
    </SiteFrame>
  );
}
