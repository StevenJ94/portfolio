"use client";

import { useState } from "react";
import { contacto, perfil } from "@/lib/data";

export default function Contact() {
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch {
      // Clipboard no disponible (p. ej. contexto no seguro); no hacemos nada más.
    }
  };

  return (
    <section id="contacto" className="section s-contact" data-reveal>
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-inner">
        <div className="kicker" style={{ color: "#ff8cc4" }}>
          {contacto.kicker}
        </div>
        <h2 className="contact-title">{contacto.titulo}</h2>
        <p className="contact-desc">{contacto.desc}</p>
        <div className="contact-actions">
          <button type="button" className="btn-primary" onClick={copiarEmail}>
            {copiado ? "¡Correo copiado!" : perfil.email}
          </button>
          {perfil.cvUrl ? (
            <span className="btn-ghost-wrap">
              <a href={perfil.cvUrl} className="btn-ghost" download>
                Descargar CV
              </a>
            </span>
          ) : null}
        </div>
        <p className="contact-meta">
          📍 {perfil.ubicacion} · {perfil.telefono}
        </p>
      </div>
    </section>
  );
}
