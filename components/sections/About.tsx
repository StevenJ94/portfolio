"use client";

import { sobreMi, ui } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="sobre" className="section s-about" data-reveal>
      <div>
        <div className="kicker" style={{ color: "#ff4d6d", textShadow: "0 0 16px rgba(197,0,60,.7)" }}>
          {ui.about.kicker[lang]}
        </div>
        <h2 className="h2">{ui.about.title[lang]}</h2>
        {sobreMi.parrafos[lang].map((p, i) => (
          <p key={i} className={"about-p" + (i > 0 ? " muted" : "")}>
            {p}
          </p>
        ))}
      </div>

      <div className="ficha-grid">
        {sobreMi.ficha.map((f) => (
          <div key={f.k.es} className="ficha-item" data-reveal-item>
            <div className="ficha-k">{f.k[lang]}</div>
            <div className="ficha-v">{f.v[lang]}</div>
          </div>
        ))}
        <div className="tools">
          {sobreMi.herramientas.map((h) => (
            <span key={h} className="tool">
              {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
