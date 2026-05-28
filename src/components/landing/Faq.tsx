import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqItems = [
  {
    q: "Sur quel secteur géographique intervenez-vous ?",
    a: "Nous accompagnons les projets situés dans un rayon de 20 km autour de Caen, dans le Calvados. Cette proximité nous permet d'assurer un suivi de chantier régulier et de mobiliser nos artisans partenaires locaux.",
  },
  {
    q: "Qui sera mon interlocuteur tout au long du projet ?",
    a: "Vous avez un seul interlocuteur, du premier rendez-vous à la remise des clés. C'est lui qui dialogue avec l'architecte, consulte et négocie les devis auprès des artisans, et coordonne le chantier au quotidien.",
  },
  {
    q: "Comment se passe la consultation des artisans ?",
    a: "Nous consultons et négocions les devis auprès de nos artisans partenaires sélectionnés sur leur sérieux, leur qualité d'exécution et leur fiabilité. Vous recevez une offre claire, comparée et expliquée poste par poste.",
  },
  {
    q: "Combien coûte votre accompagnement ?",
    a: "Notre rémunération est présentée en toute transparence lors du premier rendez-vous, en fonction de la complexité de votre projet. Nous établissons ensemble un cadre clair avant tout engagement.",
  },
  {
    q: "Combien de temps dure un projet ?",
    a: "La durée dépend de votre terrain, de la complexité du projet et des autorisations. À titre indicatif, comptez en général plusieurs mois entre le cadrage et la livraison. Nous vous donnons un calendrier précis dès la phase de conception.",
  },
  {
    q: "Je n'ai pas encore de terrain, pouvez-vous m'aider ?",
    a: "Oui. Nous échangeons d'abord sur votre projet pour cadrer la surface, le budget et le secteur souhaité, puis nous vous orientons sur les démarches de recherche de terrain dans notre zone d'intervention.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Questions fréquentes</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-deep md:text-4xl text-balance">
            Tout ce que vous voulez savoir avant de nous parler
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-deep">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
