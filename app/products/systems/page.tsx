"use client";

import { useEffect } from "react";
import { DetailShell } from "../../detail-shell";
import { useLanguage } from "../../use-language";

const products = [
  { name: "2.5 kW stack", nameKr: "2.5kW 스택", image: "/product-stack-2-5kw.webp", size: "580 × 374 × 550 mm", power: "< 2.5 kW", hydrogen: "500 L/h", oxygen: "250 L/h" },
  { name: "5 kW stack", nameKr: "5kW 스택", image: "/product-stack-5kw.webp", size: "1000 × 550 × 1200 mm", power: "< 5 kW", hydrogen: "1,000 L/h", oxygen: "500 L/h" },
  { name: "20 kW stack", nameKr: "20kW 스택", image: "/product-stack-20kw.webp", size: "1800 × 550 × 2200 mm", power: "< 20 kW", hydrogen: "4,000 L/h", oxygen: "2,000 L/h" },
];

export default function SystemsPage() {
  const [, , korean] = useLanguage();
  useEffect(() => {
    document.title = korean ? "이에스티솔루션 | 수전해 시스템" : "EST Solution | Electrolysis Systems";
  }, [korean]);

  return <DetailShell
    eyebrow={korean ? "PEM 수전해" : "PEM WATER ELECTROLYSIS"}
    title={korean ? "수요에 맞춰 커지는 스택 계열." : "A stack family that scales with demand."}
    intro={korean ? "시험·실증에서 분산형 그린수소까지. 2.5kW, 5kW, 20kW 세 용량이 같은 제조 기준을 공유합니다." : "Three capacity classes create a practical path from testing and demonstration to larger distributed green-hydrogen applications."}
  >
    <div className="detail-content">
      <section className="detail-intro">
        <h2>{korean ? "맞는 규모에서 시작하십시오." : "Start at the right scale."}</h2>
        <p>{korean
          ? "운전 범위는 0–7 barg, 50–80°C, 수소 순도 99.97–99.99%입니다. 단일 스택은 단순한 프로젝트와 낮은 초기 투자에 맞고, 멀티 스택은 용량·유연성·복원력을 더합니다."
          : "The product family shares a reported operating range of 0–7 barg and 50–80°C, with hydrogen purity of 99.97–99.99%. A single-stack architecture supports simpler projects and lower initial investment, while multi-stack arrangements add capacity, operating flexibility and resilience."}</p>
      </section>
      <section className="detail-section">
        <div className="eyebrow"><span /> {korean ? "제품 라인업" : "PRODUCT LINEUP"}</div>
        <h2>{korean ? "세 가지 구성." : "Three configurations."}</h2>
        <div className="spec-grid">{products.map((product) => <article className="spec-card" key={product.name}><div className="spec-card-image"><img src={product.image} alt={korean ? product.nameKr : product.name} loading="lazy" decoding="async" /></div><div className="spec-card-body"><h3>{korean ? product.nameKr : product.name}</h3><dl><div><dt>{korean ? "크기" : "Dimensions"}</dt><dd>{product.size}</dd></div><div><dt>{korean ? "소비 전력" : "Power"}</dt><dd>{product.power}</dd></div><div><dt>{korean ? "수소" : "Hydrogen"}</dt><dd>{product.hydrogen}</dd></div><div><dt>{korean ? "산소" : "Oxygen"}</dt><dd>{product.oxygen}</dd></div><div><dt>{korean ? "순도" : "Purity"}</dt><dd>99.97–99.99%</dd></div></dl></div></article>)}</div>
      </section>
      <section className="detail-section">
        <div className="eyebrow"><span /> {korean ? "구성" : "ARCHITECTURE"}</div>
        <h2>{korean ? "단일 스택 또는 모듈형 멀티 스택." : "Single stack or modular multi-stack."}</h2>
        <div className="feature-grid">
          <article><small>{korean ? "단일" : "SINGLE"}</small><h3>{korean ? "단순하고 효율적" : "Simple and efficient"}</h3><p>{korean ? "부품이 적고 제어가 단순하며, 정해진 용량에는 초기 비용이 낮습니다." : "Fewer components, straightforward control and lower initial cost for defined capacity requirements."}</p></article>
          <article><small>{korean ? "멀티" : "MULTI"}</small><h3>{korean ? "유연한 용량" : "Flexible capacity"}</h3><p>{korean ? "수요가 늘면 스택 모듈을 더하고, 재생전력 변동에 맞춰 운전합니다." : "Add stack modules as demand grows and tune operation to changing renewable-power availability."}</p></article>
          <article><small>{korean ? "복원력" : "RESILIENCE"}</small><h3>{korean ? "부분 운전" : "Partial operation"}</h3><p>{korean ? "한 모듈이 정비 중이어도 나머지 스택은 계속 운전할 수 있습니다." : "Modular systems can continue operating available stacks if another module requires service."}</p></article>
        </div>
      </section>
      <p className="results-note">{korean ? "사양은 이에스티솔루션 회사소개 자료 기준이며, 최종 설계·구매 전에 확인이 필요합니다." : "Specifications are based on the EST Solution company brochure and should be confirmed for final engineering and procurement."}</p>
    </div>
  </DetailShell>;
}
