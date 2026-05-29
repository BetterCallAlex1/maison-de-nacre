import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ReviewsMarquee } from "@/components/landing/ReviewsMarquee";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyUs } from "@/components/landing/WhyUs";
import { Faq } from "@/components/landing/Faq";
import { LeadFormSection } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";

const SITE_URL = "https://maisondenacre.fr";

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
