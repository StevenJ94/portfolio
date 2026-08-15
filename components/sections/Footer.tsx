import { perfil, social } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {perfil.nombre} · Save file v2.7</span>
      <span className="footer-social">
        {social.map((s) => {
          const external = s.href.startsWith("http");
          return (
            <a
              key={s.label}
              href={s.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              {...("download" in s && s.download ? { download: true } : {})}
            >
              {s.label}
            </a>
          );
        })}
      </span>
    </footer>
  );
}
