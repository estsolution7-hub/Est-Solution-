"use client";

import { useLanguage } from "./use-language";

export function SiteFooter({ home = false }: { home?: boolean }) {
  const [, , korean] = useLanguage();
  return (
    <footer>
      <a className="brand footer-brand" href={home ? "#top" : "/"}>
        <img src="/est-solution-logo-transparent.webp" alt="EST Solution" width={220} height={78} decoding="async" loading="lazy" />
      </a>
      <p>{korean ? "더 깨끗하고 자립적인 에너지의 미래를 위한 핵심 기술." : "Core technology for a cleaner, more independent energy future."}</p>
      <div className="footer-links">
        <a href="/technology#why-green-hydrogen">{korean ? "그린수소란" : "Why green hydrogen"}</a>
        <a href="/products#products">{korean ? "제품" : "Products"}</a>
        <a href="/company#case-study">{korean ? "실증 사례" : "Case study"}</a>
        <a href="/company">{korean ? "회사 소개" : "Company"}</a>
        <a href="/#contact">{korean ? "문의" : "Contact"}</a>
        <a href="/privacy">{korean ? "개인정보 처리방침" : "Privacy"}</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 EST Solution Co., Ltd.</span>
        <span>{korean ? "광주 · 나주 · 대한민국" : "Gwangju · Naju · Republic of Korea"}</span>
      </div>
    </footer>
  );
}
