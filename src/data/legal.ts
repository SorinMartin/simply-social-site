// Company + legal metadata shared across Termeni, Cookies, Privacy.

export const company = {
  name: "Rechyny Corp SRL",
  tradeName: "Simply Social",
  cui: "38665168",
  registruComertului: "J20/21/2018",
  adresa: "Sat Pricaz, nr. 36, jud. Hunedoara, cod poștal 337496",
  email: "contact@simplysocial.ro",
  privacyEmail: "privacy@simplysocial.ro",
  website: "www.simplysocial.ro",
  anspdcp: "Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) · www.dataprotection.ro",
} as const;

export const lastUpdated = "23 aprilie 2026";

export const legalPages = [
  { label: "Termeni și condiții", href: "/termeni-si-conditii" },
  { label: "Politica de confidențialitate", href: "/politica-de-confidentialitate" },
  { label: "Politica de cookies", href: "/politica-de-cookies" },
] as const;

export type LegalSection = {
  id: string;
  title: string;
  body: string[];
  list?: { label: string; value?: string }[];
};
