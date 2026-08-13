import { sobreMi } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="section s-about" data-reveal>
      <div>
        <div className="kicker" style={{ color: "var(--cyan)", textShadow: "0 0 16px rgba(0,240,255,.5)" }}>
          Ficha del jugador
        </div>
        <h2 className="h2">Sobre mí</h2>
        {sobreMi.parrafos.map((p, i) => (
          <p key={i} className={"about-p" + (i > 0 ? " muted" : "")}>
            {p}
          </p>
        ))}
      </div>

      <div className="ficha-grid">
        {sobreMi.ficha.map((f) => (
          <div key={f.k} className="ficha-item" data-reveal-item>
            <div className="ficha-k">{f.k}</div>
            <div className="ficha-v">{f.v}</div>
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
