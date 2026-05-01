export const navItems = [
  { label: "Acasă", href: "/", index: "01" },
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
    title: "Comunicare în salturi",
    description:
      "Fără un ritm de publicare, brandul devine greu de remarcat în fluxul zilnic al clienților.",
  },
  {
    index: "02",
    title: "Imagine nealiniată",
    description:
      "Când vizualul și mesajul variază de la o postare la alta, percepția de profesionalism scade.",
  },
  {
    index: "03",
    title: "Prezentare neclară",
    description:
      "Publicul are nevoie să vadă constant ce oferi, cum lucrezi și de ce merită să te aleagă.",
  },
] as const;

export const solutionPoints = [
  {
    index: "01",
    title: "20 postări într-un calendar clar",
    copy: "Planificate la început de lună, publicate la momentul potrivit.",
  },
  {
    index: "02",
    title: "Facebook și Instagram",
    copy: "Publicare dedicată pe ambele canale, fără efort din partea ta.",
  },
  {
    index: "03",
    title: "Design și copy aliniate",
    copy: "O identitate vizuală coerentă, cu texte care vorbesc brandul.",
  },
  {
    index: "04",
    title: "Prezență care transmite încredere",
    copy: "Un ton profesionist, constant, ușor de recunoscut de clienți.",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Discuție inițială",
    description:
      "Înțelegem business-ul tău, serviciile și tipul de clienți pe care vrei să îi atragi.",
    detail:
      "Un apel de 30 de minute în care stabilim unghiul, vocea și tipul de conținut care ți se potrivește.",
  },
  {
    index: "02",
    title: "Plan lunar",
    description:
      "Stabilim calendarul pentru cele 20 de postări și direcția vizuală pentru luna următoare.",
    detail:
      "Primești un calendar editorial vizibil, cu teme, formate și date de publicare clare.",
  },
  {
    index: "03",
    title: "Creare conținut",
    description:
      "Pregătim design-ul și textele astfel încât paginile să reflecte clar activitatea afacerii.",
    detail:
      "Design + copy în același limbaj vizual, cu o rundă de feedback la jumătatea lunii.",
  },
  {
    index: "04",
    title: "Publicare",
    description:
      "Programăm și publicăm tot conținutul, ca paginile tale să rămână constant active.",
    detail:
      "Postare programată pe Facebook și Instagram, cu raport lunar transparent.",
  },
] as const;

export const servicePackages: ServicePackage[] = [
  {
    name: "Pachet unic",
    price: "299 EUR / lună",
    description:
      "Administrare social media simplă și completă pentru o prezență elegantă și constantă.",
    highlighted: true,
    features: [
      "20 postări pe lună",
      "Publicare pe Facebook și Instagram",
      "Design inclus",
      "Copy inclus",
      "Calendar editorial lunar",
      "Comunicare constantă și profesională",
    ],
  },
];

export const serviceInclusions = [
  {
    index: "01",
    title: "Strategia lunară",
    body: "Teme, formate, distribuție. Totul gândit dinainte, fără improvizație săptămânală.",
  },
  {
    index: "02",
    title: "Design vizual",
    body: "Grafică construită pe identitatea ta. Coerent de la o postare la următoarea.",
  },
  {
    index: "03",
    title: "Copywriting",
    body: "Texte scurte, clare, care vorbesc în limbajul clienților tăi, nu în jargon.",
  },
  {
    index: "04",
    title: "Publicare programată",
    body: "Postăm la ora potrivită pe Facebook și Instagram, fără să te mai gândești la asta.",
  },
  {
    index: "05",
    title: "Calendar editorial",
    body: "Vizibil din timp, editabil, transparent. Știi mereu ce urmează săptămâna viitoare.",
  },
  {
    index: "06",
    title: "Raport lunar",
    body: "Un recap simplu cu ce am publicat, ce a funcționat și ce propunem luna următoare.",
  },
] as const;

export const deliverables = [
  {
    metric: "20",
    unit: "postări / lună",
    title: "Volum predictibil",
    body: "Număr fix, livrate într-un calendar editorial vizibil din prima zi a lunii.",
  },
  {
    metric: "2",
    unit: "canale active",
    title: "Facebook + Instagram",
    body: "Publicare nativă pe ambele platforme, cu formate adaptate fiecăreia.",
  },
  {
    metric: "<24h",
    unit: "răspuns la feedback",
    title: "Comunicare rapidă",
    body: "Menținem timpul de răspuns sub o zi lucrătoare pe toate revizuirile.",
  },
  {
    metric: "1",
    unit: "raport / lună",
    title: "Vizibilitate completă",
    body: "Recap lunar cu ce am publicat, cifre relevante și ce propunem urmator.",
  },
  {
    metric: "0",
    unit: "costuri ascunse",
    title: "Preț fix garantat",
    body: "299 EUR / lună fără TVA. Fără creșteri, fără costuri suplimentare.",
  },
  {
    metric: "0",
    unit: "luni minime",
    title: "Fără contract lung",
    body: "Colaborare lunară. Continui când vrei, te oprești când vrei.",
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
    a: "Nu. Colaborarea merge lunar. Continui când vrei, te oprești când vrei, fără penalități.",
  },
  {
    q: "Ce trebuie să fac eu?",
    a: "O discuție inițială și acces la paginile de Facebook și Instagram. Restul îl gestionăm noi.",
  },
  {
    q: "Pot cere modificări la postări?",
    a: "Da. Ai o rundă de feedback la jumătatea lunii înainte de publicare.",
  },
  {
    q: "De unde începem dacă nu am paginile active?",
    a: "Te ajutăm să le configurezi. Pornim publicarea odată ce paginile sunt pregătite.",
  },
  {
    q: "Factura este cu TVA?",
    a: "Prețul de 299 EUR este fără TVA. Primești factură standard la început de lună.",
  },
] as const;
