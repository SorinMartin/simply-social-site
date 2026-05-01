import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/data/legal";
import type { LegalSection } from "@/data/legal";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description:
    "Politica de confidențialitate Simply Social: ce date colectăm, temeiul legal, drepturile tale GDPR și cum ne poți contacta.",
};

const sections: LegalSection[] = [
  {
    id: "operator",
    title: "Operatorul datelor",
    body: [
      `Operatorul datelor cu caracter personal este ${company.name} ("Simply Social", "noi"), societate înregistrată în România.`,
      "Pentru orice întrebare privind prelucrarea datelor tale personale sau exercitarea drepturilor prevăzute de GDPR ne poți scrie la adresa de mai jos.",
    ],
    list: [
      { label: "Denumire", value: company.name },
      { label: "CUI", value: company.cui },
      { label: "Reg. Comerțului", value: company.registruComertului },
      { label: "Sediu", value: company.adresa },
      { label: "Contact general", value: company.email },
      { label: "Protecția datelor", value: company.privacyEmail },
    ],
  },
  {
    id: "date",
    title: "Ce date colectăm",
    body: [
      "Colectăm numai datele necesare pentru a răspunde solicitărilor tale și pentru a livra serviciile noastre.",
      "Atunci când ne trimiți un mesaj prin formularul de contact sau prin email colectăm: nume, email, nume companie și conținutul mesajului.",
      "Dacă devii client, colectăm în plus date necesare pentru facturare (denumire juridică, CUI, adresă sediu) și date de acces necesare publicării (acces administrativ la paginile tale de Facebook și Instagram).",
      "Colectăm automat date tehnice limitate atunci când vizitezi website-ul nostru, conform politicii de cookies.",
    ],
  },
  {
    id: "scop",
    title: "Scopurile prelucrării",
    body: [
      "Prelucrăm datele tale exclusiv pentru scopuri clare și legitime.",
    ],
    list: [
      { label: "Răspuns la solicitări comerciale", value: "pre-contract" },
      { label: "Executarea contractului de servicii", value: "contract" },
      { label: "Emiterea facturilor și evidență contabilă", value: "obligație legală" },
      { label: "Comunicări operaționale (status, raport lunar)", value: "contract" },
      { label: "Îmbunătățirea website-ului și analiză trafic", value: "interes legitim" },
      { label: "Marketing direct către clienți existenți", value: "consimțământ" },
    ],
  },
  {
    id: "temei",
    title: "Temeiul legal (GDPR)",
    body: [
      "Prelucrarea se bazează pe unul sau mai multe dintre următoarele temeiuri prevăzute de Regulamentul (UE) 2016/679:",
      "Art. 6(1)(b) executarea unui contract sau demersuri pre-contractuale la cererea ta; Art. 6(1)(c) obligație legală (facturare, fiscalitate); Art. 6(1)(f) interes legitim (securitate, analiză trafic, marketing către clienți existenți); Art. 6(1)(a) consimțământ, acolo unde este solicitat explicit, de exemplu pentru cookies non-esențiale.",
    ],
  },
  {
    id: "stocare",
    title: "Perioada de stocare",
    body: [
      "Păstrăm datele tale doar atât timp cât este necesar pentru scopul pentru care au fost colectate, sau pe perioada impusă de lege.",
    ],
    list: [
      { label: "Solicitări comerciale neconcretizate", value: "12 luni" },
      { label: "Date client pe durata colaborării", value: "durata contractului" },
      { label: "Documente financiar-contabile", value: "10 ani (legal)" },
      { label: "Corespondență email operațională", value: "36 luni" },
      { label: "Jurnal analitice website", value: "14 luni" },
    ],
  },
  {
    id: "destinatari",
    title: "Cu cine partajăm datele",
    body: [
      "Nu vindem și nu divulgăm datele tale. Le partajăm strict cu furnizori de servicii care ne ajută să operăm, sub obligații stricte de confidențialitate și în conformitate cu GDPR.",
      "Folosim următoarele categorii de împuterniciți și sub-împuterniciți:",
    ],
    list: [
      { label: "Găzduire website", value: "Vercel Inc." },
      { label: "Email și colaborare", value: "Google Workspace" },
      { label: "Stocare fișiere lucrate", value: "Google Drive / Dropbox" },
      { label: "Facturare și contabilitate", value: "furnizor autorizat RO" },
      { label: "Platforme de publicare", value: "Meta Platforms (FB, IG)" },
      { label: "Analitice website", value: "Vercel Analytics / Plausible" },
    ],
  },
  {
    id: "transferuri",
    title: "Transferuri în afara UE",
    body: [
      "Unii furnizori (Vercel, Google, Meta) pot prelucra date în Statele Unite. Aceste transferuri se realizează în baza Clauzelor Contractuale Standard aprobate de Comisia Europeană și, acolo unde se aplică, a cadrului EU-US Data Privacy Framework.",
      "Cerem garanții contractuale echivalente nivelului de protecție oferit în Uniunea Europeană.",
    ],
  },
  {
    id: "drepturi",
    title: "Drepturile tale",
    body: [
      "Conform GDPR, ai următoarele drepturi cu privire la datele tale personale:",
    ],
    list: [
      { label: "Dreptul la informare" },
      { label: "Dreptul de acces la date" },
      { label: "Dreptul la rectificare" },
      { label: "Dreptul la ștergere ('dreptul de a fi uitat')" },
      { label: "Dreptul la restricționarea prelucrării" },
      { label: "Dreptul la portabilitatea datelor" },
      { label: "Dreptul de opoziție" },
      { label: "Dreptul de a nu face obiectul unei decizii automate" },
      { label: "Dreptul de a retrage consimțământul" },
      { label: "Dreptul de a depune plângere la ANSPDCP" },
    ],
  },
  {
    id: "exercitare",
    title: "Cum îți exerciți drepturile",
    body: [
      `Poți exercita oricare dintre drepturile de mai sus scriind la ${company.privacyEmail}. Răspundem în maximum 30 de zile, conform GDPR, sau în cel mult 90 de zile în cazuri deosebit de complexe, cu informare prealabilă.`,
      `Dacă nu ești mulțumit de răspunsul nostru, ai dreptul să depui o plângere la ${company.anspdcp}.`,
    ],
  },
  {
    id: "securitate",
    title: "Securitatea datelor",
    body: [
      "Aplicăm măsuri tehnice și organizatorice rezonabile pentru a proteja datele tale, inclusiv: acces pe bază de permisiuni, parole unice și autentificare în doi factori, criptare în tranzit (HTTPS), controlul accesului furnizorilor și ștergerea datelor la finalul colaborării.",
      "Nicio metodă de transmisie sau stocare nu este complet sigură. În cazul unei breach-uri care ar putea afecta drepturile tale, te vom informa în maximum 72 de ore conform GDPR.",
    ],
  },
  {
    id: "minori",
    title: "Minori",
    body: [
      "Serviciile noastre sunt adresate exclusiv persoanelor juridice și persoanelor majore. Nu colectăm cu bună-știință date personale de la minori sub 16 ani. Dacă descoperim că am colectat astfel de date fără consimțământul părintelui, le ștergem imediat.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    body: [
      "Website-ul folosește cookies pentru a funcționa corect și, cu acordul tău, pentru a înțelege cum este utilizat. Detalii complete, tipuri de cookies și modul în care îți poți retrage consimțământul găsești în Politica de cookies.",
    ],
  },
  {
    id: "modificari",
    title: "Modificări ale politicii",
    body: [
      "Putem actualiza această politică pentru a reflecta schimbări în serviciile noastre, în tehnologie sau în cerințele legale. Orice modificare materială va fi comunicată pe website și, acolo unde se aplică, prin email.",
      "Versiunea curentă este afișată în partea de sus a paginii.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      `Pentru orice întrebare privind această politică sau modul în care prelucrăm datele tale personale, ne poți contacta la ${company.privacyEmail}. Pentru solicitări comerciale obișnuite, adresa potrivită este ${company.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      pathname="/politica-de-confidentialitate"
      eyebrow="Legal · Confidențialitate"
      title={
        <>
          politica de{" "}
          <span className="font-serif-italic">confidențialitate</span>.
        </>
      }
      intro="Respectăm confidențialitatea fiecărei persoane care intră în contact cu Simply Social. Această politică explică în detaliu ce date colectăm, de ce, cât timp le păstrăm și ce drepturi ai. Este redactată în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația română aplicabilă."
      sections={sections}
    />
  );
}
