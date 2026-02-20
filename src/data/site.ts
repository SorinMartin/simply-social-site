export const navItems = [
  { label: "Acasa", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Proces", href: "/#cum-functioneaza" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServicePackage = {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export const problemPoints = [
  {
    icon: "🧭",
    title: "Comunicare in salturi",
    description:
      "Fara un ritm de publicare, brandul devine greu de remarcat in fluxul zilnic al clientilor.",
  },
  {
    icon: "🎨",
    title: "Imagine nealiniata",
    description:
      "Cand vizualul si mesajul variaza de la o postare la alta, perceptia de profesionalism scade.",
  },
  {
    icon: "💬",
    title: "Prezentare neclara a serviciilor",
    description:
      "Publicul are nevoie sa vada constant ce oferi, cum lucrezi si de ce merita sa te aleaga.",
  },
] as const;

export const solutionPoints = [
  {
    icon: "🗓️",
    title: "20 postari/luna intr-un calendar clar",
  },
  {
    icon: "📣",
    title: "Publicare dedicata pe Facebook si Instagram",
  },
  {
    icon: "🎯",
    title: "Design si copy aliniate cu identitatea afacerii",
  },
  {
    icon: "🤝",
    title: "Prezenta constanta care transmite incredere",
  },
] as const;

export const processSteps = [
  {
    icon: "🤝",
    title: "Discutie initiala",
    description:
      "Intelegem business-ul tau, serviciile si tipul de clienti pe care vrei sa ii atragi.",
  },
  {
    icon: "🧠",
    title: "Plan lunar",
    description:
      "Stabilim calendarul pentru cele 20 de postari si directia vizuala pentru luna urmatoare.",
  },
  {
    icon: "✍️",
    title: "Creare continut",
    description:
      "Pregatim design-ul si textele astfel incat paginile sa reflecte clar activitatea afacerii.",
  },
  {
    icon: "🚀",
    title: "Publicare pe Facebook & Instagram",
    description:
      "Programam si publicam tot continutul, ca paginile tale sa ramana constant active.",
  },
] as const;

export const servicePackages: ServicePackage[] = [
  {
    name: "PACHET UNIC",
    price: "299 EUR/luna",
    description:
      "Administrare social media simpla si completa pentru o prezenta eleganta si constanta.",
    highlighted: true,
    features: [
      "20 postari/luna",
      "Publicare pe Facebook si Instagram",
      "Design inclus",
      "Copy inclus",
      "Calendar lunar de continut",
      "Comunicare constanta, profesionala si relevanta",
    ],
  },
];

export const sectors = [
  "Business-uri locale",
  "Clinici",
  "Restaurante",
  "Saloane",
  "Firme de servicii",
  "IMM-uri",
] as const;
