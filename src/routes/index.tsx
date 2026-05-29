import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ReviewsMarquee } from "@/components/landing/ReviewsMarquee";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyUs } from "@/components/landing/WhyUs";
import { Faq } from "@/components/landing/Faq";
import { LeadFormSection } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
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
