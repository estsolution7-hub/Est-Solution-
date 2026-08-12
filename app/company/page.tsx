import { DetailShell } from "../detail-shell";

const milestones = [
  ["2023", "EST Solution founded in August; corporate research department established in October."],
  ["2024", "Technology development, university cooperation and public support programs expanded."],
  ["TODAY", "Continuing component localization, stack development and distributed green-hydrogen demonstrations."],
];

export default function CompanyPage() {
  return <DetailShell eyebrow="COMPANY" title="A focused team for practical green hydrogen." intro="EST Solution develops renewable-energy technology with an emphasis on local technical capability, connected R&D and deployable hydrogen systems.">
    <div className="detail-content">
      <section className="detail-intro"><h2>Technology with a clear purpose.</h2><p>Founded in 2023, EST Solution works across the value chain that determines the cost and performance of PEM water electrolysis. The company’s scope includes catalyst synthesis, membrane electrode assemblies, hydrocarbon membranes, porous transport layers, stack engineering and independent hydrogen production systems. The goal is straightforward: strengthen energy independence while helping customers move toward carbon-neutral operations.</p></section>
      <section className="detail-section"><div className="eyebrow"><span /> HOW WE WORK</div><h2>Four principles guide the company.</h2><div className="feature-grid">
        <article><small>01</small><h3>Customer focus</h3><p>Start with the operating environment, target capacity and technical constraint—not a generic product pitch.</p></article>
        <article><small>02</small><h3>Core technology</h3><p>Build knowledge in-house across the interfaces that most strongly affect performance and cost.</p></article>
        <article><small>03</small><h3>Value creation</h3><p>Translate R&D into measurable gains in localization, manufacturability and practical deployment.</p></article>
      </div></section>
      <section className="detail-section"><div className="eyebrow"><span /> COMPANY JOURNEY</div><h2>Young company. Focused momentum.</h2><div className="feature-grid">{milestones.map(([year, copy]) => <article key={year}><small>{year}</small><h3>{year === "TODAY" ? "Building the next stage" : "A foundation for growth"}</h3><p>{copy}</p></article>)}</div></section>
    </div>
  </DetailShell>;
}
