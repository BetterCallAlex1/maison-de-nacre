import { Check } from "lucide-react";
import heroImg from "@/assets/hero-maison.webp";

const points = [
  "Architecte inclus",
  "Devis négociés",
  "Norme RE2020",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-soft-fade">
      <div className="container mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl font-semibold leading-tight text-deep text-balance md:text-5xl lg:text-6xl">
            Faites construire la maison qui vous ressemble.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Un seul interlocuteur, de la conception à la remise des clés.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
            >
              Démarrer mon projet
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
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
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="aspect-[3/2] w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
