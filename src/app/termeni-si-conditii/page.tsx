import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/data/legal";
import type { LegalSection } from "@/data/legal";

export const metadata: Metadata = {
  title: "Termeni si conditii",
  description:
    "Termenii si conditiile de utilizare a website-ului si a serviciilor Simply Social: obiectul contractului, pret, durata, proprietate intelectuala si solutionare a disputelor.",
};

const sections: LegalSection[] = [
  {
    id: "parti",
    title: "Partile contractului",
    body: [
      `Acesti termeni guverneaza relatia dintre ${company.name} ("Simply Social", "Prestator") si orice persoana fizica sau juridica ("Client") care acceseaza website-ul sau care comanda serviciile noastre.`,
      "Prin trimiterea unei solicitari prin formularul de contact, prin corespondenta email sau prin semnarea unui contract separat, Clientul confirma ca a citit si acceptat prezentii termeni.",
    ],
    list: [
      { label: "Prestator", value: company.name },
      { label: "CUI", value: company.cui },
      { label: "Reg. Comertului", value: company.registruComertului },
      { label: "Sediu", value: company.adresa },
      { label: "Email", value: company.email },
    ],
  },
  {
    id: "obiect",
    title: "Obiectul contractului",
    body: [
      "Simply Social ofera servicii de administrare social media pentru canalele Facebook si Instagram ale Clientului, prin pachetul standard prezentat pe website (\"Pachetul\").",
      "Obligatiile concrete privind livrabilele, termenele si conditiile tehnice sunt detaliate in sectiunea urmatoare.",
    ],
  },
  {
    id: "pachet",
    title: "Pachetul si livrabilele",
    body: [
      "Pachetul standard include, pentru fiecare luna calendaristica de colaborare, urmatoarele:",
    ],
    list: [
      { label: "Postari create si publicate", value: "20 / luna" },
      { label: "Canale", value: "Facebook + Instagram" },
      { label: "Design grafic", value: "inclus" },
      { label: "Copywriting", value: "inclus" },
      { label: "Calendar editorial lunar", value: "inclus" },
      { label: "Runda de feedback", value: "1 / luna" },
      { label: "Raport lunar", value: "inclus" },
      { label: "Gestiunea mesajelor / comentariilor", value: "neinclus" },
      { label: "Campanii platite (ads)", value: "neinclus" },
      { label: "Sesiuni foto / video", value: "neinclus" },
    ],
  },
  {
    id: "pret",
    title: "Pret si plata",
    body: [
      "Pretul Pachetului este 299 EUR pe luna, fara TVA. Facturarea se emite la inceput de luna, pentru luna respectiva.",
      "Plata se efectueaza prin transfer bancar in termen de 7 zile de la data emiterii facturii. Echivalentul in lei se calculeaza la cursul BNR din ziua emiterii facturii.",
      "In cazul intarzierii platii cu mai mult de 15 zile, Simply Social poate suspenda publicarea pana la regularizarea situatiei, fara obligatia de a extinde perioada facturata.",
    ],
  },
  {
    id: "durata",
    title: "Durata si rezilierea",
    body: [
      "Colaborarea este lunara, fara obligatii minime contractuale. Se considera reinnoita tacit pentru inca o luna in lipsa unei notificari de incetare.",
      "Oricare dintre parti poate denunta unilateral colaborarea printr-o notificare scrisa (email) cu cel putin 15 zile calendaristice inainte de inceputul lunii urmatoare.",
      "Simply Social poate rezilia imediat contractul in cazul in care Clientul solicita publicarea de continut ilegal, discriminatoriu, inselator sau care incalca politicile platformelor Meta.",
    ],
  },
  {
    id: "ip",
    title: "Proprietate intelectuala",
    body: [
      "Materialele grafice si textele create de Simply Social si livrate catre Client devin proprietatea exclusiva a Clientului dupa plata integrala a facturii lunii respective, pentru utilizare pe canalele sale social media.",
      "Clientul garanteaza ca detine toate drepturile asupra materialelor pe care ni le furnizeaza (logo, fotografii, texte, branding) si ne acorda un drept limitat de a le folosi in executarea contractului.",
      "Simply Social isi rezerva dreptul de a folosi lucrarile realizate, in scop de portofoliu si materiale de promovare, cu mentionarea Clientului, cu exceptia cazului in care partile convin explicit altfel.",
    ],
  },
  {
    id: "confidentialitate",
    title: "Confidentialitate",
    body: [
      "Orice informatie comerciala, strategica sau operationala schimbata intre parti este considerata confidentiala si nu poate fi divulgata unor terti fara acordul scris al celeilalte parti.",
      "Obligatia de confidentialitate ramane in vigoare timp de 3 ani dupa incetarea colaborarii.",
    ],
  },
  {
    id: "responsabilitati",
    title: "Responsabilitatile Clientului",
    body: [
      "Pentru ca Simply Social sa poata livra conform angajamentelor, Clientul se obliga sa:",
    ],
    list: [
      { label: "Furnizeze informatii exacte si complete despre afacere" },
      { label: "Asigure accesul administrativ necesar publicarii" },
      { label: "Raspunda la solicitari in termen de maximum 3 zile lucratoare" },
      { label: "Respecte termenele de plata agreate" },
      { label: "Nu solicite continut ilegal, inselator sau care incalca drepturile unor terti" },
    ],
  },
  {
    id: "raspundere",
    title: "Limitarea raspunderii",
    body: [
      "Simply Social isi asuma o obligatie de diligenta, nu de rezultat. Nu garantam un numar specific de urmaritori, vanzari sau engagement, intrucat acestea depind de factori multipli care nu tin exclusiv de activitatea noastra.",
      "Raspunderea maxima cumulata a Simply Social nu poate depasi echivalentul a 3 luni din valoarea Pachetului, indiferent de natura prejudiciului.",
      "Simply Social nu raspunde pentru intreruperi, modificari de algoritm, suspendari de cont sau alte evenimente generate de platformele Meta (Facebook, Instagram) sau de terti.",
    ],
  },
  {
    id: "forta-majora",
    title: "Forta majora",
    body: [
      "Niciuna dintre parti nu raspunde pentru neexecutarea obligatiilor din cauza unor evenimente de forta majora, inclusiv, dar fara a se limita la: calamitati naturale, razboi, pandemii, greve generale, caderi prelungite ale infrastructurii de internet, interdictii legale.",
      "Partea afectata va notifica cealalta parte in cel mult 5 zile de la aparitia evenimentului.",
    ],
  },
  {
    id: "modificari",
    title: "Modificarea termenilor",
    body: [
      "Simply Social poate actualiza periodic prezentii termeni. Versiunea aplicabila este cea publicata pe website la data la care Clientul comanda serviciile.",
      "Modificarile materiale vor fi comunicate in prealabil clientilor activi printr-o notificare email.",
    ],
  },
  {
    id: "litigii",
    title: "Legea aplicabila si litigii",
    body: [
      "Prezentul contract este guvernat de legea romana. Orice litigiu se va solutiona amiabil; in lipsa unei intelegeri, competenta revine instantelor din Bucuresti, Romania.",
      "Consumatorii pot apela la platforma europeana de solutionare online a disputelor: ec.europa.eu/consumers/odr.",
    ],
  },
  {
    id: "contact-tc",
    title: "Contact",
    body: [
      `Pentru orice intrebare legata de prezentii termeni, ne poti scrie la ${company.email}.`,
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
          termeni si <span className="font-serif-italic">conditii</span>.
        </>
      }
      intro="Acest document stabileste regulile de utilizare a website-ului simplysocial.ro si termenii care se aplica in cazul in care devii client. L-am scris clar, fara jargon inutil, dar cu tot ce conteaza legal."
      sections={sections}
    />
  );
}
