import { z } from "zod";

export const leadSchema = z.object({
  clientType: z.enum(["particulier", "investisseur"]),
  hasLand: z.enum(["oui", "non", "en_recherche"]),
  surface: z.enum(["moins_80", "80_120", "120_160", "plus_160"]),
  area: z.string().min(2).max(100),
  budget: z.string().min(1).max(50),
  firstName: z.string().min(1).max(60),
  lastName: z.string().min(1).max(60),
  email: z.string().email().max(160),
  phone: z.string().min(6).max(30),
  message: z.string().max(2000).optional().or(z.literal("")),
  // honeypot, doit rester vide
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
