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
    title: "Pagina pare abandonata",
    description:
      "Cand ultima postare este veche, oamenii cred ca afacerea nu mai este activa.",
  },
  {
    title: "Imagine neuniforma",
    description:
      "Fara design si mesaj coerent, brandul pierde incredere chiar inainte de primul contact.",
  },
  {
    title: "Clientii nu inteleg ce faci",
    description:
      "Daca nu comunici constant, publicul nu vede clar serviciile, rezultatele si seriozitatea ta.",
  },
] as const;

export const solutionPoints = [
  "20 postari/luna, in ritm constant",
  "Publicare doar pe Facebook si Instagram",
  "Design si copy care reflecta afacerea ta",
  "Paginile tale arata active, actuale si profesioniste",
] as const;

export const processSteps = [
  {
    title: "Discutie initiala",
    description:
      "Intelegem business-ul tau, serviciile si tipul de clienti pe care vrei sa ii atragi.",
  },
  {
    title: "Plan lunar",
    description:
      "Stabilim calendarul pentru cele 20 de postari si directia vizuala pentru luna urmatoare.",
  },
  {
    title: "Creare continut",
    description:
      "Pregatim design-ul si textele astfel incat paginile sa reflecte clar activitatea afacerii.",
  },
  {
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
      "Un singur pachet, simplu si clar, pentru afaceri care vor prezenta constanta online.",
    highlighted: true,
    features: [
      "20 postari/luna",
      "Publicare pe Facebook si Instagram",
      "Design inclus",
      "Copy inclus",
      "Calendar lunar de continut",
      "Scop: pagina activa, actuala, profesionista",
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
