import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { leadSchema } from "@/lib/lead-schema";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1h

function getIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const LABELS = {
  clientType: { particulier: "Particulier", investisseur: "Investisseur" } as Record<string, string>,
  hasLand: { oui: "Oui", non: "Non", en_recherche: "En recherche" } as Record<string, string>,
  surface: {
    moins_80: "Moins de 80 m2",
    "80_120": "80 a 120 m2",
    "120_160": "120 a 160 m2",
    plus_160: "Plus de 160 m2",
  } as Record<string, string>,
};

export const Route = createFileRoute("/api/public/send-lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const raw = await request.json();
          const parsed = leadSchema.safeParse(raw);
          if (!parsed.success) {
            return Response.json(
              { ok: false, error: "Donnees invalides." },
              { status: 400 },
            );
          }
          const data = parsed.data;

          // Honeypot
          if (data.website && data.website.length > 0) {
            return Response.json({ ok: true });
          }

          const ip = getIp(request);
          const userAgent = request.headers.get("user-agent") || "";
          const endpoint = "send-lead";
          const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();

          // Rate limit: count rows in window
          const { count, error: countErr } = await supabaseAdmin
            .from("rate_limits")
            .select("*", { count: "exact", head: true })
            .eq("ip_address", ip)
            .eq("endpoint", endpoint)
            .gte("window_start", windowStart);

          if (countErr) {
            console.error("rate_limits read error", countErr);
          } else if ((count ?? 0) >= RATE_LIMIT_MAX) {
            return Response.json(
              { ok: false, error: "Trop de demandes. Reessayez dans une heure." },
              { status: 429 },
            );
          }

          await supabaseAdmin.from("rate_limits").insert({
            ip_address: ip,
            endpoint,
          });

          const { error: insertErr } = await supabaseAdmin.from("leads").insert({
            client_type: data.clientType,
            has_land: data.hasLand,
            surface: data.surface,
            area: data.area,
            budget: data.budget || null,
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            message: data.message || null,
            ip_address: ip,
            user_agent: userAgent,
          });

          if (insertErr) {
            console.error("leads insert error", insertErr);
            return Response.json(
              { ok: false, error: "Enregistrement impossible." },
              { status: 500 },
            );
          }

          // Email via Resend (best effort)
          const apiKey = process.env.RESEND_API_KEY;
          if (apiKey) {
            try {
              const resend = new Resend(apiKey);
              const html = `
                <h2>Nouvelle demande Maison de Nacre</h2>
                <p><strong>Type de client :</strong> ${esc(LABELS.clientType[data.clientType] || data.clientType)}</p>
                <p><strong>Terrain :</strong> ${esc(LABELS.hasLand[data.hasLand] || data.hasLand)}</p>
                <p><strong>Surface souhaitee :</strong> ${esc(LABELS.surface[data.surface] || data.surface)}</p>
                <p><strong>Commune ou secteur :</strong> ${esc(data.area)}</p>
                <p><strong>Budget :</strong> ${esc(data.budget || "non precise")}</p>
                <hr/>
                <p><strong>${esc(data.firstName)} ${esc(data.lastName)}</strong></p>
                <p>Email : <a href="mailto:${esc(data.email)}">${esc(data.email)}</a></p>
                <p>Telephone : ${esc(data.phone)}</p>
                ${data.message ? `<p><strong>Message :</strong><br/>${esc(data.message).replace(/\n/g, "<br/>")}</p>` : ""}
              `;
              await resend.emails.send({
                from: "Maison de Nacre <contact@maison-de-nacre.fr>",
                to: ["alexandre.duran@maison-de-nacre.fr"],
                replyTo: data.email,
                subject: `Nouvelle demande : ${data.firstName} ${data.lastName}`,
                html,
              });
            } catch (mailErr) {
              console.error("resend send error", mailErr);
              // ne casse pas la reponse: le lead est enregistre
            }
          } else {
            console.warn("RESEND_API_KEY missing, skipping email send");
          }

          return Response.json({ ok: true });
        } catch (e) {
          console.error("send-lead unexpected error", e);
          return Response.json(
            { ok: false, error: "Une erreur est survenue." },
            { status: 500 },
          );
        }
      },
    },
  },
});
