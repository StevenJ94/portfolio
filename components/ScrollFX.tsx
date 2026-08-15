"use client";

import { useEffect } from "react";

/**
 * Comportamientos de scroll/puntero portados del artefacto original:
 *  - initReveal : fade-in por sección al hacer scroll (IntersectionObserver),
 *                 con cascada en las tarjetas [data-reveal-item] + contadores (data-count)
 *  - initTilt   : inclinación 3D en [data-tilt]
 *  - initScroll : barra de progreso + parallax de secciones
 *  - initNav    : resaltado del nav lateral según la sección visible (scroll-spy)
 * Opera sobre atributos data-* del DOM, así que no necesita props.
 */
export default function ScrollFX() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* ---------- reveal (fade + cascada) + contadores ---------- */
    const revealRoots = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];

    const countUp = (el: HTMLElement) => {
      if (el.dataset.done) return;
      const m = el.textContent?.trim().match(/^([^\d]*)([\d\s.,]+)(.*)$/);
      if (!m) return;
      el.dataset.done = "1";
      const pre = m[1];
      const post = m[3];
      const grouped = m[2].includes(" ");
      const target = parseInt(m[2].replace(/[\s.,]/g, ""), 10);
      if (!isFinite(target)) return;
      const dur = 900;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
        el.textContent =
          pre + (grouped ? v.toLocaleString("es-MX").replace(/,/g, " ") : String(v)) + post;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const showRoot = (root: HTMLElement) => {
      if (root.dataset.shown) return;
      root.dataset.shown = "1";
      root.classList.add("is-visible");
      root.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
    };

    if (typeof IntersectionObserver === "undefined") {
      revealRoots.forEach(showRoot);
    } else {
      revealRoots.forEach((root) => {
        // delay progresivo para que las tarjetas dentro de la sección entren en cascada
        root.querySelectorAll<HTMLElement>("[data-reveal-item]").forEach((item, j) => {
          item.style.transitionDelay = `${Math.min(j * 70, 480)}ms`;
        });

        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              showRoot(root);
              io.unobserve(root);
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
        );
        io.observe(root);
        cleanups.push(() => io.disconnect());
      });
    }

    // salvaguarda: si la transición quedó congelada (pestaña oculta), forzar visible
    const repair = () => {
      revealRoots.forEach((root) => {
        if (!root.classList.contains("is-visible")) return;
        const cs = getComputedStyle(root);
        if (parseFloat(cs.opacity) < 0.99) {
          root.style.transition = "none";
          root.style.opacity = "1";
          root.style.transform = "none";
        }
      });
    };
    document.addEventListener("visibilitychange", repair);
    cleanups.push(() => document.removeEventListener("visibilitychange", repair));

    /* ---------- tilt 3D ---------- */
    const tiltEls = [...document.querySelectorAll<HTMLElement>("[data-tilt]")];
    tiltEls.forEach((el) => {
      const max = parseFloat(el.getAttribute("data-tilt") || "") || 8;
      const host = el.parentElement;
      if (host && !host.style.perspective) host.style.perspective = "1100px";
      el.style.transformStyle = "preserve-3d";
      const base = el.style.transform || "";
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = "transform .12s linear";
        el.style.transform =
          `perspective(1100px) rotateY(${(px * max).toFixed(2)}deg) ` +
          `rotateX(${(-py * max).toFixed(2)}deg) translateZ(6px)`;
      };
      const onLeave = () => {
        el.style.transition = "transform .6s cubic-bezier(.22,1,.36,1)";
        el.style.transform = base;
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      });
    });

    /* ---------- barra de progreso + parallax ---------- */
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
    const secs = [...document.querySelectorAll<HTMLElement>("main > section")];
    let raf: number | null = null;
    const run = () => {
      raf = null;
      const sc = document.scrollingElement || document.documentElement;
      const top = window.scrollY || sc.scrollTop || 0;
      const max = (sc.scrollHeight || 0) - (sc.clientHeight || window.innerHeight);
      bar.style.width = (max > 0 ? Math.min(100, (top / max) * 100) : 0) + "%";
      const vh = window.innerHeight;
      secs.forEach((s, i) => {
        if (!s.dataset.shown) return; // no pelear con la animación de reveal
        const r = s.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const c = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
        const depth = (i % 2 ? -1 : 1) * 5;
        s.style.willChange = "transform";
        s.style.transform =
          `perspective(1400px) rotateX(${(c * -1.6).toFixed(2)}deg) ` +
          `translate3d(0,${(c * depth).toFixed(1)}px,0)`;
      });
    };
    const onPageScroll = () => {
      if (document.hidden) {
        run();
        return;
      }
      if (!raf) raf = requestAnimationFrame(run);
    };
    document.addEventListener("scroll", onPageScroll, { capture: true, passive: true });
    window.addEventListener("resize", onPageScroll);
    run();
    cleanups.push(() => {
      if (raf) cancelAnimationFrame(raf);
      document.removeEventListener("scroll", onPageScroll, true);
      window.removeEventListener("resize", onPageScroll);
      secs.forEach((s) => (s.style.transform = ""));
      bar.remove();
    });

    /* ---------- nav scroll-spy ---------- */
    const links = [...document.querySelectorAll<HTMLElement>("[data-navlink]")];
    if (links.length) {
      const navSecs = links
        .map((a) => document.getElementById(a.getAttribute("data-navlink") || ""))
        .filter(Boolean) as HTMLElement[];
      let activeId = "";
      let navW = 0;
      const paint = (active: string) => {
        links.forEach((a) => {
          a.classList.toggle("is-active", a.getAttribute("data-navlink") === active);
        });
      };
      const pick = () => {
        // La sección "activa" es la última (en orden de página) cuyo borde
        // superior ya cruzó la línea de referencia. Antes se elegía la más
        // cercana a esa línea por valor absoluto, lo cual fallaba cuando dos
        // secciones cortas cabían juntas en pantalla: una sección aún no
        // alcanzada podía "verse" más cercana que la que realmente ocupa
        // la pantalla, hacer clic en un botón del sidebar iluminaba otro.
        const mid = window.innerHeight * 0.38;
        let best = navSecs[0];
        navSecs.forEach((s) => {
          const r = s.getBoundingClientRect();
          if (r.top <= mid) best = s;
        });
        if (best && (best.id !== activeId || navW !== window.innerWidth)) {
          activeId = best.id;
          navW = window.innerWidth;
          paint(best.id);
        }
      };
      let navRaf: number | null = null;
      const onNavScroll = () => {
        if (!navRaf)
          navRaf = requestAnimationFrame(() => {
            navRaf = null;
            pick();
          });
      };
      document.addEventListener("scroll", onNavScroll, { capture: true, passive: true });
      window.addEventListener("resize", onNavScroll);
      const t = window.setTimeout(pick, 80);
      cleanups.push(() => {
        document.removeEventListener("scroll", onNavScroll, true);
        window.removeEventListener("resize", onNavScroll);
        if (navRaf) cancelAnimationFrame(navRaf);
        clearTimeout(t);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
