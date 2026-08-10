"use client";

import { useEffect, useRef } from "react";

/**
 * Rejilla de hexágonos de fondo con halo RGB que sigue al puntero.
 * Portado del artefacto original (initHex).
 */
export default function HexCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const R = 46; // radio del hexágono
    const H = (Math.sqrt(3) / 2) * R; // media altura
    let cells: { x: number; y: number }[] = [];
    let dpr = 1;
    let w = 0;
    let h = 0;
    let raf = 0;
    const pointer = { x: -9999, y: -9999, on: 0, idle: false };
    const scroll = { y: 0 };

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = Math.floor(w * dpr);
      cv.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cells = [];
      const dx = R * 1.5;
      const dy = H * 2;
      for (let col = -1; col * dx < w + R * 2; col++) {
        for (let row = -1; row * dy < h + dy * 2; row++) {
          const cx = col * dx;
          const cy = row * dy + (col % 2 ? H : 0);
          cells.push({ x: cx, y: cy });
        }
      }
    };

    const hexPath = (cx: number, cy: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 180) * (60 * i);
        const px = cx + R * Math.cos(a);
        const py = cy + R * Math.sin(a);
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.closePath();
    };

    const glowRadius = 240;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      const drift = (scroll.y * 0.06) % (H * 2);
      // rejilla base
      ctx.strokeStyle = "rgba(188,108,255,0.055)";
      for (const c of cells) {
        hexPath(c.x, c.y - drift);
        ctx.stroke();
      }
      // halo RGB alrededor del puntero
      if (pointer.on > 0.01) {
        ctx.save();
        ctx.lineJoin = "round";
        for (const c of cells) {
          const cy = c.y - drift;
          const d = Math.hypot(c.x - pointer.x, cy - pointer.y);
          if (d > glowRadius) continue;
          const f = (1 - d / glowRadius) * pointer.on;
          const hue = (t * 0.05 + d * 0.9) % 360;
          ctx.lineWidth = 1 + f * 1.6;
          ctx.shadowBlur = 16 * f;
          ctx.shadowColor = `hsla(${hue}, 100%, 62%, ${0.7 * f})`;
          ctx.strokeStyle = `hsla(${hue}, 100%, 68%, ${0.16 + 0.8 * f * f})`;
          hexPath(c.x, cy);
          ctx.stroke();
          if (f > 0.72) {
            ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${(f - 0.72) * 0.18})`;
            ctx.fill();
          }
        }
        ctx.restore();
      }
      pointer.on += ((pointer.idle ? 0 : 1) - pointer.on) * 0.06;
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => build();
    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.idle = false;
    };
    const onLeave = () => {
      pointer.idle = true;
    };
    const onScroll = () => {
      scroll.y = window.scrollY || 0;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    build();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={ref} className="hex-canvas" aria-hidden="true" />;
}
