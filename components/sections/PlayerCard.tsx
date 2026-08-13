import { perfil, vitals, registro } from "@/lib/data";
import ImageSlot from "@/components/ImageSlot";

export default function PlayerCard() {
  return (
    <section id="top" className="section s-player" data-reveal>
      <div className="pc-glow" aria-hidden="true" />

      <div className="pc-top">
        <div className="pc-id">
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
            <span className="avatar-lv">
              Lv. <span data-count>{perfil.nivel}</span>
            </span>
          </div>

          <div className="pc-info">
            <div className="status">
              <span className="status-dot" aria-hidden="true" />
              {perfil.estado}
            </div>
            <h1 className="name">{perfil.nombre}</h1>
            <div className="clase">
              Clase: <span style={{ color: "var(--pink)" }}>{perfil.clase}</span> · Rango{" "}
              <span style={{ color: "var(--blue)" }}>{perfil.rango}</span>
            </div>
            <p className="tagline">{perfil.tagline}</p>
          </div>
        </div>

        <div className="vitals">
          {vitals.map((v) => (
            <div
              key={v.label}
              className="vital"
              data-reveal-item
              style={{ ["--c"]: v.color } as React.CSSProperties}
            >
              <div className="vital-label">{v.label}</div>
              <div className="vital-val" data-count>
                {v.valor}
              </div>
              <div className="vital-note">{v.nota}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider">
        <span className="divider-label">Registro de misión · 2016 → hoy</span>
        <span className="divider-line" aria-hidden="true" />
      </div>

      <div className="reg-grid">
        {registro.map((e) => (
          <div
            key={e.rol + e.periodo}
            className="reg-item"
            data-reveal-item
            style={{ ["--c"]: e.color } as React.CSSProperties}
          >
            <div className="reg-period">
              <span className="reg-dot" aria-hidden="true" />
              {e.periodo}
            </div>
            <div className="reg-rol">{e.rol}</div>
            <div className="reg-empresa">{e.empresa}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
