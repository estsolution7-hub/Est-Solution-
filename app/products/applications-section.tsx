"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../use-language";

const applications = [
  {
    eyebrow: "Mobility", eyebrowKr: "모빌리티",
    title: "Local fueling", titleKr: "현장 충전",
    copy: "Support demonstration fleets where centralized hydrogen supply is limited.",
    copyKr: "중앙 수소 공급이 제한적인 곳에서 실증 차량을 지원합니다.",
    image: "/images/products/application-mobility.webp",
    alt: "EST field-style mobility use case — depot and transport",
    direction: "from-left",
  },
  {
    eyebrow: "Farms & remote sites", eyebrowKr: "농업 · 오지 현장",
    title: "Energy resilience", titleKr: "에너지 자립",
    copy: "Convert available renewable electricity into a storable fuel for remote operations.",
    copyKr: "이용 가능한 재생전력을 저장 가능한 연료로 바꿔 원격지 운영에 사용합니다.",
    image: "/images/products/application-remote-sites.webp",
    alt: "Renewable generation that can feed on-site electrolysis",
    direction: "from-right",
  },
  {
    eyebrow: "Data centers", eyebrowKr: "데이터센터",
    title: "Clean backup power", titleKr: "친환경 예비 전원",
    copy: "Provide a pathway from renewable generation to hydrogen-based backup and resilience.",
    copyKr: "재생에너지 발전에서 수소 기반 예비 전원까지 이어지는 경로를 제공합니다.",
    image: "/images/products/application-data-centers.webp",
    alt: "Critical-facility power context for hydrogen backup",
    direction: "from-left",
  },
];

export function ApplicationsSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const [, , korean] = useLanguage();

  useEffect(() => {
    const cards = stackRef.current?.querySelectorAll<HTMLElement>(".app-card");
    if (!cards?.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "80px 0px 80px 0px" });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="applications-section nav-target" id="applications">
      <div className="eyebrow reveal"><span /> {korean ? "적용 분야" : "APPLICATIONS"}</div>
      <h2 className="reveal">{korean ? "분산형 에너지가 중요한 현장을 위해 설계했습니다." : "Designed for places where distributed energy matters."}</h2>
      <div className="applications-stack" ref={stackRef}>
        {applications.map((application) => (
          <article className={`app-card ${application.direction}`} key={application.title}>
            <img src={application.image} alt={application.alt} loading="lazy" decoding="async" />
            <div className="app-card-scrim" />
            <div className="app-card-copy">
              <small>{korean ? application.eyebrowKr : application.eyebrow}</small>
              <h3>{korean ? application.titleKr : application.title}</h3>
              <p>{korean ? application.copyKr : application.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
