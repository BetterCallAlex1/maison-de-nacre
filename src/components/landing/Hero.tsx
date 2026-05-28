import { Check } from "lucide-react";
import heroImg from "@/assets/hero-maison.jpg";

const points = [
  "Un seul interlocuteur, du premier rendez-vous à la remise des clés",
  "Devis consultés et négociés auprès de nos artisans partenaires",
  "Suivi de chantier hebdomadaire dans un rayon de 20 km autour de Caen",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-soft-fade">
      <div className="container mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-deep">
            Région de Caen, dans un rayon de 20 km
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-deep text-balance md:text-5xl lg:text-6xl">
            Faites construire votre maison neuve, sereinement, avec un seul interlocuteur.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Maison de Nacre orchestre votre projet de A à Z : conception avec l'architecte, consultation et négociation des devis auprès d'artisans sélectionnés, et suivi du chantier jusqu'à la livraison clé en main.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
            >
              Démarrer mon projet
            </a>
            <a
              href="#methode"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-base font-semibold text-deep transition-colors hover:bg-secondary"
            >
              Découvrir notre méthode
            </a>
          </div>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-hero opacity-20 blur-2xl" aria-hidden="true" />
          <img
            src={heroImg}
            alt="Maison neuve contemporaine en pierre et bois dans la région de Caen, livrée par Maison de Nacre"
            width={1536}
            height={1024}
            className="aspect-[3/2] w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
