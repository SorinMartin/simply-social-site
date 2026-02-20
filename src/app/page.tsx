const metrics = [
  { value: "12h", label: "economisite pe saptamana" },
  { value: "4.2x", label: "mai multe campanii lansate" },
  { value: "98%", label: "postari livrate la timp" },
];

const features = [
  {
    title: "Calendar unificat",
    description:
      "Vezi toate platformele social media intr-o singura cronologie simpla.",
  },
  {
    title: "AI Caption Lab",
    description:
      "Genereaza variante de copy adaptate automat pe tonul brandului tau.",
  },
  {
    title: "Aprobari instant",
    description:
      "Trimite drafturi in review, primeste feedback contextual si publica fara frictiune.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero">
        <p className="chip">Simply Social</p>
        <h1>Toata prezenta ta social media, condusa dintr-un singur dashboard.</h1>
        <p className="subhead">
          Planifica, scrie, aproba si publica fara tab-uri in plus. Simplu pentru
          freelanceri, suficient de puternic pentru echipe.
        </p>
        <div className="cta-group">
          <a className="btn btn-primary" href="#">
            Incepe gratuit
          </a>
          <a className="btn btn-secondary" href="#">
            Vezi demo
          </a>
        </div>
      </section>

      <section className="metrics" aria-label="Rezultate cheie">
        {metrics.map((item) => (
          <article key={item.label} className="metric-card">
            <p className="metric-value">{item.value}</p>
            <p className="metric-label">{item.label}</p>
          </article>
        ))}
      </section>

      <section className="feature-grid" aria-label="Functionalitati">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="highlight">
        <div className="highlight-copy">
          <p className="chip">Preview live</p>
          <h2>Vezi fluxul de lucru, de la idee la postare programata.</h2>
          <p>
            Cu Simply Social poti transforma un brief in 5 variante de continut
            in mai putin de 15 minute si sincroniza publicarea pe toate canalele.
          </p>
        </div>
        <div className="highlight-panel" aria-hidden="true">
          <div className="panel-row">
            <span>Instagram</span>
            <strong>Programat 09:00</strong>
          </div>
          <div className="panel-row">
            <span>TikTok</span>
            <strong>In review</strong>
          </div>
          <div className="panel-row">
            <span>LinkedIn</span>
            <strong>Publicat</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
