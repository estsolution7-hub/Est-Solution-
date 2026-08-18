"use client";

import type { ReactNode } from "react";
import { PageSubNavigation, SiteNavigation, type SubNavItem } from "./site-navigation";
import { SiteFooter } from "./site-footer";
import { useLanguage } from "./use-language";

export function DetailShell({ eyebrow, title, intro, children, subNav = [], hero, closingCta }: { eyebrow: string; title: string; intro: string; children: ReactNode; subNav?: SubNavItem[]; hero?: ReactNode; closingCta?: ReactNode }) {
  // Shared by Technology, Products and Company — translating here covers all three.
  const [, , korean] = useLanguage();

  return <main className="detail-page page-texture">
    <SiteNavigation subNav={hero ? [] : subNav} />
    {hero ?? <section className="detail-hero">
      <div className="eyebrow light"><span /> {eyebrow}</div>
      <h1>{title}</h1><p>{intro}</p>
    </section>}
    {hero && subNav.length > 0 && <PageSubNavigation subNav={subNav} />}
    {children}
    {closingCta ?? <section className="detail-cta">
      <div className="detail-cta-copy">
        <p className="detail-cta-kicker">{korean ? "담당팀에 문의하기" : "Talk to the team"}</p>
        <h2>{korean
          ? <>도입하려는 현장을<br /><span>작동하는 시스템으로 만들어 드립니다.</span></>
          : <>Let’s turn your application<br /><span>into a working system.</span></>}</h2>
        <p>{korean
          ? "가동 조건과 설치 현장, 필요한 수소량을 알려주시면 설치 가능한 PEM 구성으로 정리해 드립니다."
          : "Share the duty cycle, site, and hydrogen need. We’ll map it to a PEM setup you can install."}</p>
      </div>
      <a className="detail-cta-button" href="/contact">{korean ? "문의하기" : "Get in touch"}</a>
    </section>}
    <SiteFooter />
  </main>;
}
