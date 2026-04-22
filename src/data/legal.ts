// Company + legal metadata shared across Termeni, Cookies, Privacy.
// Update company.cui, company.registruComertului and company.adresa once
// the entity is finalized.

export const company = {
  name: "Simply Social SRL",
  tradeName: "Simply Social",
  cui: "RO00000000",
  registruComertului: "J40/0000/2026",
  adresa: "Bucuresti, Romania",
  email: "contact@simplysocial.ro",
  privacyEmail: "privacy@simplysocial.ro",
  website: "www.simplysocial.ro",
  anspdcp: "Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal (ANSPDCP) · www.dataprotection.ro",
} as const;

export const lastUpdated = "23 aprilie 2026";

export const legalPages = [
  { label: "Termeni si conditii", href: "/termeni-si-conditii" },
  { label: "Politica de confidentialitate", href: "/politica-de-confidentialitate" },
  { label: "Politica de cookies", href: "/politica-de-cookies" },
] as const;

export type LegalSection = {
  id: string;
  title: string;
  body: string[];
  list?: { label: string; value?: string }[];
};
