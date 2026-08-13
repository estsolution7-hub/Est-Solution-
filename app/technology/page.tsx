import { IconAtom, IconDroplet, IconFlask2, IconRoute } from "@tabler/icons-react";
import { DetailShell } from "../detail-shell";

const subNav = [
  { label: "Why green hydrogen", id: "why-green-hydrogen" },
  { label: "How PEM electrolysis works", id: "pem-electrolysis" },
  { label: "Core technology", id: "core-technology" },
  { label: "Roadmap", id: "roadmap" },
];

export default function TechnologyPage() {
  return <DetailShell eyebrow="TECHNOLOGY" title="Engineering green hydrogen from material to system." intro="EST Solution connects catalyst chemistry, membrane-electrode assemblies, porous transport layers and stack engineering into a practical PEM electrolysis platform." subNav={subNav}>
    <div className="detail-content nav-section-stack">
      <section className="detail-section nav-target" id="why-green-hydrogen"><div className="eyebrow"><span /> WHY GREEN HYDROGEN</div><div className="detail-intro"><h2>Zero direct carbon at the point of production.</h2><p>Gray hydrogen relies on fossil fuel feedstocks. Blue hydrogen adds carbon capture, while green hydrogen uses renewable electricity to split water. That makes electrolysis an important route for lower-carbon industrial feedstock, long-duration energy storage and distributed clean power.</p></div></section>
      <section className="detail-section nav-target" id="pem-electrolysis"><div className="eyebrow"><span /> THE REACTION</div><div className="section-icon"><IconDroplet size={28} stroke={1.6} /></div><h2>Water in. Hydrogen and oxygen out.</h2><div className="feature-grid"><article><small>ANODE</small><h3>Oxygen evolution</h3><p>Water is supplied to the anode, where the reaction releases oxygen, protons and electrons.</p></article><article><small>MEMBRANE</small><h3>Selective transport</h3><p>The proton-exchange membrane conducts protons while separating the product gases.</p></article><article><small>CATHODE</small><h3>Hydrogen formation</h3><p>Protons and electrons recombine at the cathode to create high-purity hydrogen.</p></article></div></section>
      <section className="detail-section nav-target" id="core-technology"><div className="eyebrow"><span /> CORE TECHNOLOGY</div><div className="section-icon"><IconAtom size={28} stroke={1.6} /></div><h2>The interfaces determine performance.</h2><div className="feature-grid"><article><small>01</small><h3>Catalyst and MEA</h3><p>In-house catalyst synthesis and MEA manufacturing target lower precious-metal loading and better integration.</p></article><article><small>02</small><h3>Ti-PTL and membrane</h3><p>Transport layers and hydrocarbon membranes are engineered around conductivity, durability and manufacturability.</p></article><article><small>03</small><h3>Stack engineering</h3><p>Component knowledge carries through into stack design, assembly and system-level operating control.</p></article></div></section>
      <section className="detail-section nav-target" id="roadmap"><div className="eyebrow"><span /> ROADMAP</div><div className="section-icon"><IconRoute size={28} stroke={1.6} /></div><h2>From practical deployment to new environments.</h2><div className="feature-grid"><article><small>NOW</small><h3>Distributed systems</h3><p>Scale PEM systems for pilot, research and industrial use with modular capacity.</p></article><article><small>NEXT</small><h3>Marine and seawater</h3><p>Advance materials and balance-of-plant concepts for more demanding water and operating environments.</p></article><article><small>FUTURE</small><h3>Integrated clean energy</h3><p>Connect renewable generation, hydrogen production, storage and use in resilient local energy systems.</p></article></div></section>
    </div>
  </DetailShell>;
}
