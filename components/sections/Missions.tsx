"use client";

import { misiones, ui, RAREZA_LABEL } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import MissionCover from "@/components/MissionCover";

export default function Missions() {
  const { lang } = useLanguage();

  return (
    <section id="misiones" className="section s-missions" data-reveal>
      <div className="mis-head" data-reveal-item>
        <div>
          <div
            className="kicker"
            style={{ color: "#c89bff", textShadow: "0 0 16px rgba(188,108,255,.65)" }}
          >
            {ui.missions.kicker[lang]}
          </div>
          <h2 className="h2" style={{ margin: "12px 0 0", fontSize: "clamp(28px,3.8vw,44px)" }}>
            {ui.missions.title[lang]}
          </h2>
        </div>
        <span className="mis-badge mono">
          <span className="mis-badge-dot" aria-hidden="true" />
          {misiones.length} / {misiones.length} {ui.missions.completed[lang]}
        </span>
      </div>

      <div className="mis-grid">
        {misiones.map((m) => (
          <article key={m.num} className="mission" data-reveal-item>
            {m.link ? (
              <a
                className="mis-cover"
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ui.missions.viewProject[lang]} ${m.titulo}`}
              >
                <MissionCover images={m.images} label={ui.missions.cover[lang]} />
                <div className="mis-cover-grad" aria-hidden="true" />
                <span
                  className="mis-rarity"
                  style={{ background: m.rarezaBg, boxShadow: `0 0 18px ${m.rarezaGlow}` }}
                >
                  {RAREZA_LABEL[m.rareza][lang]}
                </span>
                <span className="mis-xp">+{m.xp} XP</span>
              </a>
            ) : (
              <div className="mis-cover">
                <MissionCover images={m.images} label={ui.missions.cover[lang]} />
                <div className="mis-cover-grad" aria-hidden="true" />
                <span
                  className="mis-rarity"
                  style={{ background: m.rarezaBg, boxShadow: `0 0 18px ${m.rarezaGlow}` }}
                >
                  {RAREZA_LABEL[m.rareza][lang]}
                </span>
                <span className="mis-xp">+{m.xp} XP</span>
              </div>
            )}
            <div className="mis-body">
              <div className="mis-title-row">
                <div>
                  <h3 className="mis-title">{m.titulo}</h3>
                  {m.empresa ? <div className="mis-empresa">{m.empresa}</div> : null}
                </div>
                <span className="mis-num">{m.num}</span>
              </div>
              <p className="mis-desc">{m.desc[lang]}</p>
              <div className="mis-tags">
                {m.tags.map((t) => (
                  <span key={t} className="mis-tag">
                    {t}
                  </span>
                ))}
              </div>
              {m.link ? (
                <a
                  className="mis-link"
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ui.missions.viewProject[lang]} →
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
