"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowRight, IconAtom, IconBoxMultiple, IconBuilding, IconChevronDown, IconFlask2, IconGrain, IconLayersIntersect, IconMail, IconPhone, IconQuote, IconStack2, IconSun } from "@tabler/icons-react";
import { SiteNavigation } from "./site-navigation";

const heroImage = { src: "/hydrogen-hero-facility.jpg", label: "Hydrogen storage tanks and wind turbines", caption: "GREEN HYDROGEN STORAGE" };

const coreComponents = [
  { label: "Catalyst", Icon: IconAtom, note: "Formulated in-house to cut precious-metal loading" },
  { label: "Membrane", Icon: IconLayersIntersect, note: "Tuned for efficiency across pressure and load ranges" },
  { label: "MEA", Icon: IconStack2, note: "Catalyst, membrane and transport layer bonded as one" },
  { label: "Ti-PTL", Icon: IconGrain, note: "Titanium transport layer for corrosion resistance" },
  { label: "Stack", Icon: IconBoxMultiple, note: "Assembled and tested end to end before it ships" },
];

// Metrics below are the figures already published on /technology — do not alter
// without re-checking `components` in app/technology/page.tsx.
const stackLayers = [
  { id: "catalyst", name: "Catalyst", nameKr: "촉매", role: "anode + cathode", roleKr: "양극 · 음극", metric: "30%+", qualifier: "cost reduction", qualifierKr: "원가 절감", image: "/images/technology/enhanced_catalyst.png", desc: "Low-noble-metal formulation with longer operating life. Precious-metal loading is the largest lever on PEM cost.", descKr: "귀금속 사용을 최소화한 조성으로 수명을 늘렸습니다. 귀금속 담지량은 PEM 원가를 좌우하는 가장 큰 요소입니다.", tone: "green" },
  { id: "membrane", name: "Electrolyte membrane", nameKr: "전해질막", role: "proton exchange", roleKr: "양성자 교환", metric: "2×", qualifier: "durability vs Nafion", qualifierKr: "내구성 (Nafion 대비)", image: "/images/technology/enhanced_cell.png", desc: "Hydrocarbon-based, with crossover around a quarter of conventional PFSA — a thinner membrane at double the durability.", descKr: "탄화수소 기반으로 기존 PFSA 대비 크로스오버가 약 1/4 수준입니다. 더 얇으면서 내구성은 두 배입니다.", tone: "teal" },
  { id: "mea", name: "MEA", nameKr: "막전극접합체", role: "bonded assembly", roleKr: "접합 조립체", metric: "37%", qualifier: "cost reduction", qualifierKr: "원가 절감", image: "/images/technology/enhanced_mea.png", desc: "High current density with uniform large-area coating — more work per cell without adding material.", descKr: "대면적 균일 코팅으로 높은 전류밀도를 구현합니다. 재료를 늘리지 않고 셀당 성능을 높였습니다.", tone: "azure" },
  { id: "ptl", name: "Ti-PTL", nameKr: "티타늄 다공성 이송층", role: "titanium transport", roleKr: "티타늄 이송층", metric: "25%", qualifier: "cost reduction", qualifierKr: "원가 절감", image: "/images/technology/enhanced_ptl.png", desc: "Pore-size controlled titanium. Pore structure governs how water and gas move through the cell.", descKr: "기공 크기를 제어한 티타늄입니다. 기공 구조가 셀 내부의 물과 기체 이동을 결정합니다.", tone: "deep" },
  { id: "stack", name: "Stack", nameKr: "스택", role: "assembled unit", roleKr: "조립 완성품", metric: "99.99%", qualifier: "hydrogen purity", qualifierKr: "수소 순도", image: "/product-stack-20kw.png", desc: "Assembled and tested end to end before it ships, from 2.5 kW through 20 kW.", descKr: "2.5kW부터 20kW까지, 출하 전 전 공정을 조립·시험합니다.", tone: "dark" },
];

const systemSlides = [
  { power: "2.5 kW", src: "/product-stack-2-5kw.png", alt: "EST Solution 2.5kW PEM electrolysis system" },
  { power: "5 kW", src: "/product-stack-5kw.png", alt: "EST Solution 5kW PEM electrolysis system" },
  { power: "20 kW", src: "/product-stack-20kw.png", alt: "EST Solution 20kW PEM electrolysis system" },
];

const partnerLogos = [
  { src: "/partners/inst_01.png", name: "녹색에너지연구원" },
  { src: "/partners/inst_02.png", name: "산업통상자원부" },
  { src: "/partners/inst_03.png", name: "연구개발특구진흥재단" },
  { src: "/partners/inst_04.png", name: "전남테크노파크" },
  { src: "/partners/inst_05.png", name: "전라남도" },
  { src: "/partners/inst_06.png", name: "한국가스공사" },
  { src: "/partners/inst_07.png", name: "한국가스안전공사" },
  { src: "/partners/inst_08.png", name: "한국과학기술연구원" },
  { src: "/partners/inst_09.png", name: "한국남부발전" },
  { src: "/partners/inst_10.png", name: "한국동서발전" },
  { src: "/partners/inst_11.png", name: "한국생산기술연구원" },
  { src: "/partners/inst_12.png", name: "한국에너지공단" },
  { src: "/partners/inst_13.png", name: "한국에너지기술연구원" },
  { src: "/partners/inst_14.png", name: "한국에너지기술평가원" },
  { src: "/partners/inst_15.png", name: "한국전력공사" },
  { src: "/partners/inst_16.png", name: "한국전력연구원" },
  { src: "/partners/inst_17.png", name: "한국화학연구원" },
  { src: "/partners/inst_18.png", name: "광주테크노파크" },
  { src: "/partners/inst_19.png", name: "과학기술정보통신부" },
  { src: "/partners/inst_20.png", name: "광주광역시" },
  { src: "/partners/uni_01.png", name: "전남대학교" },
  { src: "/partners/uni_02.png", name: "전북대학교" },
  { src: "/partners/uni_03.png", name: "한국에너지공과대학교" },
  { src: "/partners/uni_04.png", name: "광주과학기술원" },
  { src: "/partners/uni_05.png", name: "연세대학교" },
  { src: "/partners/uni_06.png", name: "카이스트" },
  { src: "/partners/uni_07.png", name: "서울대학교" },
  { src: "/partners/uni_08.png", name: "포항공과대학교" },
  { src: "/partners/uni_09.png", name: "강릉원주대학교" },
  { src: "/partners/uni_10.png", name: "한양대학교" },
];

const mapLocations = {
  hq: {
    lat: "35.2281557",
    lon: "126.8421662",
    bbox: "126.8371662,35.2231557,126.8471662,35.2331557",
  },
  rd: {
    lat: "34.974837113219",
    lon: "126.688945217552",
    bbox: "126.683945217552,34.969837113219,126.693945217552,34.979837113219",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState("EN");
  const [mapLocation, setMapLocation] = useState<"hq" | "rd">("hq");
  const [systemSlide, setSystemSlide] = useState(2);
  const [systemCarouselPaused, setSystemCarouselPaused] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);
  const [layerEngaged, setLayerEngaged] = useState(false);
  const bridgeRef = useRef<HTMLParagraphElement>(null);

  const korean = language === "KR";

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .stats-reveal"));
    const bridgeNode = bridgeRef.current;
    if (!targets.length && !bridgeNode) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isBridge = entry.target === bridgeNode;
        if (entry.isIntersecting && (!isBridge || entry.intersectionRatio >= 0.4)) {
          entry.target.classList.add(isBridge ? "is-revealed" : "is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: [0.15, 0.4] });
    targets.forEach((target) => observer.observe(target));
    if (bridgeNode) observer.observe(bridgeNode);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (systemCarouselPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setSystemSlide((current) => (current + 1) % systemSlides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [systemCarouselPaused]);

  const activeMap = mapLocations[mapLocation];
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(activeMap.bbox)}&layer=mapnik&marker=${encodeURIComponent(`${activeMap.lat},${activeMap.lon}`)}`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${activeMap.lat},${activeMap.lon}`)}`;

  return (
    <main>
      <SiteNavigation language={language} onLanguageChange={setLanguage} />

      <section className="hero" id="top">
        <div className="hero-background" aria-hidden="true">
          <img className="active" src={heroImage.src} alt="" />
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-count">16</span>
            <span className="hero-badge-copy">
              <strong>{korean ? "국가 R&D 과제 선정" : "National R&D programs"}</strong>
              <em>{korean ? "대한민국" : "Republic of Korea"}</em>
            </span>
          </div>
          <h1>{korean ? <>
            <span className="hero-title-line">이에스티솔루션은 그린수소 시스템을</span>
            <em className="hero-title-line">촉매부터 직접 만듭니다.</em>
          </> : <>
            <span className="hero-title-line">EST Solution builds green hydrogen</span>
            <span className="hero-title-line">systems</span>
            <em className="hero-title-line">from the catalyst up.</em>
          </>}</h1>
          <p>{korean ? <>
            <span className="hero-copy-line">촉매, 전해질막, MEA, 이송층, 스택, 그리고 완성 시스템까지.</span>
            <span className="hero-copy-line">이에스티솔루션은 수전해 시스템의 모든 층을 직접 개발하고 제조합니다.</span>
          </> : <>
            <span className="hero-copy-line">EST develops and manufactures every layer of the electrolyzer:</span>
            <span className="hero-copy-line">catalyst, membrane, MEA, transport layer, stack, and the finished system.</span>
            <span className="hero-copy-line">That is what lets us lower component cost, adapt hardware to your site, and support it directly.</span>
          </>}</p>
          <div className="hero-actions"><a className="button primary" href="#contact">{korean ? "문의하기" : "Get in touch"}</a><a className="button ghost" href="/technology#core-technology">{korean ? "기술 살펴보기" : "Explore our technology"}</a></div>
          <div className="hero-reassure" aria-label="What to expect">
            <span>{korean ? "영업일 기준 2일 이내 회신" : "Response within 2 business days"}</span>
            <span>{korean ? "해외 문의 환영" : "International inquiries welcome"}</span>
          </div>
        </div>
        <div className="hero-image-label"><span />{heroImage.caption}</div>
      </section>

      <section className="hero-stats" aria-label="EST Solution at a glance">
        <div className="hero-stats-inner stats-reveal">
          <div><strong>6</strong><span>{korean ? "직접 제조하는 핵심 층" : "core layers made in-house"}</span></div>
          <div><strong>13{korean ? "년" : " years"}</strong><span>{korean ? "수소 연구 경력" : "in hydrogen research"}</span></div>
          <div><strong>99.99%</strong><span>{korean ? "수소 순도" : "hydrogen purity"}</span></div>
          <div><strong>30+</strong><span>{korean ? "연구 협력 기관" : "research partners"}</span></div>
        </div>
      </section>

      <section className="bridge-beat" aria-label={korean ? "다음 섹션" : "Next section"}>
        <p className="bridge-question" ref={bridgeRef}>
          {(korean
            ? ["현장에", "실제로", "무엇을", "도입할", "수", "있을까요?"]
            : ["So", "what", "can", "you", "actually", "put", "on", "your", "site?"]
          ).map((word, i, arr) => (
            <span
              className={`bw${i >= arr.length - 3 ? " accent" : ""}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              key={`${word}-${i}`}
            >
              {word}
            </span>
          ))}
        </p>
        <div className="bridge-cue" aria-hidden="true">
          <span className="bridge-cue-line" />
          <IconChevronDown size={20} stroke={1.8} />
        </div>
      </section>

      <section className="systems-split" id="systems" aria-label="Electrolysis systems">
        <p className="systems-leadin">
          {korean
            ? "세 가지 용량, 모두 동일한 자체 제작 부품으로 만들어집니다."
            : "Three system sizes, all built from the same in-house components."}
        </p>
        <div className="section-index reveal" aria-hidden="true"><span>01</span><i /></div>
        <div className="systems-split-inner">
          <div
            className="systems-split-media reveal"
            role="region"
            aria-roledescription="carousel"
            aria-label={korean ? "수전해 시스템 크기" : "Electrolysis system sizes"}
            onMouseEnter={() => setSystemCarouselPaused(true)}
            onMouseLeave={() => setSystemCarouselPaused(false)}
            onFocusCapture={() => setSystemCarouselPaused(true)}
            onBlurCapture={() => setSystemCarouselPaused(false)}
          >
            <div className="systems-carousel-stage">
              {systemSlides.map((slide, index) => (
                <img
                  className={`systems-carousel-image${index === systemSlide ? " active" : ""}`}
                  src={slide.src}
                  alt={index === systemSlide ? slide.alt : ""}
                  aria-hidden={index !== systemSlide}
                  key={slide.src}
                />
              ))}
            </div>
            <span className="systems-split-tag" aria-live="polite">{systemSlides[systemSlide].power} {korean ? "시스템" : "SYSTEM"}</span>
            <div className="systems-carousel-dots" aria-label={korean ? "시스템 크기 선택" : "Choose system size"}>
              {systemSlides.map((slide, index) => (
                <button
                  className={index === systemSlide ? "active" : ""}
                  type="button"
                  onClick={() => setSystemSlide(index)}
                  aria-label={`${slide.power} ${korean ? "시스템 보기" : "system"}`}
                  aria-current={index === systemSlide ? "true" : undefined}
                  key={slide.power}
                />
              ))}
            </div>
          </div>
          <div className="systems-split-copy reveal reveal-d1">
            <div className="product-eyebrow"><span /> {korean ? "시스템" : "SYSTEMS"}</div>
            <h2>{korean ? <>세 가지 용량.<br />동일한 핵심 부품.</> : <>Three sizes. Same components.</>}</h2>
            <p className="systems-split-lead">{korean ? "2.5kW 장비와 20kW 장비는 동일한 촉매, 전해질막, 티타늄 분리판으로 제작됩니다." : "A 2.5 kW unit and a 20 kW unit are built from the same catalyst, membrane and titanium plates."}</p>
            <dl className="systems-spec-list">
              <div><dt>2.5 kW</dt><dd>{korean ? "실험실 및 파일럿 규모" : "Lab and pilot scale"}</dd></div>
              <div><dt>5 kW</dt><dd>{korean ? "실증 사이트" : "Demonstration sites"}</dd></div>
              <div><dt>20 kW</dt><dd>{korean ? "현장 배치" : "Field deployment"}</dd></div>
            </dl>
            <p className="systems-split-note">{korean ? "그 이상의 스택 용량은 요청 시 대응 가능합니다." : "Larger stack sizing available on request."}</p>
            <a className="systems-split-link" href="/products#products">{korean ? "전체 사양 보기" : "View full specifications"} <IconArrowRight size={15} stroke={1.8} aria-hidden="true" /></a>
          </div>
        </div>
        <p className="section-next reveal"><a href="#core-components">{korean ? "다음: 핵심 부품 살펴보기 →" : "Next: what those components are →"}</a></p>
      </section>

      <section className="product-section is-dark" id="core-components">
        <svg className="flowfield" viewBox="0 0 700 420" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M-20 60 H420 Q470 60 470 100 Q470 140 420 140 H-20" />
          <path d="M-20 92 H420 Q502 92 502 132 Q502 172 420 172 H-20" />
          <path d="M-20 124 H420 Q534 124 534 164 Q534 204 420 204 H-20" />
          <path d="M-20 156 H420 Q566 156 566 196 Q566 236 420 236 H-20" />
          <path d="M-20 188 H420 Q598 188 598 228 Q598 268 420 268 H-20" />
          <path d="M-20 220 H420 Q630 220 630 260 Q630 300 420 300 H-20" />
          <path d="M-20 252 H420 Q662 252 662 292 Q662 332 420 332 H-20" />
        </svg>
        <div className="product-tier component-tier">
          <div className="product-tier-heading reveal">
            <div className="product-eyebrow"><span /> {korean ? "내부 구조" : "WHAT’S INSIDE"}</div>
            <h2>{korean ? "모든 층을 직접 만듭니다." : "We make every layer ourselves."}</h2>
            <p>{korean ? "각 층을 선택하면 역할과 성과를 확인할 수 있습니다." : "Select a layer to see what it does."}</p>
          </div>

          <div className="layer-explorer reveal reveal-d1">
            <div className="layer-column">
              <div className={`layer-cue${layerEngaged ? " is-retired" : ""}`} aria-hidden="true">
                <span>{korean ? "층을 선택해 보세요" : "try selecting a layer"}</span>
                <svg viewBox="0 0 46 26" focusable="false"><path d="M3 5 Q26 4 34 18" fill="none" strokeWidth="2" strokeLinecap="round" /><path d="M34 18 l1 -10 M34 18 l-9 -1" fill="none" strokeWidth="2" strokeLinecap="round" /></svg>
              </div>

              <div className={`layer-stack${layerEngaged ? " is-engaged" : ""}`} role="tablist" aria-label={korean ? "핵심 구성 층" : "Core component layers"}>
                {stackLayers.map((layer, index) => (
                  <button
                    className={`layer-row tone-${layer.tone}${activeLayer === index ? " is-active" : ""}`}
                    key={layer.id}
                    type="button"
                    role="tab"
                    id={`layer-tab-${layer.id}`}
                    aria-selected={activeLayer === index}
                    aria-controls="layer-detail"
                    tabIndex={activeLayer === index ? 0 : -1}
                    onClick={() => { setActiveLayer(index); setLayerEngaged(true); }}
                    onKeyDown={(event) => {
                      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
                      event.preventDefault();
                      const next = event.key === "ArrowDown" ? (index + 1) % stackLayers.length : (index - 1 + stackLayers.length) % stackLayers.length;
                      setActiveLayer(next);
                      setLayerEngaged(true);
                      document.getElementById(`layer-tab-${stackLayers[next].id}`)?.focus();
                    }}
                  >
                    <span className="layer-row-name">{korean ? layer.nameKr : layer.name}</span>
                    <span className="layer-row-role">{korean ? layer.roleKr : layer.role}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="layer-detail" id="layer-detail" role="tabpanel" aria-live="polite" aria-labelledby={`layer-tab-${stackLayers[activeLayer].id}`}>
              <div className="layer-detail-photo"><img src={stackLayers[activeLayer].image} alt={korean ? stackLayers[activeLayer].nameKr : stackLayers[activeLayer].name} /></div>
              <div className="layer-detail-metric"><strong>{stackLayers[activeLayer].metric}</strong><span>{korean ? stackLayers[activeLayer].qualifierKr : stackLayers[activeLayer].qualifier}</span></div>
              <h3>{korean ? stackLayers[activeLayer].nameKr : stackLayers[activeLayer].name}</h3>
              <p>{korean ? stackLayers[activeLayer].descKr : stackLayers[activeLayer].desc}</p>
              <a className="layer-detail-link" href="/technology#core-technology">{korean ? "전체 기술 자료 보기" : "See the full breakdown"} <IconArrowRight size={15} stroke={1.8} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <p className="section-next reveal"><a href="#who-we-are">{korean ? "다음: 만드는 사람들 →" : "Next: who builds them →"}</a></p>
      </section>

      <section className="who-section" id="who-we-are">
        <div className="who-container">
          <div className="section-index reveal" aria-hidden="true"><span>03</span><i /></div>
          <div className="who-eyebrow"><span /> WHO WE ARE</div>
          <h2 className="who-headline">Founded in 2023, built on technology we own end to end</h2>

          <div className="who-lead">
            <figure className="ceo-profile">
              <div className="ceo-portrait"><img src="/est-solution-ceo.png" alt="EST Solution founder and CEO with hydrogen equipment" /></div>
              <figcaption><strong>CEO name</strong><span>Founder and CEO, EST Solution</span></figcaption>
            </figure>
            <blockquote className="ceo-quote">
              <IconQuote className="quote-mark" size={32} stroke={1.7} aria-hidden="true" />
              <p>“We put trust and value creation with our customers first. Through relentless in-house research, we’re building a green hydrogen energy society — and working toward true energy self-sufficiency for Korea’s hydrogen economy through core technology we own ourselves.”</p>
              <small>Adapted from the Korean mission statement; final English wording is pending client approval.</small>
            </blockquote>
          </div>

          <p className="who-description">EST Solution is based in Gwangju and Naju, South Korea. From catalyst to stack, every core component in our systems is designed and manufactured in-house — not licensed or imported.</p>

          <div className="who-stats" aria-label="Company statistics">
            <div><strong>3</strong><span>Years since founding</span></div>
            <div><strong>10+</strong><span>Programs selected</span></div>
            <div><strong>2</strong><span>Patents filed</span></div>
          </div>

          <div className="partner-evidence">
            <div className="partner-label">PARTNERED WITH</div>
            <div className="partner-logo-grid">
              {partnerLogos.map((partner) => <figure className="partner-logo" key={partner.src}><img src={partner.src} alt={`${partner.name} logo`} /><figcaption>{partner.name}</figcaption></figure>)}
            </div>
          </div>
          <p className="section-next reveal"><a href="#case-study">{korean ? "다음: 현장 검증 사례 →" : "Next: proof from the field →"}</a></p>
        </div>
      </section>

      <section className="case-section" id="case-study">
        <div className="case-container">
          <div className="section-index reveal" aria-hidden="true"><span>04</span><i /></div>
          <div className="case-eyebrow">TESTED AND VERIFIED</div>
          <h2>We took a self-contained hydrogen system into the field <span>and proved it works.</span></h2>

          <div className="tested-conditions" aria-label="Tested conditions">
            <article><h3>Outdoor</h3><p>Ran on-site, exposed to real weather and field conditions.</p></article>
            <article><h3>Indoor</h3><p>Stress-tested under controlled lab conditions.</p></article>
          </div>

          <p className="case-support">That capability turns wasted renewable power into usable backup energy for remote sites, on demand.</p>

          <div className="case-photos">
            <img src="/field-demonstration.jpg" alt="EST Solution outdoor hydrogen-system field demonstration" />
            <img src="/hydrogen-prototype.jpg" alt="EST Solution hydrogen system undergoing indoor testing" />
          </div>

          <div className="case-closing">
            <h3>Next, we’d like to prove it on your site.</h3>
            <a href="#contact">Request a quote <IconArrowRight size={16} stroke={1.8} aria-hidden="true" /></a>
          </div>
          <p className="section-next reveal"><a href="#contact">{korean ? "다음: 프로젝트 상담 →" : "Next: start a conversation →"}</a></p>
        </div>
      </section>

      <section className="contact-section-v2" id="contact">
        <div className="contact-container">
          <div className="contact-eyebrow"><span /> GET IN TOUCH</div>
          <h2>Let’s talk about your site, or your research</h2>
          <p className="contact-subhead">Whether you’re evaluating a system for deployment or exploring a research partnership, tell us a bit about what you need.</p>

          <div className="contact-card">
            {/* FormSubmit is the active delivery backend; confirm this provider with EST Solution before final production handoff. */}
            <form className="contact-form" action="https://formsubmit.co/estsolution1@naver.com" method="POST">
              <input type="hidden" name="_subject" value="New EST Solution website inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="contact-form-grid">
                <label><span>Company or institution</span><input required name="company_or_institution" type="text" autoComplete="organization" /></label>
                <label><span>Contact person</span><input required name="contact_person" type="text" autoComplete="name" /></label>
                <label><span>Email</span><input required name="email" type="email" autoComplete="email" /></label>
                <label><span>Phone, optional</span><input name="phone" type="tel" autoComplete="tel" /></label>
                <label className="full"><span>What are you reaching out about?</span><select required name="inquiry_type" defaultValue=""><option value="" disabled>Select one</option><option>Request a quote</option><option>Product inquiry</option><option>Research collaboration</option><option>University partnership</option><option>Investment or media</option><option>Other</option></select></label>
                <label className="full"><span>Message</span><textarea required name="message" rows={4} /></label>
              </div>
              <button className="contact-submit" type="submit">Send inquiry</button>
            </form>

            <aside className="contact-panel" aria-label="EST Solution locations and contact details">
              <div className="location-list">
                <article><span className="location-icon"><IconBuilding size={17} stroke={1.8} aria-hidden="true" /></span><div><small>HEADQUARTERS · GWANGJU</small><p>123 Cheomdan-gwagi-ro, Buk-gu, Gwangju, South Korea — inside GIST</p></div></article>
                <article><span className="location-icon"><IconFlask2 size={17} stroke={1.8} aria-hidden="true" /></span><div><small>R&amp;D CENTER · NAJU</small><p>32-18 Hyeoksinsandan 3-gil, Naju-si, Jeollanam-do, South Korea</p></div></article>
              </div>

              <div className="contact-chips"><a href="tel:+82629720823"><IconPhone size={15} stroke={1.8} aria-hidden="true" />062-972-0823</a><a href="mailto:estsolution1@naver.com"><IconMail size={15} stroke={1.8} aria-hidden="true" />estsolution1@naver.com</a></div>

              <div className="map-tabs" aria-label="Choose map location"><button className={mapLocation === "hq" ? "active" : ""} type="button" onClick={() => setMapLocation("hq")} aria-pressed={mapLocation === "hq"}>Headquarters</button><button className={mapLocation === "rd" ? "active" : ""} type="button" onClick={() => setMapLocation("rd")} aria-pressed={mapLocation === "rd"}>R&amp;D center</button></div>
              <div className="contact-map"><iframe key={mapLocation} title={mapLocation === "hq" ? "EST Solution headquarters map" : "EST Solution R&D center map"} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
              <a className="contact-map-link" href={externalMapUrl} target="_blank" rel="noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a>
            </aside>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src="/est-solution-logo-transparent.png" alt="EST Solution" width={2103} height={748} /></a>
        <p>Core technology for a cleaner, more independent energy future.</p>
        <div className="footer-links"><a href="/technology#why-green-hydrogen">Why green hydrogen</a><a href="/products#products">Products</a><a href="#case-study">Case study</a><a href="#who-we-are">Company</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 EST Solution Co., Ltd. Concept redesign.</span><span>Gwangju · Naju · Republic of Korea</span></div>
      </footer>
    </main>
  );
}
