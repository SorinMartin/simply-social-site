import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/data/legal";
import type { LegalSection } from "@/data/legal";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description:
    "Termenii și condițiile de utilizare a website-ului și a serviciilor Simply Social: obiectul contractului, preț, durată, proprietate intelectuală și soluționarea disputelor.",
};

const sections: LegalSection[] = [
  {
    id: "parti",
    title: "Părțile contractului",
    body: [
      `Acești termeni guvernează relația dintre ${company.name} ("Simply Social", "Prestator") și orice persoană fizică sau juridică ("Client") care accesează website-ul sau care comandă serviciile noastre.`,
      "Prin trimiterea unei solicitări prin formularul de contact, prin corespondență email sau prin semnarea unui contract separat, Clientul confirmă că a citit și acceptat prezenții termeni.",
    ],
    list: [
      { label: "Prestator", value: company.name },
      { label: "CUI", value: company.cui },
      { label: "Reg. Comerțului", value: company.registruComertului },
      { label: "Sediu", value: company.adresa },
      { label: "Email", value: company.email },
    ],
  },
  {
    id: "obiect",
    title: "Obiectul contractului",
    body: [
      "Simply Social oferă servicii de administrare social media pentru canalele Facebook și Instagram ale Clientului, prin pachetul standard prezentat pe website (\"Pachetul\").",
      "Obligațiile concrete privind livrabilele, termenele și condițiile tehnice sunt detaliate în secțiunea următoare.",
    ],
  },
  {
    id: "pachet",
    title: "Pachetul și livrabilele",
    body: [
      "Pachetul standard include, pentru fiecare lună calendaristică de colaborare, următoarele:",
    ],
    list: [
      { label: "Postări create și publicate", value: "20 / lună" },
      { label: "Canale", value: "Facebook + Instagram" },
      { label: "Design grafic", value: "inclus" },
      { label: "Copywriting", value: "inclus" },
      { label: "Calendar editorial lunar", value: "inclus" },
      { label: "Rundă de feedback", value: "1 / lună" },
      { label: "Raport lunar", value: "inclus" },
      { label: "Gestiunea mesajelor / comentariilor", value: "neinclus" },
      { label: "Campanii plătite (ads)", value: "neinclus" },
      { label: "Sesiuni foto / video", value: "neinclus" },
    ],
  },
  {
    id: "pret",
    title: "Preț și plată",
    body: [
      "Prețul Pachetului este 299 EUR pe lună, fără TVA. Facturarea se emite la început de lună, pentru luna respectivă.",
      "Plata se efectuează prin transfer bancar în termen de 7 zile de la data emiterii facturii. Echivalentul în lei se calculează la cursul BNR din ziua emiterii facturii.",
      "În cazul întârzierii plății cu mai mult de 15 zile, Simply Social poate suspenda publicarea până la regularizarea situației, fără obligația de a extinde perioada facturată.",
    ],
  },
  {
    id: "durata",
    title: "Durata și rezilierea",
    body: [
      "Colaborarea este lunară, fără obligații minime contractuale. Se consideră reînnoită tacit pentru încă o lună în lipsa unei notificări de încetare.",
      "Oricare dintre părți poate denunța unilateral colaborarea printr-o notificare scrisă (email) cu cel puțin 15 zile calendaristice înainte de începutul lunii următoare.",
      "Simply Social poate rezilia imediat contractul în cazul în care Clientul solicită publicarea de conținut ilegal, discriminatoriu, înșelător sau care încalcă politicile platformelor Meta.",
    ],
  },
  {
    id: "ip",
    title: "Proprietate intelectuală",
    body: [
      "Materialele grafice și textele create de Simply Social și livrate către Client devin proprietatea exclusivă a Clientului după plata integrală a facturii lunii respective, pentru utilizare pe canalele sale social media.",
      "Clientul garantează că deține toate drepturile asupra materialelor pe care ni le furnizează (logo, fotografii, texte, branding) și ne acordă un drept limitat de a le folosi în executarea contractului.",
      "Simply Social își rezervă dreptul de a folosi lucrările realizate, în scop de portofoliu și materiale de promovare, cu menționarea Clientului, cu excepția cazului în care părțile convin explicit altfel.",
    ],
  },
  {
    id: "confidentialitate",
    title: "Confidențialitate",
    body: [
      "Orice informație comercială, strategică sau operațională schimbată între părți este considerată confidențială și nu poate fi divulgată unor terți fără acordul scris al celeilalte părți.",
      "Obligația de confidențialitate rămâne în vigoare timp de 3 ani după încetarea colaborării.",
    ],
  },
  {
    id: "responsabilitati",
    title: "Responsabilitățile Clientului",
    body: [
      "Pentru ca Simply Social să poată livra conform angajamentelor, Clientul se obligă să:",
    ],
    list: [
      { label: "Furnizeze informații exacte și complete despre afacere" },
      { label: "Asigure accesul administrativ necesar publicării" },
      { label: "Răspundă la solicitări în termen de maximum 3 zile lucrătoare" },
      { label: "Respecte termenele de plată agreate" },
      { label: "Nu solicite conținut ilegal, înșelător sau care încalcă drepturile unor terți" },
    ],
  },
  {
    id: "raspundere",
    title: "Limitarea răspunderii",
    body: [
      "Simply Social își asumă o obligație de diligență, nu de rezultat. Nu garantăm un număr specific de urmăritori, vânzări sau engagement, întrucât acestea depind de factori multipli care nu țin exclusiv de activitatea noastră.",
      "Răspunderea maximă cumulată a Simply Social nu poate depăși echivalentul a 3 luni din valoarea Pachetului, indiferent de natura prejudiciului.",
      "Simply Social nu răspunde pentru întreruperi, modificări de algoritm, suspendări de cont sau alte evenimente generate de platformele Meta (Facebook, Instagram) sau de terți.",
    ],
  },
  {
    id: "forta-majora",
    title: "Forța majoră",
    body: [
      "Niciuna dintre părți nu răspunde pentru neexecutarea obligațiilor din cauza unor evenimente de forță majoră, inclusiv, dar fără a se limita la: calamități naturale, război, pandemii, greve generale, căderi prelungite ale infrastructurii de internet, interdicții legale.",
      "Partea afectată va notifica cealaltă parte în cel mult 5 zile de la apariția evenimentului.",
    ],
  },
  {
    id: "modificari",
    title: "Modificarea termenilor",
    body: [
      "Simply Social poate actualiza periodic prezenții termeni. Versiunea aplicabilă este cea publicată pe website la data la care Clientul comandă serviciile.",
      "Modificările materiale vor fi comunicate în prealabil clienților activi printr-o notificare email.",
    ],
  },
  {
    id: "litigii",
    title: "Legea aplicabilă și litigii",
    body: [
      "Prezentul contract este guvernat de legea română. Orice litigiu se va soluționa amiabil; în lipsa unei înțelegeri, competența revine instanțelor din București, România.",
      "Consumatorii pot apela la platforma europeană de soluționare online a disputelor: ec.europa.eu/consumers/odr.",
    ],
  },
  {
    id: "contact-tc",
    title: "Contact",
    body: [
      `Pentru orice întrebare legată de prezenții termeni, ne poți scrie la ${company.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      pathname="/termeni-si-conditii"
      eyebrow="Legal · Termeni"
      title={
        <>
          termeni și <span className="font-serif-italic">condiții</span>.
        </>
      }
      intro="Acest document stabilește regulile de utilizare a website-ului simplysocial.ro și termenii care se aplică în cazul în care devii client. L-am scris clar, fără jargon inutil, dar cu tot ce contează legal."
      sections={sections}
    />
  );
}
