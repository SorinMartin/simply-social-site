import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/data/legal";
import type { LegalSection } from "@/data/legal";

export const metadata: Metadata = {
  title: "Politica de confidentialitate",
  description:
    "Politica de confidentialitate Simply Social: ce date colectam, temeiul legal, drepturile tale GDPR si cum ne poti contacta.",
};

const sections: LegalSection[] = [
  {
    id: "operator",
    title: "Operatorul datelor",
    body: [
      `Operatorul datelor cu caracter personal este ${company.name} ("Simply Social", "noi"), societate inregistrata in Romania.`,
      "Pentru orice intrebare privind prelucrarea datelor tale personale sau exercitarea drepturilor prevazute de GDPR ne poti scrie la adresa de mai jos.",
    ],
    list: [
      { label: "Denumire", value: company.name },
      { label: "CUI", value: company.cui },
      { label: "Reg. Comertului", value: company.registruComertului },
      { label: "Sediu", value: company.adresa },
      { label: "Contact general", value: company.email },
      { label: "Protectia datelor", value: company.privacyEmail },
    ],
  },
  {
    id: "date",
    title: "Ce date colectam",
    body: [
      "Colectam numai datele necesare pentru a raspunde solicitarilor tale si pentru a livra serviciile noastre.",
      "Atunci cand ne trimiti un mesaj prin formularul de contact sau prin email colectam: nume, email, nume companie si continutul mesajului.",
      "Daca devii client, colectam in plus date necesare pentru facturare (denumire juridica, CUI, adresa sediu) si date de acces necesare publicarii (acces administrativ la paginile tale de Facebook si Instagram).",
      "Colectam automat date tehnice limitate atunci cand vizitezi website-ul nostru, conform politicii de cookies.",
    ],
  },
  {
    id: "scop",
    title: "Scopurile prelucrarii",
    body: [
      "Prelucram datele tale exclusiv pentru scopuri clare si legitime.",
    ],
    list: [
      { label: "Raspuns la solicitari comerciale", value: "pre-contract" },
      { label: "Executarea contractului de servicii", value: "contract" },
      { label: "Emiterea facturilor si evidenta contabila", value: "obligatie legala" },
      { label: "Comunicari operationale (status, raport lunar)", value: "contract" },
      { label: "Imbunatatirea website-ului si analiza trafic", value: "interes legitim" },
      { label: "Marketing direct catre clienti existenti", value: "consimtamant" },
    ],
  },
  {
    id: "temei",
    title: "Temeiul legal (GDPR)",
    body: [
      "Prelucrarea se bazeaza pe unul sau mai multe dintre urmatoarele temeiuri prevazute de Regulamentul (UE) 2016/679:",
      "Art. 6(1)(b) executarea unui contract sau demersuri pre-contractuale la cererea ta; Art. 6(1)(c) obligatie legala (facturare, fiscalitate); Art. 6(1)(f) interes legitim (securitate, analiza trafic, marketing catre clienti existenti); Art. 6(1)(a) consimtamant, acolo unde este solicitat explicit, de exemplu pentru cookies non-esentiale.",
    ],
  },
  {
    id: "stocare",
    title: "Perioada de stocare",
    body: [
      "Pastram datele tale doar atat timp cat este necesar pentru scopul pentru care au fost colectate, sau pe perioada impusa de lege.",
    ],
    list: [
      { label: "Solicitari comerciale neconcretizate", value: "12 luni" },
      { label: "Date client pe durata colaborarii", value: "durata contractului" },
      { label: "Documente financiar-contabile", value: "10 ani (legal)" },
      { label: "Corespondenta email operationala", value: "36 luni" },
      { label: "Jurnal analitice website", value: "14 luni" },
    ],
  },
  {
    id: "destinatari",
    title: "Cu cine partajam datele",
    body: [
      "Nu vindem si nu divulgam datele tale. Le partajam strict cu furnizori de servicii care ne ajuta sa operam, sub obligatii stricte de confidentialitate si in conformitate cu GDPR.",
      "Folosim urmatoarele categorii de imputerniciti si sub-imputerniciti:",
    ],
    list: [
      { label: "Gazduire website", value: "Vercel Inc." },
      { label: "Email si colaborare", value: "Google Workspace" },
      { label: "Stocare fisiere lucrate", value: "Google Drive / Dropbox" },
      { label: "Facturare si contabilitate", value: "furnizor autorizat RO" },
      { label: "Platforme de publicare", value: "Meta Platforms (FB, IG)" },
      { label: "Analitice website", value: "Vercel Analytics / Plausible" },
    ],
  },
  {
    id: "transferuri",
    title: "Transferuri in afara UE",
    body: [
      "Unii furnizori (Vercel, Google, Meta) pot prelucra date in Statele Unite. Aceste transferuri se realizeaza in baza Clauzelor Contractuale Standard aprobate de Comisia Europeana si, acolo unde se aplica, a cadrului EU-US Data Privacy Framework.",
      "Cerem garantii contractuale echivalente nivelului de protectie oferit in Uniunea Europeana.",
    ],
  },
  {
    id: "drepturi",
    title: "Drepturile tale",
    body: [
      "Conform GDPR, ai urmatoarele drepturi cu privire la datele tale personale:",
    ],
    list: [
      { label: "Dreptul la informare" },
      { label: "Dreptul de acces la date" },
      { label: "Dreptul la rectificare" },
      { label: "Dreptul la stergere ('dreptul de a fi uitat')" },
      { label: "Dreptul la restrictionarea prelucrarii" },
      { label: "Dreptul la portabilitatea datelor" },
      { label: "Dreptul de opozitie" },
      { label: "Dreptul de a nu face obiectul unei decizii automate" },
      { label: "Dreptul de a retrage consimtamantul" },
      { label: "Dreptul de a depune plangere la ANSPDCP" },
    ],
  },
  {
    id: "exercitare",
    title: "Cum iti exerciti drepturile",
    body: [
      `Poti exercita oricare dintre drepturile de mai sus scriind la ${company.privacyEmail}. Raspundem in maximum 30 de zile, conform GDPR, sau in cel mult 90 de zile in cazuri deosebit de complexe, cu informare prealabila.`,
      `Daca nu esti multumit de raspunsul nostru, ai dreptul sa depui o plangere la ${company.anspdcp}.`,
    ],
  },
  {
    id: "securitate",
    title: "Securitatea datelor",
    body: [
      "Aplicam masuri tehnice si organizatorice rezonabile pentru a proteja datele tale, inclusiv: acces pe baza de permisiuni, parole unice si autentificare in doi factori, criptare in tranzit (HTTPS), controlul accesului furnizorilor si stergerea datelor la finalul colaborarii.",
      "Nicio metoda de transmisie sau stocare nu este complet sigura. In cazul unei breach-uri care ar putea afecta drepturile tale, te vom informa in maximum 72 de ore conform GDPR.",
    ],
  },
  {
    id: "minori",
    title: "Minori",
    body: [
      "Serviciile noastre sunt adresate exclusiv persoanelor juridice si persoanelor majore. Nu colectam cu buna-stiinta date personale de la minori sub 16 ani. Daca descoperim ca am colectat astfel de date fara consimtamantul parintelui, le stergem imediat.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    body: [
      "Website-ul foloseste cookies pentru a functiona corect si, cu acordul tau, pentru a intelege cum este utilizat. Detalii complete, tipuri de cookies si modul in care iti poti retrage consimtamantul gasesti in Politica de cookies.",
    ],
  },
  {
    id: "modificari",
    title: "Modificari ale politicii",
    body: [
      "Putem actualiza aceasta politica pentru a reflecta schimbari in serviciile noastre, in tehnologie sau in cerintele legale. Orice modificare materiala va fi comunicata pe website si, acolo unde se aplica, prin email.",
      "Versiunea curenta este afisata in partea de sus a paginii.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      `Pentru orice intrebare privind aceasta politica sau modul in care prelucram datele tale personale, ne poti contacta la ${company.privacyEmail}. Pentru solicitari comerciale obisnuite, adresa potrivita este ${company.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      pathname="/politica-de-confidentialitate"
      eyebrow="Legal · Confidentialitate"
      title={
        <>
          politica de{" "}
          <span className="font-serif-italic">confidentialitate</span>.
        </>
      }
      intro="Respectam confidentialitatea fiecarei persoane care intra in contact cu Simply Social. Aceasta politica explica in detaliu ce date colectam, de ce, cat timp le pastram si ce drepturi ai. Este redactata in conformitate cu Regulamentul (UE) 2016/679 (GDPR) si legislatia romana aplicabila."
      sections={sections}
    />
  );
}
