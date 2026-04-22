export const navItems = [
  { label: "Acasa", href: "/", index: "01" },
  { label: "Servicii", href: "/servicii", index: "02" },
  { label: "Proces", href: "/proces", index: "03" },
  { label: "Contact", href: "/contact", index: "04" },
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
    index: "01",
    title: "Comunicare in salturi",
    description:
      "Fara un ritm de publicare, brandul devine greu de remarcat in fluxul zilnic al clientilor.",
  },
  {
    index: "02",
    title: "Imagine nealiniata",
    description:
      "Cand vizualul si mesajul variaza de la o postare la alta, perceptia de profesionalism scade.",
  },
  {
    index: "03",
    title: "Prezentare neclara",
    description:
      "Publicul are nevoie sa vada constant ce oferi, cum lucrezi si de ce merita sa te aleaga.",
  },
] as const;

export const solutionPoints = [
  {
    index: "01",
    title: "20 postari intr-un calendar clar",
    copy: "Planificate la inceput de luna, publicate la momentul potrivit.",
  },
  {
    index: "02",
    title: "Facebook si Instagram",
    copy: "Publicare dedicata pe ambele canale, fara efort din partea ta.",
  },
  {
    index: "03",
    title: "Design si copy aliniate",
    copy: "O identitate vizuala coerenta, cu texte care vorbesc brandul.",
  },
  {
    index: "04",
    title: "Prezenta care transmite incredere",
    copy: "Un ton profesionist, constant, usor de recunoscut de clienti.",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Discutie initiala",
    description:
      "Intelegem business-ul tau, serviciile si tipul de clienti pe care vrei sa ii atragi.",
    detail:
      "Un apel de 30 de minute in care stabilim unghiul, vocea si tipul de continut care ti se potriveste.",
  },
  {
    index: "02",
    title: "Plan lunar",
    description:
      "Stabilim calendarul pentru cele 20 de postari si directia vizuala pentru luna urmatoare.",
    detail:
      "Primesti un calendar editorial vizibil, cu teme, formate si date de publicare clare.",
  },
  {
    index: "03",
    title: "Creare continut",
    description:
      "Pregatim design-ul si textele astfel incat paginile sa reflecte clar activitatea afacerii.",
    detail:
      "Design + copy in acelasi limbaj vizual, cu o runda de feedback la jumatatea lunii.",
  },
  {
    index: "04",
    title: "Publicare",
    description:
      "Programam si publicam tot continutul, ca paginile tale sa ramana constant active.",
    detail:
      "Postare programata pe Facebook si Instagram, cu raport lunar transparent.",
  },
] as const;

export const servicePackages: ServicePackage[] = [
  {
    name: "Pachet unic",
    price: "299 EUR / luna",
    description:
      "Administrare social media simpla si completa pentru o prezenta eleganta si constanta.",
    highlighted: true,
    features: [
      "20 postari pe luna",
      "Publicare pe Facebook si Instagram",
      "Design inclus",
      "Copy inclus",
      "Calendar editorial lunar",
      "Comunicare constanta si profesionala",
    ],
  },
];

export const serviceInclusions = [
  {
    index: "01",
    title: "Strategia lunara",
    body: "Teme, formate, distributie. Totul gandit dinainte, fara improvizatie saptamanala.",
  },
  {
    index: "02",
    title: "Design vizual",
    body: "Grafica construita pe identitatea ta. Coerent de la o postare la urmatoarea.",
  },
  {
    index: "03",
    title: "Copywriting",
    body: "Texte scurte, clare, care vorbesc in limbajul clientilor tai, nu in jargon.",
  },
  {
    index: "04",
    title: "Publicare programata",
    body: "Postam la ora potrivita pe Facebook si Instagram, fara sa te mai gandesti la asta.",
  },
  {
    index: "05",
    title: "Calendar editorial",
    body: "Vizibil din timp, editabil, transparent. Stii mereu ce urmeaza saptamana viitoare.",
  },
  {
    index: "06",
    title: "Raport lunar",
    body: "Un recap simplu cu ce am publicat, ce a functionat si ce propunem luna urmatoare.",
  },
] as const;

export const sectors = [
  "Business-uri locale",
  "Clinici",
  "Restaurante",
  "Saloane",
  "Firme de servicii",
  "IMM-uri",
] as const;

export const faqs = [
  {
    q: "Am nevoie de un contract lung?",
    a: "Nu. Colaborarea merge lunar. Continui cand vrei, te opresti cand vrei, fara penalitati.",
  },
  {
    q: "Ce trebuie sa fac eu?",
    a: "O discutie initiala si acces la paginile de Facebook si Instagram. Restul il gestionam noi.",
  },
  {
    q: "Pot cere modificari la postari?",
    a: "Da. Ai o runda de feedback la jumatatea lunii inainte de publicare.",
  },
  {
    q: "De unde incepem daca nu am paginile active?",
    a: "Te ajutam sa le configurezi. Pornim publicarea odata ce paginile sunt pregatite.",
  },
  {
    q: "Factura este cu TVA?",
    a: "Pretul de 299 EUR este fara TVA. Primesti factura standard la inceput de luna.",
  },
] as const;
