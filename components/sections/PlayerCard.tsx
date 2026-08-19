"use client";

import { perfil, vitals, registro, ui } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import ImageSlot from "@/components/ImageSlot";

export default function PlayerCard() {
  const { lang } = useLanguage();

  return (
    <section id="top" className="section s-player" data-reveal>
      <div className="pc-glow" aria-hidden="true" />

      <div className="pc-top">
        <div className="pc-id">
          <div className="avatar-col">
            <div className="avatar" data-tilt="16">
              <div className="avatar-ring" aria-hidden="true" />
              <div className="avatar-frame" aria-hidden="true" />
              <div style={{ position: "absolute", inset: 0 }}>
                <ImageSlot
                  variant="avatar"
                  src={perfil.avatar}
                  alt={perfil.nombre}
                  mono={perfil.monograma}
                />
              </div>
              <span
                className="avatar-lv"
                title={`${ui.player.ageTitle[lang]}: ${perfil.edad} ${ui.player.years[lang]}`}
              >
                Lv. <span data-count>{perfil.nivel}</span>
              </span>
            </div>

            <div className="avatar-social">
              <a
                className="avatar-social-link"
                href={perfil.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Steven Ruíz"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                className="avatar-social-link"
                href={perfil.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Steven Ruíz"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="pc-info">
            <div className="status">
              <span className="status-dot" aria-hidden="true" />
              {perfil.estado[lang]}
            </div>
            <h1 className="name">{perfil.nombre}</h1>
            <div className="clase">
              {ui.player.classLabel[lang]}: <span style={{ color: "var(--pink)" }}>{perfil.clase[lang]}</span>
            </div>
            <p className="tagline">{perfil.tagline[lang]}</p>
          </div>
        </div>

        <div className="vitals">
          {vitals.map((v) => (
            <div
              key={v.label.es}
              className="vital"
              data-reveal-item
              style={{ ["--c"]: v.color } as React.CSSProperties}
            >
              <div className="vital-label">{v.label[lang]}</div>
              <div className="vital-val" data-count>
                {v.valor[lang]}
              </div>
              <div className="vital-note">{v.nota[lang]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider">
        <span className="divider-label">{ui.player.missionLog[lang]}</span>
        <span className="divider-line" aria-hidden="true" />
      </div>

      <div className="reg-grid">
        {registro.map((e) => (
          <div
            key={e.empresa + e.periodo.es}
            className="reg-item"
            data-reveal-item
            style={{ ["--c"]: e.color } as React.CSSProperties}
          >
            <div className="reg-period">
              <span className="reg-dot" aria-hidden="true" />
              {e.periodo[lang]}
            </div>
            <div className="reg-rol">{e.rol[lang]}</div>
            <div className="reg-empresa">{e.empresa}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
