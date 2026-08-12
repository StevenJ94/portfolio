import { perfil, social } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <span>{perfil.copyright}</span>
      <span className="footer-social">
        {social.map((s) => {
          const external = s.href.startsWith("http");
          return (
            <a
              key={s.label}
              href={s.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {s.label}
            </a>
          );
        })}
      </span>
    </footer>
  );
}
