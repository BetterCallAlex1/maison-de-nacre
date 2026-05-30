## Objectif

Résoudre l'alerte Supabase **0024 – RLS Policy Always True** sur `public.leads` en appliquant le principe du moindre privilège, sans casser le formulaire de contact.

## Architecture actuelle (importante)

Le formulaire `LeadForm` n'écrit **pas** directement dans Supabase depuis le navigateur. Il POST vers le server route `/api/public/send-lead` (`src/routes/api/public/send-lead.ts`), qui utilise `supabaseAdmin` (clé `service_role`). Le service role **bypass RLS** : aucune politique anon n'est nécessaire pour que le formulaire fonctionne.

Le server route fait déjà :
- validation Zod (email, téléphone, longueurs…)
- honeypot anti-bot
- rate limiting (5 / IP / heure)
- insertion `leads` + `rate_limits`
- envoi email via Resend

→ C'est la bonne architecture. Aucun changement applicatif requis.

## Avant / Après

**Avant** (`public.leads`)
| Policy | Cmd | Roles | Check |
|---|---|---|---|
| Anyone can submit a lead | INSERT | anon, authenticated | `WITH CHECK (true)` ⚠️ 0024 |

**Après** (`public.leads`)
| Policy | Cmd | Roles | Check |
|---|---|---|---|
| *(aucune)* | — | — | — |

→ RLS reste activée, aucun rôle public (anon/authenticated) n'a accès. Seul `service_role` (utilisé par le server route via `supabaseAdmin`) peut lire/écrire. Lockdown maximal.

Idem pour `public.rate_limits` : RLS reste activée sans policy publique (déjà l'état actuel), service_role gère tout.

## Migration SQL

```sql
-- Supprimer la policy anon INSERT (non utilisée : le server route passe par service_role)
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

-- Révoquer explicitement les droits Data API pour anon/authenticated sur leads et rate_limits
REVOKE ALL ON public.leads FROM anon, authenticated;
REVOKE ALL ON public.rate_limits FROM anon, authenticated;

-- service_role garde tous les droits (bypass RLS de toute façon)
GRANT ALL ON public.leads TO service_role;
GRANT ALL ON public.rate_limits TO service_role;

-- RLS reste activée (défense en profondeur)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;
```

## Vérifications post-migration

1. `SELECT * FROM pg_policies WHERE schemaname='public'` → 0 policy retournée.
2. Re-run du linter Supabase → l'alerte **0024** disparaît.
3. Test fonctionnel : soumettre le formulaire de contact → réponse 200, ligne créée dans `leads` (vérifiable via `supabase--read_query` qui utilise service_role).
4. Vérifier qu'un client anon ne peut **pas** lire la table : `curl https://vlethgnlnmaegfqjahxe.supabase.co/rest/v1/leads -H "apikey: <anon>"` → doit retourner 401/permission denied.

## Pourquoi pas une edge function ?

Tu utilises déjà l'équivalent moderne : un **server route TanStack** (`/api/public/send-lead`) avec `supabaseAdmin`. C'est strictement équivalent à une edge function côté sécurité (clé service stockée côté serveur, jamais exposée), avec en bonus : déploiement unifié avec le front, logs centralisés, pas de CORS à gérer. Aucun changement nécessaire.

## Hors scope (à proposer plus tard si besoin)

- Si tu veux un back-office pour consulter les leads dans l'app, on ajoutera une table `user_roles` + une policy `SELECT` réservée au rôle `admin` via `has_role(auth.uid(), 'admin')`. Pour l'instant tu reçois les leads par email Resend, donc inutile.
- Durcir le `WITH CHECK` n'a pas d'intérêt ici puisqu'on supprime carrément la policy publique (la validation est faite côté server route par Zod, ce qui est plus expressif que du SQL).
