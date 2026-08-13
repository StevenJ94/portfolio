import { misiones } from "@/lib/data";
import MissionCover from "@/components/MissionCover";

export default function Missions() {
  return (
    <section id="misiones" className="section s-missions" data-reveal>
      <div className="mis-head" data-reveal-item>
        <div>
          <div
            className="kicker"
            style={{ color: "#c89bff", textShadow: "0 0 16px rgba(188,108,255,.65)" }}
          >
            Misiones completadas
          </div>
          <h2 className="h2" style={{ margin: "12px 0 0", fontSize: "clamp(28px,3.8vw,44px)" }}>
            Proyectos destacados
          </h2>
        </div>
        <span className="mis-badge mono">
          <span className="mis-badge-dot" aria-hidden="true" />
          {misiones.length} / {misiones.length} completadas
        </span>
      </div>

      <div className="mis-grid">
        {misiones.map((m) => (
          <article key={m.num} className="mission" data-reveal-item>
            <div className="mis-cover">
              <MissionCover images={m.images} />
              <div className="mis-cover-grad" aria-hidden="true" />
              <span
                className="mis-rarity"
                style={{ background: m.rarezaBg, boxShadow: `0 0 18px ${m.rarezaGlow}` }}
              >
                {m.rareza}
              </span>
              <span className="mis-xp">+{m.xp} XP</span>
            </div>
            <div className="mis-body">
              <div className="mis-title-row">
                <div>
                  <h3 className="mis-title">{m.titulo}</h3>
                  {m.empresa ? <div className="mis-empresa">{m.empresa}</div> : null}
                </div>
                <span className="mis-num">{m.num}</span>
              </div>
              <p className="mis-desc">{m.desc}</p>
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
                  Ver proyecto →
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
