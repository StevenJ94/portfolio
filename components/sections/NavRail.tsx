import { navItems } from "@/lib/data";

export default function NavRail() {
  return (
    <aside className="rail" aria-label="Navegación">
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
            <span className="nav-text">{n.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
