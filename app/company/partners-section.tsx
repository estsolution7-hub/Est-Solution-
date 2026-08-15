"use client";

import { useEffect, useRef } from "react";

const institutions = [
  ["inst_green_energy_inst.png", "Green Energy Institute"],
  ["inst_motie.png", "Ministry of Trade, Industry and Energy"],
  ["inst_innopolis.png", "Innopolis Foundation"],
  ["inst_jeonnam_tp.png", "Jeonnam Technopark"],
  ["inst_jeollanamdo.png", "Jeollanam-do Provincial Government"],
  ["inst_kogas.png", "Korea Gas Corporation"],
  ["inst_gas_safety.png", "Korea Gas Safety Corporation"],
  ["inst_kist.png", "Korea Institute of Science and Technology"],
  ["inst_kospo.png", "Korea Southern Power"],
  ["inst_ewp.png", "Korea East-West Power"],
  ["inst_kitech.png", "Korea Institute of Industrial Technology"],
  ["inst_energy_agency.png", "Korea Energy Agency"],
  ["inst_keri.png", "Korea Institute of Energy Research"],
  ["inst_ketep.png", "Korea Institute of Energy Technology Evaluation and Planning"],
  ["inst_kepco.png", "Korea Electric Power Corporation"],
  ["inst_kepri.png", "KEPCO Research Institute"],
  ["inst_krict.png", "Korea Research Institute of Chemical Technology"],
  ["inst_gwangju_tp.png", "Gwangju Technopark"],
  ["inst_msit.png", "Ministry of Science and ICT"],
  ["inst_gwangju_city.png", "Gwangju Metropolitan City"],
] as const;

const universities = [
  ["uni_chonnam_univ.png", "Chonnam National University"],
  ["uni_jeonbuk_univ.png", "Jeonbuk National University"],
  ["uni_kentech.png", "KENTECH, Korea Institute of Energy Technology"],
  ["uni_gist.png", "GIST, Gwangju Institute of Science and Technology"],
  ["uni_yonsei.png", "Yonsei University"],
  ["uni_kaist.png", "KAIST"],
  ["uni_snu.png", "Seoul National University"],
  ["uni_postech.png", "POSTECH"],
  ["uni_gangneung_wonju.png", "Gangneung-Wonju National University"],
  ["uni_hanyang.png", "Hanyang University"],
] as const;

const directions = ["left", "top", "bottom", "top", "right"] as const;

function LogoGrid({ logos }: { logos: ReadonlyArray<readonly [string, string]> }) {
  return <div className="company-logo-grid">
    {logos.map(([file, alt], index) => <div className="company-logo-tile pop-tile" data-dir={directions[index % directions.length]} key={file}>
      <img src={`/assets/company/partners/${file}`} alt={alt} />
    </div>)}
  </div>;
}

export function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tiles = sectionRef.current?.querySelectorAll<HTMLElement>(".pop-tile");
    if (!tiles?.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tiles.forEach((tile) => tile.classList.add("in-view"));
      return;
    }

    const timers = new Set<ReturnType<typeof setTimeout>>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        const timer = setTimeout(() => {
          entry.target.classList.add("in-view");
          timers.delete(timer);
        }, index * 40);
        timers.add(timer);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2 });

    tiles.forEach((tile) => observer.observe(tile));
    return () => {
      observer.disconnect();
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return <section className="detail-section nav-target company-partners" id="partners" ref={sectionRef}>
    <div className="company-team-label"><span /><p>Partners &amp; universities</p></div>
    <h2>Built alongside Korea&apos;s hydrogen research network</h2>
    <p className="company-partners-lead">30 government agencies, universities, and research institutes EST has worked with directly, drawn from its own partner registry.</p>
    <h3>Institutions</h3>
    <LogoGrid logos={institutions} />
    <h3>Universities</h3>
    <LogoGrid logos={universities} />
  </section>;
}
