import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ReviewsMarquee } from "@/components/landing/ReviewsMarquee";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyUs } from "@/components/landing/WhyUs";
import { Faq, faqItems } from "@/components/landing/Faq";
import { LeadFormSection } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";

const SITE_URL = "https://maisondenacre.fr";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Maison de Nacre",
      url: SITE_URL,
      areaServed: {
        "@type": "Place",
        name: "Région de Caen (20 km autour de Caen, Calvados, France)",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Maison de Nacre",
      url: SITE_URL,
      description:
        "Accompagnement de particuliers et investisseurs pour faire construire une maison neuve clé en main dans la région de Caen, dans un rayon de 20 km.",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 49.1829,
          longitude: -0.3707,
        },
        geoRadius: "20000",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Caen",
        postalCode: "14000",
        addressRegion: "Calvados",
        addressCountry: "FR",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison de Nacre | Faire construire votre maison neuve, région de Caen" },
      {
        name: "description",
        content:
          "Un seul interlocuteur pour faire construire votre maison neuve clé en main dans un rayon de 20 km autour de Caen. Conception, devis, chantier : nous orchestrons tout.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Maison de Nacre | Construire sa maison neuve autour de Caen" },
      {
        property: "og:description",
        content:
          "Accompagnement clé en main pour particuliers et investisseurs : conception avec l'architecte, consultation et négociation des devis, suivi du chantier.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ReviewsMarquee />
        <HowItWorks />
        <WhyUs />
        <Faq />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}
