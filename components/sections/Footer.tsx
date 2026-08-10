import { perfil, social } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <span>{perfil.copyright}</span>
      <span className="footer-social">
        {social.map((s) => (
          <a key={s.label} href={s.href}>
            {s.label}
          </a>
        ))}
      </span>
    </footer>
  );
}
