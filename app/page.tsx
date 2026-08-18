"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowRight, IconAtom, IconBoxMultiple, IconBuilding, IconChevronDown, IconFlask2, IconGrain, IconLayersIntersect, IconMail, IconPhone, IconPlayerPlayFilled, IconQuote, IconStack2 } from "./icons";
import { SiteNavigation } from "./site-navigation";
import { SiteFooter } from "./site-footer";
import { useLanguage } from "./use-language";

const heroImage = { src: "/hydrogen-renewables-hero.webp", label: "Hydrogen transport with solar panels and wind turbines", caption: "GREEN HYDROGEN ENERGY" };

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
  { id: "catalyst", name: "Catalyst", nameKr: "촉매", role: "anode + cathode", roleKr: "양극 · 음극", metric: "30%+", qualifier: "cost reduction", qualifierKr: "원가 절감", image: "/images/technology/enhanced_catalyst.webp", desc: "Low-noble-metal formulation with longer operating life. Precious-metal loading is the largest lever on PEM cost.", descKr: "귀금속 사용을 최소화한 조성으로 수명을 늘렸습니다. 귀금속 담지량은 PEM 원가를 좌우하는 가장 큰 요소입니다.", tone: "green" },
  { id: "membrane", name: "Electrolyte membrane", nameKr: "전해질막", role: "proton exchange", roleKr: "양성자 교환", metric: "2×", qualifier: "durability vs Nafion", qualifierKr: "내구성 (Nafion 대비)", image: "/images/technology/enhanced_cell.webp", desc: "Hydrocarbon-based, with crossover around a quarter of conventional PFSA — a thinner membrane at double the durability.", descKr: "탄화수소 기반으로 기존 PFSA 대비 크로스오버가 약 1/4 수준입니다. 더 얇으면서 내구성은 두 배입니다.", tone: "teal" },
  { id: "mea", name: "MEA", nameKr: "막전극접합체", role: "bonded assembly", roleKr: "접합 조립체", metric: "37%", qualifier: "cost reduction", qualifierKr: "원가 절감", image: "/images/technology/enhanced_mea.webp", desc: "High current density with uniform large-area coating — more work per cell without adding material.", descKr: "대면적 균일 코팅으로 높은 전류밀도를 구현합니다. 재료를 늘리지 않고 셀당 성능을 높였습니다.", tone: "azure" },
  { id: "ptl", name: "Ti-PTL", nameKr: "티타늄 다공성 이송층", role: "titanium transport", roleKr: "티타늄 이송층", metric: "25%", qualifier: "cost reduction", qualifierKr: "원가 절감", image: "/images/technology/enhanced_ptl.webp", desc: "Pore-size controlled titanium. Pore structure governs how water and gas move through the cell.", descKr: "기공 크기를 제어한 티타늄입니다. 기공 구조가 셀 내부의 물과 기체 이동을 결정합니다.", tone: "deep" },
  { id: "stack", name: "Stack", nameKr: "스택", role: "assembled unit", roleKr: "조립 완성품", metric: "99.99%", qualifier: "hydrogen purity", qualifierKr: "수소 순도", image: "/product-stack-20kw.webp", desc: "Assembled and tested end to end before it ships, from 2.5 kW through 20 kW.", descKr: "2.5kW부터 20kW까지, 출하 전 전 공정을 조립·시험합니다.", tone: "dark" },
];

const systemSlides = [
  { power: "2.5 kW", src: "/product-stack-2-5kw.webp", alt: "EST Solution 2.5kW PEM electrolysis system" },
  { power: "5 kW", src: "/product-stack-5kw.webp", alt: "EST Solution 5kW PEM electrolysis system" },
  { power: "20 kW", src: "/product-stack-20kw.webp", alt: "EST Solution 20kW PEM electrolysis system" },
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

// Gwangju citizen-centred demonstration, filmed at GIST. Client-supplied YouTube Shorts.
const demoFilms = [
  { id: "4nRubwXAA8s", title: "Green hydrogen bicycle experience", titleKr: "그린수소 자전거 체험", poster: "/field-demonstration.webp" },
  { id: "g0kqu7zHGAI", title: "Citizen-centred demonstration", titleKr: "시민체감형 실증", poster: "/hydrogen-prototype.webp" },
];

const applications = [
  { id: "mobile", src: "/images/products/neohyd-station.webp", name: "Mobile deployment", nameKr: "이동형 배치", desc: "NEOHYD produces and stores hydrogen on site, then moves to wherever it is needed next.", descKr: "NEOHYD는 현장에서 직접 수소를 생산·저장하고, 필요한 곳으로 이동합니다.", feature: true },
  { id: "remote", src: "/images/products/application-remote-sites.webp", name: "Off-grid sites", nameKr: "오프그리드 현장", desc: "Store surplus solar and wind as hydrogen.", descKr: "잉여 태양광·풍력을 수소로 저장합니다." },
  { id: "backup", src: "/images/products/application-data-centers.webp", name: "Backup power", nameKr: "비상 전원", desc: "Clean standby for critical loads.", descKr: "핵심 설비를 위한 친환경 예비 전원입니다." },
  { id: "mobility", src: "/images/products/application-mobility.webp", name: "Fleets and depots", nameKr: "차량 기지 · 물류", desc: "Refuel where vehicles already park.", descKr: "차량이 주차하는 곳에서 바로 충전합니다." },
];

const institutionLogos = partnerLogos.filter((logo) => logo.src.includes("/inst_"));
const universityLogos = partnerLogos.filter((logo) => logo.src.includes("/uni_"));

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
  const [language, setLanguage] = useLanguage();
  const [mapLocation, setMapLocation] = useState<"hq" | "rd">("hq");
  const [systemSlide, setSystemSlide] = useState(2);
  const [systemCarouselPaused, setSystemCarouselPaused] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);
  const [layerEngaged, setLayerEngaged] = useState(false);
  const [playingFilm, setPlayingFilm] = useState<string | null>(null);
  const [inquirySent, setInquirySent] = useState(false);
  const bridgeRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const korean = language === "KR";

  // `lang` is handled by useLanguage; the title is per-page.
  useEffect(() => {
    document.title = korean
      ? "이에스티솔루션 | 그린수소 시스템"
      : "EST Solution | Green Hydrogen Systems";
  }, [korean]);

  useEffect(() => {
    setInquirySent(new URLSearchParams(window.location.search).get("sent") === "1");
  }, []);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .stats-reveal, .reveal-children"));
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
    }, { rootMargin: "80px 0px 80px 0px", threshold: [0, 0.15, 0.4] });
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

  useEffect(() => {
    const upcoming = systemSlides[(systemSlide + 1) % systemSlides.length];
    const preload = new Image();
    preload.src = upcoming.src;
  }, [systemSlide]);

  const activeMap = mapLocations[mapLocation];
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(activeMap.bbox)}&layer=mapnik&marker=${encodeURIComponent(`${activeMap.lat},${activeMap.lon}`)}`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${activeMap.lat},${activeMap.lon}`)}`;

  return (
    <main>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <SiteNavigation />

      <section className="hero" id="top">
        <div className="hero-background" aria-hidden="true">
          <img className="active" src={heroImage.src} alt={heroImage.caption} fetchPriority="high" decoding="async" />
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
            <span className="hero-title-line">이에스티솔루션은</span>
            <span className="hero-title-line">그린수소 시스템을</span>
            <em className="hero-title-line">촉매부터 직접 만듭니다.</em>
          </> : <>
            <span className="hero-title-line">EST Solution builds green hydrogen</span>
            <span className="hero-title-line">systems</span>
            <em className="hero-title-line">from the catalyst up.</em>
          </>}</h1>
          <p>{korean ? <>
            <span className="hero-copy-line">촉매, 전해질막, MEA, 이송층, 스택 — 그리고 완성 시스템까지.</span>
            <span className="hero-copy-line">이에스티솔루션은 수전해 시스템의 모든 층을 직접 개발하고 제조합니다.</span>
          </> : <>
            <span className="hero-copy-line">EST develops and manufactures every layer of the electrolyzer —</span>
            <span className="hero-copy-line">catalyst, membrane, MEA, transport layer and stack — and the finished system.</span>
            <span className="hero-copy-line">That is what lets us lower component cost, adapt hardware to your site, and support it directly.</span>
          </>}</p>
          <div className="hero-actions"><a className="button primary" href="#contact">{korean ? "기술 상담 요청" : "Request a technical consultation"}</a><a className="button ghost" href="/technology#core-technology">{korean ? "기술 살펴보기" : "Explore our technology"}</a></div>
          <div className="hero-reassure" aria-label="What to expect">
            <span>{korean ? "영업일 기준 2일 이내 회신" : "Response within 2 business days"}</span>
            <span>{korean ? "해외 문의 환영" : "International inquiries welcome"}</span>
          </div>
        </div>
        <div className="hero-image-label"><span />{heroImage.caption}</div>
      </section>

      <section className="hero-stats" aria-label="EST Solution at a glance">
        <div className="hero-stats-inner stats-reveal">
          <div><strong>5</strong><span>{korean ? "직접 제조하는 핵심 층" : "core layers made in-house"}</span></div>
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
              <img
                className="systems-carousel-image active"
                src={systemSlides[systemSlide].src}
                alt={systemSlides[systemSlide].alt}
                decoding="async"
                loading="lazy"
                key={systemSlides[systemSlide].src}
              />
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
      </section>

      <div className="seam" aria-hidden="true">
        <div className="seam-top" />
        <div className="seam-bottom" />
        <svg className="seam-lines seam-lines-light" viewBox="0 0 1200 200" preserveAspectRatio="none" focusable="false">
          <path d="M-20 30 H560 Q660 30 660 80 Q660 130 560 130 H-20" />
          <path d="M-20 62 H560 Q712 62 712 112 Q712 162 560 162 H-20" />
          <path d="M-20 94 H560 Q764 94 764 144 Q764 194 560 194 H-20" />
          <path d="M-20 126 H560 Q816 126 816 176 Q816 226 560 226 H-20" />
        </svg>
        <svg className="seam-lines seam-lines-dark" viewBox="0 0 1200 200" preserveAspectRatio="none" focusable="false">
          <path d="M-20 30 H560 Q660 30 660 80 Q660 130 560 130 H-20" />
          <path d="M-20 62 H560 Q712 62 712 112 Q712 162 560 162 H-20" />
          <path d="M-20 94 H560 Q764 94 764 144 Q764 194 560 194 H-20" />
          <path d="M-20 126 H560 Q816 126 816 176 Q816 226 560 226 H-20" />
        </svg>
      </div>

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
            <h2>
              {korean ? "모든 " : "We make every "}
              <span className="ink-mark">
                {korean ? "층" : "layer"}
                <svg className="ink-stroke" viewBox="0 0 90 12" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M2 8 Q30 2 88 6" fill="none" strokeWidth="3" strokeLinecap="round" /></svg>
              </span>
              {korean ? "을 직접 만듭니다." : " ourselves."}
            </h2>
            <div className={`layer-cue${layerEngaged ? " is-retired" : ""}`}>
              <span>{korean ? "층을 선택하면 역할을 확인할 수 있습니다" : "Select a layer to see what it does"}</span>
              <svg viewBox="0 0 46 26" aria-hidden="true" focusable="false"><path d="M3 5 Q26 4 34 18" fill="none" strokeWidth="2" strokeLinecap="round" /><path d="M34 18 l1 -10 M34 18 l-9 -1" fill="none" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
          </div>

          <div className="layer-explorer reveal reveal-d1">
            <div className="layer-column">
              <div className={`layer-stack reveal-children${layerEngaged ? " is-engaged" : ""}`} role="tablist" aria-label={korean ? "핵심 구성 층" : "Core component layers"}>
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
              <div className="layer-detail-photo"><img src={stackLayers[activeLayer].image} alt={korean ? stackLayers[activeLayer].nameKr : stackLayers[activeLayer].name} loading="lazy" decoding="async" width={900} height={675} /></div>
              <div className="layer-detail-metric"><strong>{stackLayers[activeLayer].metric}</strong><span>{korean ? stackLayers[activeLayer].qualifierKr : stackLayers[activeLayer].qualifier}</span></div>
              <h3>{korean ? stackLayers[activeLayer].nameKr : stackLayers[activeLayer].name}</h3>
              <p>{korean ? stackLayers[activeLayer].descKr : stackLayers[activeLayer].desc}</p>
              <a className="layer-detail-link" href="/technology#core-technology">{korean ? "전체 기술 자료 보기" : "See the full breakdown"} <IconArrowRight size={15} stroke={1.8} aria-hidden="true" /></a>
            </div>
          </div>
        </div>

      </section>

      <section className="who-section" id="who-we-are">
        <div className="who-container">
          <div className="proof-head reveal">
            <h2>{korean ? <>대한민국 수소 연구 생태계가<br /><span className="ink-mark">뒷받침</span>합니다.</> : <>Backed by Korea&rsquo;s hydrogen <span className="ink-mark">research programme<svg className="ink-stroke" viewBox="0 0 90 12" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M2 8 Q30 2 88 6" fill="none" strokeWidth="3" strokeLinecap="round" /></svg></span>.</>}</h2>
            <p>{korean ? <>핵심 기술이 <b>국가 R&D 과제</b>에 선정되었으며, 국내 <b>에너지 연구기관 및 대학</b>과 함께 개발하고 있습니다.</> : <>Our core technology has been selected for <b>national R&D programmes</b> and developed alongside the country’s <b>energy institutes and universities</b>.</>}</p>
          </div>

          <div className="proof-counts reveal-children">
            <div><strong>16</strong><span>{korean ? "국가 · 지역 R&D 과제 (2023년 이후)" : "national and regional R&D programmes since 2023"}</span></div>
            <div><strong>30+</strong><span>{korean ? "연구기관 및 대학" : "institutes and universities"}</span></div>
            <div><strong>5</strong><span>{korean ? "특허 · 상표 출원 및 등록" : "patents and trademarks filed"}</span></div>
          </div>

          <div className="proof-people reveal">
            <h3 className="proof-people-label">
              {korean ? "이 기술을 " : "The people "}
              <span className="ink-mark">
                {korean ? "만드는 사람들" : "behind it"}
                <svg className="ink-stroke" viewBox="0 0 90 12" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M2 8 Q30 2 88 6" fill="none" strokeWidth="3" strokeLinecap="round" /></svg>
              </span>
            </h3>
            <div className="proof-people-row">
              <figure>
                <img src="/kim-dongho-portrait.webp" alt={korean ? "김동호 대표" : "Kim Dong-ho, CEO"} loading="lazy" decoding="async" />
                <figcaption>
                  <strong>{korean ? "김동호" : "Kim Dong-ho"}</strong>
                  <span>{korean ? "대표이사 · 에너지자원공학 박사" : "CEO · Ph.D., Energy Resources Engineering"}</span>
                  <small>{korean ? "광주 수소산업 기획위원 · 한국수소안전협회 이사" : "Gwangju Hydrogen Planning Committee · Director, Korea Hydrogen Safety Association"}</small>
                </figcaption>
              </figure>
              <figure>
                <img src="/park-seojin-portrait.webp" alt={korean ? "박서진 책임연구원" : "Park Seo-jin, senior researcher"} loading="lazy" decoding="async" />
                <figcaption>
                  <strong>{korean ? "박서진" : "Park Seo-jin"}</strong>
                  <span>{korean ? "책임연구원 · 신소재공학" : "Senior researcher · New material engineering"}</span>
                  <small>{korean ? "모든 스택의 핵심인 MEA 제조 공정 총괄" : "Runs MEA production, the process at the core of every EST stack"}</small>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="logo-marquee reveal" aria-label={korean ? "협력 기관" : "Partner institutions"}>
            <div className="logo-track">
              {[...institutionLogos, ...institutionLogos].map((partner, i) => (
                <figure className="logo-chip" key={`inst-${i}`} aria-hidden={i >= institutionLogos.length}>
                  <img src={partner.src} alt={i < institutionLogos.length ? partner.name : ""} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>

          <div className="logo-marquee" aria-label={korean ? "협력 대학" : "Partner universities"}>
            <div className="logo-track is-reverse">
              {[...universityLogos, ...universityLogos].map((partner, i) => (
                <figure className="logo-chip" key={`uni-${i}`} aria-hidden={i >= universityLogos.length}>
                  <img src={partner.src} alt={i < universityLogos.length ? partner.name : ""} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="seam seam-draw reveal" aria-hidden="true">
        <div className="seam-top" />
        <div className="seam-bottom" />
        <svg className="seam-lines seam-lines-light" viewBox="0 0 1200 200" preserveAspectRatio="none" focusable="false">
          <path d="M-20 44 H520 Q640 44 640 100 Q640 156 520 156 H-20" />
          <path d="M-20 76 H520 Q700 76 700 132 Q700 188 520 188 H-20" />
          <path d="M-20 108 H520 Q760 108 760 164 Q760 220 520 220 H-20" />
        </svg>
        <svg className="seam-lines seam-lines-dark" viewBox="0 0 1200 200" preserveAspectRatio="none" focusable="false">
          <path d="M-20 44 H520 Q640 44 640 100 Q640 156 520 156 H-20" />
          <path d="M-20 76 H520 Q700 76 700 132 Q700 188 520 188 H-20" />
          <path d="M-20 108 H520 Q760 108 760 164 Q760 220 520 220 H-20" />
        </svg>
        <span className="seam-mol seam-mol-1">H₂</span>
        <span className="seam-mol seam-mol-2">H₂</span>
        <span className="seam-mol seam-mol-3">H₂</span>
      </div>

      <section className="case-section is-dark" id="case-study">
        <div className="case-container">
          <div className="case-head reveal">
            <h2>{korean ? <>공공 캠퍼스에 설치하고,<br />시민이 직접 충전했습니다.</> : <>We put it on a public campus<br />and let people fuel up.</>}</h2>
            <p>{korean ? <>광주과학기술원(<b>GIST</b>) 캠퍼스에 설치한 자립형 그린수소 스테이션입니다. 현장에서 직접 생산·저장하고, 겨울철 옥외 환경에서 시민 모빌리티에 수소를 공급했습니다.</> : <>A self-contained green hydrogen station at <b>GIST, Gwangju</b> — producing on site, storing, and dispensing to citizen mobility users through winter outdoor conditions.</>}</p>
          </div>

          <figure className="case-hero reveal">
            <img src="/field-demonstration-wide.webp" alt="EST Solution green hydrogen station deployed at GIST campus in Gwangju, with e-bikes refuelling under a marquee" loading="lazy" decoding="async" />
            <figcaption>{korean ? "광주광역시 창업기업 제품 실증지원사업 · 시민체감형 실증" : "Gwangju citizen-centred demonstration · startup product demonstration support programme"}</figcaption>
          </figure>

          <div className="case-results reveal-children">
            <div>
              <strong>{korean ? "생산 · 저장 · 충전" : "Produce, store, dispense"}</strong>
              <span>{korean ? "한 대의 유닛이 현장에서 전 과정을 수행했습니다." : "One self-contained unit handled all three on site."}</span>
            </div>
            <div>
              <strong>{korean ? "겨울철 옥외 가동" : "Ran outdoors, in winter"}</strong>
              <span>{korean ? "개방된 캠퍼스에서 실제 겨울 기후를 그대로 견뎠습니다." : "Real winter weather on an open campus, through the full demonstration."}</span>
            </div>
            <div>
              <strong>{korean ? "일반 시민이 직접 사용" : "Used by the public"}</strong>
              <span>{korean ? "시민이 직접 자전거를 충전하고 이용했습니다." : "Members of the public fuelled and rode the bicycles themselves."}</span>
            </div>
            <div>
              <strong>{korean ? "지자체 실증 확인" : "Verified by the city"}</strong>
              <span>{korean ? "광주광역시 실증 확인서를 발급받았습니다." : "Gwangju Metropolitan City issued a demonstration confirmation."}</span>
            </div>
          </div>

          <div className="case-films reveal">
            <div className="case-film-row reveal-children">
              {demoFilms.map((film) => (
                <div className="case-film" key={film.id}>
                  {playingFilm === film.id ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0`}
                      title={korean ? film.titleKr : film.title}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button type="button" onClick={() => setPlayingFilm(film.id)} aria-label={`${korean ? "영상 재생" : "Play video"}: ${korean ? film.titleKr : film.title}`}>
                      <img src={film.poster} alt="" loading="lazy" decoding="async" />
                      <span className="case-film-play"><IconPlayerPlayFilled size={18} /></span>
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="case-films-meta">
              <p className="case-films-label">{korean ? "실증 영상" : "From the demonstration"}</p>
              <p className="case-films-desc">{korean ? "시민이 그린수소로 충전한 자전거를 직접 이용했습니다." : "Citizens rode bicycles refuelled with hydrogen produced on site."}</p>
            </div>
          </div>

          <div className="case-closing">
            <h3>{korean ? "다음은 고객사 현장에서 증명하겠습니다." : "Next, we’d like to prove it on your site."}</h3>
            <a href="#contact">{korean ? "견적 요청" : "Request a quote"} <IconArrowRight size={16} stroke={1.8} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="apps-section" id="applications">
        <div className="apps-container">

          <div className="apps-head reveal">
            <h2>
              {korean ? "필요한 곳에서 " : "Make your own fuel, where you "}
              <span className="ink-mark">
                {korean ? "직접 생산" : "need it"}
                <svg className="ink-stroke" viewBox="0 0 90 12" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M2 8 Q30 2 88 6" fill="none" strokeWidth="3" strokeLinecap="round" /></svg>
              </span>
              {korean ? "합니다." : "."}
            </h2>
            <p>{korean ? "모든 시스템은 이미 보유한 물과 전기로 작동합니다. 배송 일정도, 연료 계약도, 전력망 밖에서 끊기는 공급망도 필요하지 않습니다." : "Every system runs on water and electricity you already have. No delivery schedule, no fuel contract, no dependence on a supply chain that stops at the edge of the grid."}</p>
          </div>

          <div className="apps-mosaic reveal reveal-d1">
            <figure className="app-tile is-feature">
              <img src={applications[0].src} alt={korean ? applications[0].nameKr : applications[0].name} loading="lazy" decoding="async" />
              <figcaption>
                <h3>{korean ? applications[0].nameKr : applications[0].name}</h3>
                <p>{korean ? applications[0].descKr : applications[0].desc}</p>
              </figcaption>
            </figure>

            <div className="apps-mosaic-side reveal-children">
              {applications.slice(1).map((app) => (
                <figure className="app-tile" key={app.id}>
                  <img src={app.src} alt={korean ? app.nameKr : app.name} loading="lazy" decoding="async" />
                  <figcaption>
                    <h3>{korean ? app.nameKr : app.name}</h3>
                    <p>{korean ? app.descKr : app.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section" id="next-steps">
        <div className="closing-container">
          <div className="closing-head reveal">
            <h2>
              {korean ? "현장을 알려주시면, 시스템 " : "Tell us the site. We’ll size the "}
              <span className="ink-mark">
                {korean ? "용량" : "system"}
                <svg className="ink-stroke" viewBox="0 0 110 12" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M2 8 Q36 2 108 6" fill="none" strokeWidth="3" strokeLinecap="round" /></svg>
              </span>
              {korean ? "을 산정해 드립니다." : "."}
            </h2>
            <p>{korean ? "촉매부터 스택까지 직접 제조합니다. 국가 R&D 과제 16건이 뒷받침합니다. 공공 캠퍼스 옥외 환경에서 검증했습니다. 다음 단계는 계약이 아니라 대화입니다." : "Catalyst to stack, made in-house. Sixteen national programmes behind it. Proven outdoors on a public campus. The next step is a conversation, not a commitment."}</p>
          </div>

          <ol className="closing-steps reveal-children">
            <li>
              <span className="closing-step-num">01</span>
              <strong>{korean ? "현장을 알려주세요" : "You describe the site"}</strong>
              <span className="closing-step-desc">{korean ? "가용 전력, 설치 공간, 수소의 사용 목적." : "Power available, footprint, and what the hydrogen is for."}</span>
            </li>
            <li>
              <span className="closing-step-num">02</span>
              <strong>{korean ? "용량 산정과 견적" : "We size and quote"}</strong>
              <span className="closing-step-desc">{korean ? "2.5kW부터 20kW까지, 또는 부하에 맞춘 스택 사양." : "2.5 kW to 20 kW, or a stack specified around your load."}</span>
            </li>
            <li>
              <span className="closing-step-num">03</span>
              <strong>{korean ? "현장에서 검증합니다" : "We prove it on site"}</strong>
              <span className="closing-step-desc">{korean ? "GIST 실증과 같은 방식으로, 실증을 먼저 진행합니다." : "Demonstration first, the way we did at GIST."}</span>
            </li>
          </ol>

          <div className="closing-cta reveal reveal-d1">
            <a href="#contact">{korean ? "1단계부터 시작하기" : "Start with step one"} <IconArrowRight size={16} stroke={1.8} aria-hidden="true" /></a>
            <p>{korean ? "영업일 기준 2일 이내 회신 · 현장 실사 요청 가능" : "Response within 2 business days · Site assessment available on request"}</p>
          </div>
        </div>
      </section>

      <section className="contact-section-v2" id="contact">
        <div className="contact-container">
          <div className="contact-lead reveal">
            <span className="contact-lead-num" aria-hidden="true">01</span>
            <div>
              <h2>
                {korean ? "현장을 " : "You describe the "}
                <span className="ink-mark">
                  {korean ? "알려주세요" : "site"}
                  <svg className="ink-stroke" viewBox="0 0 90 12" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M2 8 Q30 2 88 6" fill="none" strokeWidth="3" strokeLinecap="round" /></svg>
                </span>
                {korean ? "" : "."}
              </h2>
              <p className="contact-subhead">{korean ? "도입 문의든 연구 협력이든, 몇 줄이면 충분합니다." : "Deployment enquiry or research partnership — a few lines is enough to start."}</p>
            </div>
          </div>

          <div className="contact-card reveal">
            {/* FormSubmit is the active delivery backend; confirm this provider with EST Solution before final production handoff. */}
            <form className="contact-form" action="https://formsubmit.co/estsolution1@naver.com" method="POST" onSubmit={(event) => {
              const next = event.currentTarget.querySelector<HTMLInputElement>("input[name='_next']");
              if (next) next.value = `${window.location.origin}/?sent=1#contact`;
            }}>
              <input type="hidden" name="_subject" value="New EST Solution website inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_next" value="" />
              {inquirySent && <p className="contact-sent" role="status">{korean ? "문의가 접수되었습니다. 영업일 기준 2일 이내에 회신드립니다." : "Your inquiry was sent. We will reply within 2 business days."}</p>}
              <div className="contact-form-grid">
                <label><span>{korean ? "회사 · 기관명" : "Company or institution"}</span><input required name="company_or_institution" type="text" autoComplete="organization" /></label>
                <label><span>{korean ? "담당자명" : "Contact person"}</span><input required name="contact_person" type="text" autoComplete="name" /></label>
                <label><span>{korean ? "이메일" : "Email"}</span><input required name="email" type="email" autoComplete="email" /></label>
                <label><span>{korean ? "연락처 (선택)" : "Phone, optional"}</span><input name="phone" type="tel" autoComplete="tel" /></label>
                <label className="full"><span>{korean ? "문의 유형" : "What are you reaching out about?"}</span><select required name="inquiry_type" defaultValue=""><option value="" disabled>{korean ? "선택해 주세요" : "Select one"}</option><option>{korean ? "견적 요청" : "Request a quote"}</option><option>{korean ? "제품 문의" : "Product inquiry"}</option><option>{korean ? "연구 협력" : "Research collaboration"}</option><option>{korean ? "대학 협력" : "University partnership"}</option><option>{korean ? "투자 · 미디어" : "Investment or media"}</option><option>{korean ? "기타" : "Other"}</option></select></label>
                <label className="full"><span>{korean ? "문의 내용" : "Message"}</span><textarea required name="message" rows={4} /></label>
              </div>
              <button className="contact-submit" type="submit">{korean ? "문의 보내기" : "Send inquiry"}</button>
            </form>

            <aside className="contact-panel" aria-label="EST Solution locations and contact details">
              <div className="location-list">
                <article><span className="location-icon"><IconBuilding size={17} stroke={1.8} aria-hidden="true" /></span><div><small>{korean ? "본사 · 광주" : "HEADQUARTERS · GWANGJU"}</small><p>{korean ? "광주광역시 북구 첨단과기로 123, 광주과학기술원(GIST) 내" : "123 Cheomdan-gwagi-ro, Buk-gu, Gwangju, South Korea — inside GIST"}</p></div></article>
                <article><span className="location-icon"><IconFlask2 size={17} stroke={1.8} aria-hidden="true" /></span><div><small>{korean ? "연구소 · 나주" : "R&D CENTER · NAJU"}</small><p>{korean ? "전라남도 나주시 혁신산단3길 32-18" : "32-18 Hyeoksinsandan 3-gil, Naju-si, Jeollanam-do, South Korea"}</p></div></article>
              </div>

              <div className="contact-chips"><a href="tel:+82629720823"><IconPhone size={15} stroke={1.8} aria-hidden="true" />062-972-0823</a><a href="mailto:estsolution1@naver.com"><IconMail size={15} stroke={1.8} aria-hidden="true" />estsolution1@naver.com</a></div>

              <div className="map-tabs" aria-label={korean ? "지도 위치 선택" : "Choose map location"}><button className={mapLocation === "hq" ? "active" : ""} type="button" onClick={() => setMapLocation("hq")} aria-pressed={mapLocation === "hq"}>{korean ? "본사" : "Headquarters"}</button><button className={mapLocation === "rd" ? "active" : ""} type="button" onClick={() => setMapLocation("rd")} aria-pressed={mapLocation === "rd"}>{korean ? "연구소" : "R&D center"}</button></div>
              <div className="contact-map"><iframe key={mapLocation} title={mapLocation === "hq" ? "EST Solution headquarters map" : "EST Solution R&D center map"} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
              <a className="contact-map-link" href={externalMapUrl} target="_blank" rel="noreferrer">{korean ? "구글 지도에서 열기" : "Open in Google Maps"} <span aria-hidden="true">↗</span></a>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter home />
    </main>
  );
}
