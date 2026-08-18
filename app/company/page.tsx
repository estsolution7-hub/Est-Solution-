"use client";

import { useEffect } from "react";
import { DetailShell } from "../detail-shell";
import { PartnersSection } from "./partners-section";
import { useLanguage } from "../use-language";

const ipRows = [
  { category: "Application", categoryKr: "출원", title: "Method for manufacturing membrane electrode assembly, membrane electrode assembly, and water electrolysis apparatus", titleKr: "막전극접합체 제조 방법, 막전극접합체 및 수전해 장치", date: "26.02.26", number: "10-2026-0035753" },
  { category: "Registration", categoryKr: "등록", title: "Method for manufacturing low-cost hydrocarbon-based polymer electrolyte membrane", titleKr: "저가 탄화수소계 고분자 전해질막 제조 방법", date: "26.04.29", number: "10-2961064-00-00" },
  { category: "Application", categoryKr: "출원", title: "Water electrolysis system comprising surface-treated titanium porous transport layer (Ti-PTL)", titleKr: "표면처리 티타늄 다공성 이송층(Ti-PTL)을 포함하는 수전해 시스템", date: "24.10.28", number: "10-2024-0149069" },
  { category: "Trademark", categoryKr: "상표", title: "Registered trademark", titleKr: "등록 상표", date: "2025.09.26", number: "40-2025-0098856" },
  { category: "Trademark", categoryKr: "상표", title: "Trademark application", titleKr: "상표 출원", date: "2025.05.31", number: "40-2025-0098855" },
] as const;

const certificates = [
  { src: "/assets/company/cert1_venture_inspect.webp", alt: "Venture Enterprise Verification Certificate", altKr: "벤처기업확인서", caption: "Venture Enterprise Verification", captionKr: "벤처기업 확인" },
  { src: "/assets/company/cert2_demo_inspect.webp", alt: "Demonstration Confirmation Certificate", altKr: "실증특례 확인서", caption: "Demonstration Confirmation", captionKr: "실증 확인" },
  { src: "/assets/company/cert3_energy_inspect.webp", alt: "Energy Specialized Enterprise Certificate", altKr: "에너지전문기업 확인서", caption: "Energy Specialized Enterprise", captionKr: "에너지전문기업" },
  { src: "/assets/company/cert4_penguin_inspect.webp", alt: "First Penguin Company Selection Certificate", altKr: "퍼스트펭귄 기업 선정서", caption: '"First Penguin" Company Selection', captionKr: "퍼스트펭귄 기업 선정" },
] as const;

const milestones = [
  { org: "KEPCO", orgKr: "한국전력공사", date: "24.08 ~", body: "Commercialization of manufacturing technologies for high-efficiency, large-area MEAs and PEM water electrolysis stacks", bodyKr: "고효율 대면적 MEA 및 PEM 수전해 스택 제조 기술 상용화" },
  { org: "Ministry of SMEs and Startups (Entrusted: KENTECH)", orgKr: "중소벤처기업부 (위탁: 한국에너지공과대학교)", date: "24.08 ~", body: "Development of stack commercialization manufacturing technology for 2.5kW PEMWE with high efficiency through R&D of low-cost hydrocarbon electrolyte membrane", bodyKr: "저가 탄화수소 전해질막 연구로 2.5kW PEMWE 고효율 스택 상용화 제조 기술 개발" },
  { org: "Gwangju Technopark", orgKr: "광주테크노파크", note: "Best Enterprise Selection", noteKr: "우수기업 선정", date: "24.10 ~", body: "Mobility utilization using green hydrogen production technology and citizen-engaged demonstration commercialization for carbon neutrality", bodyKr: "그린수소 생산 기술을 활용한 모빌리티 실증과 탄소중립 시민 참여 상용화" },
  { org: "Ministry of SMEs and Startups (Co-operation: KITECH)", orgKr: "중소벤처기업부 (협력: 한국생산기술연구원)", date: "25.05 ~", body: "Development of Ti-PTL commercialization performance technology based on high-efficiency PEM water electrolysis tape casting process", bodyKr: "고효율 PEM 수전해 테이프 캐스팅 공정 기반 Ti-PTL 상용화 성능 기술 개발" },
  { org: "Ministry of Education", orgKr: "교육부", date: "25.08 ~", body: "MEA manufacturing technology utilizing high-durability, low-cost hydrocarbon-based electrolyte membranes and applied R&D on core technologies for small-scale PEM water electrolysis stacks", bodyKr: "고내구 저가 탄화수소 전해질막을 활용한 MEA 제조 및 소형 PEM 스택 핵심 기술 응용 연구" },
  { org: "Jeonnam Technopark", orgKr: "전남테크노파크", date: "25.09 ~", body: "Integrated BOP optimization manufacturing technology and low-cost commercialization for large-area stack-based PEM water electrolysis systems", bodyKr: "대면적 스택 기반 PEM 수전해 시스템의 BOP 최적화 제조 기술 및 저가 상용화" },
  { org: "KISED", orgKr: "창업진흥원", date: "26.04 ~", body: "Commercialization of modular PEM water electrolysis systems for distributed green hydrogen production", bodyKr: "분산형 그린수소 생산을 위한 모듈형 PEM 수전해 시스템 상용화" },
  { org: "Ministry of SMEs and Startups (Co-operation: KITECH)", orgKr: "중소벤처기업부 (협력: 한국생산기술연구원)", date: "26.04 ~", body: "Development of technology for commercialization of 100cm² class Ti-PTL based on tape casting process for PEM water electrolysis", bodyKr: "PEM 수전해용 테이프 캐스팅 공정 기반 100cm²급 Ti-PTL 상용화 기술 개발" },
  { org: "Ministry of Education", orgKr: "교육부", date: "26.06 ~", body: "Localization of pore structure-controlled Ti-PTL and development of commercialization technology for 25cm² scale PEM water electrolysis unit cells", bodyKr: "기공 구조 제어 Ti-PTL 국산화 및 25cm²급 PEM 수전해 단위셀 상용화 기술 개발" },
];

export default function CompanyPage() {
  const [, , korean] = useLanguage();

  useEffect(() => {
    document.title = korean ? "이에스티솔루션 | 회사 소개" : "EST Solution | Company";
  }, [korean]);

  return <DetailShell eyebrow="COMPANY" title="A focused team for practical green hydrogen." intro="EST Solution develops renewable-energy technology through local technical capability, connected R&D and deployable hydrogen systems." closingCta={<></>} hero={
    <section className="company-hero hero-gradient">
      <div className="company-bubbles" aria-hidden="true">
        <i className="bubble bubble-1" /><i className="bubble bubble-2" /><i className="bubble bubble-3" /><i className="bubble bubble-4" />
        <i className="bubble bubble-5" /><i className="bubble bubble-6" /><i className="bubble bubble-7" /><i className="bubble bubble-8" />
      </div>
      <div className="company-hero-copy">
        <p className="company-hero-eyebrow">{korean ? "회사" : "Company"}</p>
        <h1>{korean ? <>수소 13년.<br />회사로 3년.</> : <>13 years in hydrogen.<br />3 years as a company.</>}</h1>
        <p>{korean
          ? "이에스티솔루션은 촉매부터 완성 스택까지 그린수소 생산 시스템을 직접 설계합니다. 10년이 넘는 기술 경험 위에 세워진 회사입니다."
          : "EST Solution engineers green hydrogen production systems in-house, from catalyst to finished stack — built on technical experience developed over more than a decade."}</p>
        <div className="company-hero-actions"><a href="#team">{korean ? "팀 소개" : "Meet the team"}</a><a href="/contact">{korean ? "문의하기" : "Get in touch"}</a></div>
      </div>
    </section>
  }>
    <div className="detail-content nav-section-stack">
      <section className="detail-section nav-target company-team" id="team">
        <div className="company-team-label"><span /><p>{korean ? "팀" : "Team"}</p></div>
        <h2>{korean ? "이 기술을 만드는 사람들" : "The people building it"}</h2>
        <div className="company-team-grid">
          <article className="company-team-card">
            <header><img src="/kim_dongho_circle_final.webp" alt="Kim Dong-ho" loading="lazy" decoding="async" width={160} height={160} /><div><h3>{korean ? "김동호" : "Kim Dong-ho"}</h3><p>{korean ? "대표이사 · 에너지자원공학 박사" : "CEO · Ph.D., Energy Resources Engineering"}</p></div></header>
            <div className="company-team-stat"><strong>13</strong><span>{korean ? <>이에스티 창업 전<br />수소·연료전지 연구를<br />이끈 햇수</> : <>years leading hydrogen<br />and fuel cell research,<br />before founding EST</>}</span></div>
            <div className="company-team-divider" />
            <p className="company-team-bio">{korean
              ? <>이에스티솔루션을 창업하기 전, 김동호 대표는 수소·연료전지 연구소에서 <strong>부소장 겸 연구책임</strong>으로 10년 이상을 일했습니다. 그 경력은 지금 <strong>현장 신뢰</strong>로 이어집니다. 광주광역시 수소기획위원회 위원이며, 한국수소안전협회 이사로서 국가 가스 안전 기준을 검토합니다.</>
              : <>Before starting EST Solution, Kim Dong-ho spent over a decade as <strong>VP and Director of Research</strong> at hydrogen and fuel cell research institutes. That track record shows up as <strong>director-level trust</strong> today: he sits on the Gwangju Hydrogen Planning Committee and reviews national gas safety standards as Director of the Korea Hydrogen Safety Association.</>}</p>
          </article>
          <article className="company-team-card">
            <header><img src="/park_seojin_circle_v4.webp" alt="Park Seo-jin" loading="lazy" decoding="async" width={160} height={160} /><div><h3>{korean ? "박서진" : "Park Seo-jin"}</h3><p>{korean ? "선임연구원 · 신소재공학" : "Senior researcher · New material engineering"}</p></div></header>
            <div className="company-team-stat"><strong>6</strong><span>{korean ? <>수소 소재 공학에<br />집중해 온 햇수</> : <>years focused<br />specifically on hydrogen<br />materials engineering</>}</span></div>
            <div className="company-team-divider" />
            <p className="company-team-bio">{korean
              ? <>박서진 연구원은 <strong>모든 EST 스택의 핵심</strong>인 MEA 생산을 담당합니다. 촉매, 전해질막, 전극이 하나의 작동 단위가 되는 막전극접합 공정입니다. 스택에서 가장 어려운 단계이며, 그녀가 경력을 쌓아 온 바로 그 지점입니다.</>
              : <>Park Seo-jin owns the process at the <strong>core of every EST stack</strong>: she manages MEA production, the membrane electrode assembly step where catalyst, membrane, and electrode become a single working unit. It's the hardest part of the stack to get right, and the one she's spent her career on.</>}</p>
          </article>
        </div>
      </section>
      <section className="detail-section nav-target company-milestones" id="milestones">
        <div className="company-milestones-layout">
          <div className="company-milestones-intro">
            <div className="company-team-label"><span /><p>{korean ? "주요 실적" : "Milestones"}</p></div>
            <h2>{korean ? "3년, 국가·지역 R&D 과제 16건" : "Three years, 16 government-backed programs"}</h2>
            <p>{korean
              ? "2023년 8월 설립. 이후 스택 소재, 이동형 배치, BOP 엔지니어링에 걸친 국가·지역 R&D 과제 16건에 선정되었습니다. 아래 9건을 소개하며, 추가로 7건이 진행 중입니다."
              : "Founded August 2023. Since then, EST has been selected for 16 national and regional R&D programs spanning stack materials, mobile deployment, and BOP engineering. Nine are listed below; seven further projects are in progress."}</p>
          </div>
          <div className="company-milestones-stack">
            {milestones.map((item, index) => (
              <article className={`milestone-card milestone-0${index + 1}`} key={item.org + item.date}>
                <header>
                  <div>
                    <h3>{korean ? item.orgKr : item.org}{item.note ? <> <span>{korean ? item.noteKr : item.note}</span></> : null}</h3>
                    <small>{item.date}</small>
                  </div>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                </header>
                <p>{korean ? item.bodyKr : item.body}</p>
              </article>
            ))}
            <p className="company-milestones-footnote">{korean ? "위에 소개한 9건 외에 개발 과제 7건이 진행 중이며, 합치면 홈페이지에 표기한 16건입니다." : "Seven additional development projects are underway beyond the nine listed here, bringing the total to the 16 programmes cited on the homepage."}</p>
          </div>
        </div>
      </section>
      <section className="detail-section nav-target company-certifications" id="certifications">
        <div className="company-team-label"><span /><p>{korean ? "인증 · 지식재산" : "Certifications & IP"}</p></div>
        <h2>{korean ? "보호되고, 검증되고, 정부에 인정받은 기술" : "Protected, verified, and government-recognized"}</h2>
        <p className="company-certifications-lead">{korean
          ? "특허·상표 5건, 그리고 이에스티의 기술과 사업 지위를 확인하는 국가·지역 인증 4건."
          : "Five active patents and trademarks, and four certifications from Korean national and regional agencies confirming EST's technology and business status."}</p>

        <h3 className="company-certifications-subtitle">{korean ? "지식재산 현황" : "IP status"}</h3>
        <div className="company-ip-table-wrap">
          <table className="company-ip-table">
            <thead><tr><th>{korean ? "구분" : "Category"}</th><th>{korean ? "명칭" : "IP title"}</th><th>{korean ? "일자" : "Date"}</th><th>{korean ? "출원·등록번호" : "App. / reg. no."}</th></tr></thead>
            <tbody>{ipRows.map((row) => <tr key={row.number}>
              <td><span className={`ip-badge ip-${row.category.toLowerCase()}`}>{korean ? row.categoryKr : row.category}</span></td>
              <td>{korean ? row.titleKr : row.title}</td><td>{row.date}</td><td>{row.number}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <div className="company-ip-mobile" aria-label={korean ? "지식재산 현황" : "IP status"}>
          {ipRows.map((row) => <article key={row.number}>
            <span className={`ip-badge ip-${row.category.toLowerCase()}`}>{korean ? row.categoryKr : row.category}</span>
            <dl><div><dt>{korean ? "명칭" : "IP title"}</dt><dd>{korean ? row.titleKr : row.title}</dd></div><div><dt>{korean ? "일자" : "Date"}</dt><dd>{row.date}</dd></div><div><dt>{korean ? "출원·등록번호" : "App. / reg. no."}</dt><dd>{row.number}</dd></div></dl>
          </article>)}
        </div>

        <h3 className="company-certifications-subtitle">{korean ? "인증" : "Certifications"}</h3>
        <div className="company-certifications-grid">
          {certificates.map((certificate) => <figure key={certificate.src}><img src={certificate.src} alt={korean ? certificate.altKr : certificate.alt} loading="lazy" decoding="async" /><figcaption>{korean ? certificate.captionKr : certificate.caption}</figcaption></figure>)}
        </div>
        <p className="company-certifications-disclosure">{korean
          ? "네 건 모두 국가·지방자치단체가 발급한 실제 인증입니다. (2025 벤처기업확인, 광주광역시 실증 확인, 기후에너지환경부 에너지전문기업 지정, 신용보증기금 퍼스트펭귄 기업 선정)"
          : "All four certificates are genuine, issued by Korean national and regional government agencies (2025 Venture Enterprise Verification, Gwangju Metropolitan City Demonstration Confirmation, Ministry of Climate Energy and Environment Energy-Specialized Enterprise Designation, and KODIT \"First Penguin\" Company Selection)."}</p>
      </section>
      <PartnersSection />
      <section className="detail-section nav-target company-ceo" id="ceo-message">
        <div className="company-ceo-inner">
          <div className="company-ceo-label"><span /><p>{korean ? "대표 인사말" : "CEO message"}</p></div>
          <div className="company-ceo-grid">
            <blockquote>
              <span className="company-ceo-quote-mark" aria-hidden="true">&ldquo;</span>
              <p>{korean
                ? "고객과의 신뢰가 먼저입니다. 그다음이 따라옵니다. 멈추지 않는 자체 연구, 우리가 소유한 기술, 실제 에너지 자립 위에 세워진 그린수소 사회."
                : "Trust with our customers comes first. Everything else follows from it: relentless in-house research, technology we own outright, and a green hydrogen society built on real energy self-sufficiency."}</p>
              <small>{korean ? "대표이사 김동호 · 이에스티솔루션" : "Founder and CEO, Kim Dong-ho · EST Solution"}</small>
            </blockquote>
            <img src="/est-solution-ceo.webp" alt={korean ? "김동호 대표이사" : "Kim Dong-ho, CEO"} loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
      <section className="detail-section nav-target company-case-study" id="case-study">
        <div className="eyebrow"><span /> {korean ? "실증 사례" : "CASE STUDY"}</div>
        <h2>{korean ? <>실험실 밖에서도 <span>돌아갑니다.</span></> : <>Built to work <span>outside the lab.</span></>}</h2>
        <p className="company-case-lead">{korean
          ? "실내에서 제어된 조건으로 핵심 수소 생산·모빌리티 시스템을 검증한 뒤, 같은 장비를 옥외로 옮겨 현장 실증을 진행했습니다. 교체도, 시뮬레이션도 없습니다. 벤치를 통과한 시스템이 현장에서 돌아간 시스템입니다."
          : "EST validated the core hydrogen production and mobility system indoors under controlled conditions, then took the same hardware outside and ran it as a live field demonstration. No swaps, no simulations. The system that passed the bench is the system that ran in the field."}</p>
        <div className="company-case-grid">
          <figure>
            <img src="/field-demonstration.webp" alt={korean ? "옥외 현장 실증 설비" : "Outdoor field demonstration setup"} loading="lazy" decoding="async" />
            <figcaption>{korean ? "현장 실증 설비" : "Field demonstration setup"}</figcaption>
          </figure>
          <figure>
            <img src="/hydrogen-prototype.webp" alt={korean ? "수소 시스템 하드웨어 상세" : "Hydrogen system hardware detail"} loading="lazy" decoding="async" />
            <figcaption>{korean ? "시스템 내부, 실내 시험대" : "System internals, indoor test bench"}</figcaption>
          </figure>
        </div>
        <p className="company-case-note">{korean ? "핵심 성능 데이터는 제어된 실내 조건에서 기록했습니다." : "Core performance data recorded under controlled indoor conditions."}</p>
      </section>
      <section className="nav-target company-closing-cta" id="company-products">
        <div className="company-closing-copy">
          <div className="company-closing-pills" aria-label={korean ? "제품 요약" : "Product highlights"}>
            <span>{korean ? "즉시 설치 가능" : "Ready to install"}</span>
            <strong>{korean ? "2.5–20kW 범위" : "2.5–20 kW range"}</strong>
          </div>
          <h2>{korean ? "설치 가능한 소형 컨테이너형 수전해 장치." : "Compact, containerized electrolyzers, ready to install."}</h2>
          <p>{korean ? "그린수소 생산을 파일럿하고, 검증하고, 확장하는 PEM 수전해 시스템. 프로젝트를 함께 검토할 팀이 있습니다." : "PEM electrolysis systems to pilot, prove, and scale your green hydrogen production, and a team ready to talk through your project."}</p>
          <div className="company-closing-actions">
            <a className="primary" href="/products">{korean ? "제품 보기" : "View products"}</a>
            <a href="/contact">{korean ? "문의하기" : "Get in touch"}</a>
          </div>
        </div>
        <img className="company-closing-product" src="/images/technology/prod_electrolyzer_hq_clean.webp" alt="H2-241002A containerized PEM electrolysis system" loading="lazy" decoding="async" />
        <img className="company-closing-mark" src="/favicon.svg" alt="" aria-hidden="true" />
      </section>
    </div>
  </DetailShell>;
}
