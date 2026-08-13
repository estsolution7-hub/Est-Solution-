import { DetailShell } from "../detail-shell";

export default function TechnicalResourcesPage() {
  return <DetailShell eyebrow="TECHNICAL RESOURCES" title="Technical context for evaluating a hydrogen system." intro="A concise starting point for engineering teams comparing technologies, capacities and deployment requirements.">
    <div className="detail-content"><section className="detail-intro"><h2>Plan the application before selecting the system.</h2><p>Useful inputs include target hydrogen output, available electrical power, water quality, operating pressure, installation environment and the end-use duty cycle. EST Solution can help translate these constraints into an appropriate stack capacity and balance-of-plant concept.</p></section><section className="detail-section"><div className="eyebrow"><span /> EVALUATION CHECKLIST</div><h2>What to prepare for a technical discussion.</h2><div className="feature-grid"><article><small>01</small><h3>Energy source</h3><p>Available power, renewable profile, voltage and expected operating hours.</p></article><article><small>02</small><h3>Hydrogen demand</h3><p>Required output, pressure, purity, storage and downstream use.</p></article><article><small>03</small><h3>Site conditions</h3><p>Space, ventilation, water, climate, permitting and integration constraints.</p></article></div></section></div>
  </DetailShell>;
}
