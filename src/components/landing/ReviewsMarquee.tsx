import { Star } from "lucide-react";

type Review = { name: string; city: string; text: string };

const reviews: Review[] = [
  {
    name: "Camille et Julien R.",
    city: "Bretteville-sur-Odon",
    text: "Un accompagnement précieux du premier croquis aux finitions. Nous avons gagné un temps fou et évité plusieurs pièges.",
  },
  {
    name: "Sophie L.",
    city: "Hérouville-Saint-Clair",
    text: "Avoir un seul contact qui parle avec l'architecte, les artisans et la mairie a complètement changé l'expérience.",
  },
  {
    name: "Marc D., investisseur",
    city: "Caen",
    text: "Devis négociés avec sérieux, planning tenu, communication claire toutes les semaines. Un vrai chef d'orchestre.",
  },
  {
    name: "Élodie et Pierre M.",
    city: "Mondeville",
    text: "Nous redoutions la construction. Au final, ce fut la partie la plus simple de notre vie de famille cette année.",
  },
  {
    name: "Antoine G.",
    city: "Ifs",
    city2: "",
    text: "Transparence sur chaque devis, conseils honnêtes même quand cela impliquait de revoir nos envies. Bravo.",
  } as Review,
  {
    name: "Laurence B.",
    city: "Saint-Contest",
    text: "Le suivi de chantier hebdomadaire a rassuré toute la famille. Maison livrée dans les délais annoncés.",
  },
];

function Card({ r }: { r: Review }) {
  return (
    <figure className="w-80 flex-shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex gap-0.5" aria-label="Note 5 sur 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
        {r.text}
      </blockquote>
      <figcaption className="mt-4 text-xs font-medium text-muted-foreground">
        {r.name} — {r.city}
      </figcaption>
    </figure>
  );
}

export function ReviewsMarquee() {
  const loop = [...reviews, ...reviews];
  return (
    <section aria-label="Témoignages de clients" className="border-y border-border bg-secondary/50 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Ils nous ont fait confiance
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-semibold text-deep md:text-4xl">
          Des familles et des investisseurs sereins
        </h2>
      </div>
      <div className="pause-on-hover mt-10 overflow-hidden">
        <div className="animate-marquee flex w-max gap-5">
          {loop.map((r, i) => (
            <Card key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
