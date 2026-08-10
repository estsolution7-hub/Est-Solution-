import { DetailShell } from "../../detail-shell";

const products = [
  { name: "2.5 kW stack", image: "/product-stack-2-5kw.png", size: "580 × 374 × 550 mm", power: "< 2.5 kW", hydrogen: "500 L/h", oxygen: "250 L/h" },
  { name: "5 kW stack", image: "/product-stack-5kw.png", size: "1000 × 550 × 1200 mm", power: "< 5 kW", hydrogen: "1,000 L/h", oxygen: "500 L/h" },
  { name: "20 kW stack", image: "/product-stack-20kw.png", size: "1800 × 550 × 2200 mm", power: "< 20 kW", hydrogen: "4,000 L/h", oxygen: "2,000 L/h" },
];

export default function SystemsPage() {
  return <DetailShell eyebrow="PEM WATER ELECTROLYSIS" title="A stack platform that scales with demand." intro="Three capacity classes create a practical path from testing and demonstration to larger distributed green-hydrogen applications.">
    <div className="detail-content">
      <section className="detail-intro"><h2>Start at the right scale.</h2><p>The product family shares a reported operating range of 0–7 barg and 50–80°C, with hydrogen purity of 99.97–99.99%. A single-stack architecture supports simpler projects and lower initial investment, while multi-stack arrangements add capacity, operating flexibility and resilience.</p></section>
      <section className="detail-section"><div className="eyebrow"><span /> PRODUCT LINEUP</div><h2>Three configurations.</h2><div className="spec-grid">{products.map((product) => <article className="spec-card" key={product.name}><div className="spec-card-image"><img src={product.image} alt={product.name} /></div><div className="spec-card-body"><h3>{product.name}</h3><dl><div><dt>Dimensions</dt><dd>{product.size}</dd></div><div><dt>Power</dt><dd>{product.power}</dd></div><div><dt>Hydrogen</dt><dd>{product.hydrogen}</dd></div><div><dt>Oxygen</dt><dd>{product.oxygen}</dd></div><div><dt>Purity</dt><dd>99.97–99.99%</dd></div></dl></div></article>)}</div></section>
      <section className="detail-section"><div className="eyebrow"><span /> ARCHITECTURE</div><h2>Single stack or modular multi-stack.</h2><div className="feature-grid"><article><small>SINGLE</small><h3>Simple and efficient</h3><p>Fewer components, straightforward control and lower initial cost for defined capacity requirements.</p></article><article><small>MULTI</small><h3>Flexible capacity</h3><p>Add stack modules as demand grows and tune operation to changing renewable-power availability.</p></article><article><small>RESILIENCE</small><h3>Partial operation</h3><p>Modular systems can continue operating available stacks if another module requires service.</p></article></div></section>
      <p className="results-note">Specifications are based on the EST Solution company brochure and should be confirmed for final engineering and procurement.</p>
    </div>
  </DetailShell>;
}
