"use client";

import { navItems, ui } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function NavRail() {
  const { lang } = useLanguage();

  return (
    <aside className="rail" aria-label={ui.nav.aria[lang]}>
      <nav className="rail-list">
        {navItems.map((n) => (
          <a
            key={n.id}
            href={n.href}
            className="nav-link"
            data-navlink={n.id}
            style={{ ["--c"]: n.color } as React.CSSProperties}
          >
            <span className="nav-bar" aria-hidden="true" />
            <span className="nav-dot" aria-hidden="true" />
            <span className="nav-text">{n.label[lang]}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
