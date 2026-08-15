"use client";

import { social } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="footer">
      <span className="footer-social">
        {social.map((s) => {
          const external = s.href.startsWith("http");
          return (
            <a
              key={s.label.es}
              href={s.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              {...("download" in s && s.download ? { download: true } : {})}
            >
              {s.label[lang]}
            </a>
          );
        })}
      </span>
    </footer>
  );
}
