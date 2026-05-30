DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

REVOKE ALL ON public.leads FROM anon, authenticated;
REVOKE ALL ON public.rate_limits FROM anon, authenticated;

GRANT ALL ON public.leads TO service_role;
GRANT ALL ON public.rate_limits TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;