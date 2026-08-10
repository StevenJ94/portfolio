import { contacto, perfil } from "@/lib/data";

export default function Contact() {
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
          <a href={`mailto:${perfil.email}`} className="btn-primary">
            {perfil.email}
          </a>
          <span className="btn-ghost-wrap">
            <a href={perfil.cvUrl} className="btn-ghost">
              Descargar CV
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
