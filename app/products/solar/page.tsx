import { DetailShell } from "../../detail-shell";

export default function SolarPage() {
  return <DetailShell eyebrow="COMPLEMENTARY PRODUCT LINE" title="Renewable power that supports a cleaner hydrogen system." intro="EST Solution also works with solar power generation as a complementary source for integrated clean-energy projects.">
    <div className="detail-content">
      <section className="detail-intro"><h2>A supporting capability.</h2><p>Solar generation can supply renewable electricity for electrolysis and wider carbon-reduction projects. This product line is currently presented as a supporting capability while the detailed commercial scope is confirmed. Contact EST Solution to discuss project requirements, site conditions and integration options.</p></section>
      <section className="detail-section"><div className="eyebrow"><span /> POSSIBLE APPLICATIONS</div><h2>Designed around the project.</h2><div className="feature-grid"><article><small>01</small><h3>Renewable input</h3><p>Connect clean electricity generation with hydrogen production and energy-management goals.</p></article><article><small>02</small><h3>Site integration</h3><p>Consider available area, operating profile and target generation when shaping the solution.</p></article><article><small>03</small><h3>Technical consultation</h3><p>Confirm the appropriate role for solar within the wider energy architecture before specification.</p></article></div></section>
    </div>
  </DetailShell>;
}
