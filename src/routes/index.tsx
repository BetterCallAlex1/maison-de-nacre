import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ReviewsMarquee } from "@/components/landing/ReviewsMarquee";
import { Realisations } from "@/components/landing/Realisations";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyUs } from "@/components/landing/WhyUs";
import { Faq } from "@/components/landing/Faq";
import { LeadFormSection } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";
import heroImg from "@/assets/hero-maison.webp";

const TITLE = "Maison neuve à Caen, clé en main (14) | Maison de Nacre";
const DESCRIPTION =
  "Votre maison neuve clé en main à Caen et dans le Calvados. Maître d'œuvre dédié, architecte inclus, devis négociés, norme RE2020. 1er rendez-vous offert.";
const URL = "https://maison-de-nacre.fr/";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/89b1dbff-fd65-4152-b07b-f17fbfe75cd6/id-preview-1895e7d8--5b4883a1-2ba1-479a-976f-1c48421421fb.lovable.app-1780050663202.png";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: URL },
      { rel: "alternate", hreflang: "fr-FR", href: URL },
      { rel: "alternate", hreflang: "x-default", href: URL },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
  }),
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ReviewsMarquee />
        <Realisations />
        <HowItWorks />
        <WhyUs />
        <Faq />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}
