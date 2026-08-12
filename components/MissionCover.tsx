"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Portada de una tarjeta de misión. Si hay varias imágenes, hace un
 * carousel con fade in/out mientras el mouse está encima de la carta;
 * al salir, vuelve a la primera imagen.
 */
export default function MissionCover({
  images,
  label = "Captura del proyecto",
}: {
  images: string[];
  label?: string;
}) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stop = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => stop, []);

  if (!images.length) {
    return (
      <div className="slot">
        <span className="slot-label">{label}</span>
      </div>
    );
  }

  return (
    <div
      className="slot mission-carousel"
      onMouseEnter={() => {
        if (images.length < 2) return;
        intervalRef.current = window.setInterval(() => {
          setActive((i) => (i + 1) % images.length);
        }, 1600);
      }}
      onMouseLeave={() => {
        stop();
        setActive(0);
      }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={"mission-carousel-img" + (i === active ? " is-active" : "")}
        />
      ))}
    </div>
  );
}
