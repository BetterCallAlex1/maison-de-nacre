import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2 } from "lucide-react";
import { leadSchema, type LeadInput } from "@/lib/lead-schema";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      clientType: "particulier",
      hasLand: "oui",
      surface: "80_120",
      area: "",
      budget: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: LeadInput) {
    setStatus("loading");
    setErrorMsg("");
    try {
      // Bascule SSG-ready : si VITE_FORMSPREE_ID est défini, on poste vers Formspree
      // (endpoint statique, fonctionne sans Worker, requis pour l'hébergement
      // 100 % statique post-abonnement Lovable). Sinon, fallback sur l'endpoint
      // interne /api/public/send-lead (utilisé tant que le site tourne sur Lovable).
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
      const endpoint = formspreeId
        ? `https://formspree.io/f/${formspreeId}`
        : "/api/public/send-lead";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(formspreeId ? { Accept: "application/json" } : {}),
        },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      const success = formspreeId ? res.ok : res.ok && data.ok;
      if (!success) {
        setErrorMsg(data.error || "Une erreur est survenue. Réessayez dans un instant.");
        setStatus("error");
        return;
      }
      setStatus("success");
      reset();
    } catch {
      setErrorMsg("Connexion impossible. Vérifiez votre réseau et réessayez.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-deep">Demande bien reçue</h3>
        <p className="mt-3 text-muted-foreground">
          Nous revenons vers vous sous 48 heures ouvrées pour convenir d'un premier échange.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2 text-sm font-medium text-deep transition-colors hover:bg-secondary"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40";
  const labelClass = "block text-sm font-medium text-deep";
  const errClass = "mt-1 text-xs text-destructive";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8" noValidate>
      {/* Honeypot anti-spam */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Ne pas remplir
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="clientType">Vous êtes</label>
          <select id="clientType" {...register("clientType")} className={inputClass}>
            <option value="particulier">Particulier</option>
            <option value="investisseur">Investisseur</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="hasLand">Avez-vous un terrain ?</label>
          <select id="hasLand" {...register("hasLand")} className={inputClass}>
            <option value="oui">Oui</option>
            <option value="non">Non</option>
            <option value="en_recherche">En recherche</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="surface">Surface souhaitée</label>
          <select id="surface" {...register("surface")} className={inputClass}>
            <option value="moins_80">Moins de 80 m²</option>
            <option value="80_120">80 à 120 m²</option>
            <option value="120_160">120 à 160 m²</option>
            <option value="plus_160">Plus de 160 m²</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="area">Commune ou secteur</label>
          <input id="area" type="text" placeholder="Caen, Hérouville, Ifs..." {...register("area")} className={inputClass} />
          {errors.area && <p className={errClass}>Indiquez une commune ou un secteur.</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="budget">Budget estimé</label>
          <input id="budget" type="text" placeholder="Ex : entre 250 000 et 320 000 €" {...register("budget")} className={inputClass} />
          {errors.budget && <p className={errClass}>Indiquez une estimation de budget.</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="firstName">Prénom</label>
          <input id="firstName" type="text" autoComplete="given-name" {...register("firstName")} className={inputClass} />
          {errors.firstName && <p className={errClass}>Renseignez votre prénom.</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="lastName">Nom</label>
          <input id="lastName" type="text" autoComplete="family-name" {...register("lastName")} className={inputClass} />
          {errors.lastName && <p className={errClass}>Renseignez votre nom.</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" {...register("email")} className={inputClass} />
          {errors.email && <p className={errClass}>Email invalide.</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">Téléphone</label>
          <input id="phone" type="tel" autoComplete="tel" {...register("phone")} className={inputClass} />
          {errors.phone && <p className={errClass}>Téléphone requis.</p>}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="message">Votre projet en quelques mots (facultatif)</label>
          <textarea id="message" rows={4} {...register("message")} className={inputClass} />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {errorMsg}
        </p>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Vos informations restent confidentielles et ne servent qu'à étudier votre projet.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Envoi en cours...
            </>
          ) : (
            "Envoyer ma demande"
          )}
        </button>
      </div>
    </form>
  );
}

export function LeadFormSection() {
  return (
    <section id="contact" className="bg-soft-fade py-20 lg:py-28">
      <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Parlons de votre projet</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-deep md:text-4xl text-balance">
            Un premier échange, sans engagement
          </h2>
          <p className="mt-4 text-muted-foreground">
            Décrivez-nous votre projet en quelques minutes. Nous revenons vers vous sous 48 heures ouvrées pour convenir d'un rendez-vous, à notre bureau ou chez vous.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground">
            <li className="flex gap-2"><Check className="h-5 w-5 text-primary" aria-hidden="true" />Réponse sous 48 h ouvrées</li>
            <li className="flex gap-2"><Check className="h-5 w-5 text-primary" aria-hidden="true" />Étude de faisabilité gratuite</li>
            <li className="flex gap-2"><Check className="h-5 w-5 text-primary" aria-hidden="true" />Aucun engagement</li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
