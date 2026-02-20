export const navItems = [
  { label: "Acasa", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Proces", href: "/#cum-functioneaza" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServicePackage = {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const problemPoints = [
  {
    title: "Posteaza rar si haotic",
    description:
      "Fara ritm clar de publicare, contul ramane invizibil si fara rezultate constante.",
  },
  {
    title: "Design amator",
    description:
      "Un vizual neuniform reduce increderea si face brandul sa para neprofesionist.",
  },
  {
    title: "Fara strategie",
    description:
      "Continutul fara obiective clare aduce activitate, dar nu aduce clienti.",
  },
] as const;

export const solutionPoints = [
  "Plan lunar de continut",
  "Design profesionist",
  "Programare automata",
  "Administrare si raspuns mesaje",
] as const;

export const processSteps = [
  {
    title: "Discutie initiala",
    description:
      "Intelegem oferta, clientii si obiectivele comerciale ale afacerii tale.",
  },
  {
    title: "Strategie si plan",
    description:
      "Definim directia de continut, mesajele cheie si calendarul de publicare.",
  },
  {
    title: "Creare continut",
    description:
      "Producem design-uri si copy clare, aliniate cu brandul si audienta ta.",
  },
  {
    title: "Publicare & optimizare",
    description:
      "Publicam, monitorizam rezultatele si ajustam lunar pentru performanta mai buna.",
  },
] as const;

export const servicePackages: ServicePackage[] = [
  {
    name: "BASIC",
    description: "Pentru afaceri locale care au nevoie de consistenta.",
    features: [
      "8 postari/luna",
      "Design inclus",
      "Copy inclus",
      "Programare postari",
    ],
  },
  {
    name: "PRO",
    description: "Pentru firme care vor prezenta profesionala si interactiune activa.",
    highlighted: true,
    features: [
      "12 postari/luna",
      "Reel-uri incluse",
      "Administrare mesaje",
      "Strategie lunara",
    ],
  },
  {
    name: "PREMIUM",
    description: "Pentru branduri care scaleaza si urmaresc conversii masurabile.",
    features: [
      "16+ postari",
      "Ads management",
      "Optimizare conversii",
      "Raport lunar detaliat",
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
