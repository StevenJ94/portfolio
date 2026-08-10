/**
 * Toda la información del portafolio vive aquí.
 * Edita este archivo para personalizar el contenido: no necesitas tocar los componentes.
 */

export const perfil = {
  nombre: "Steven Marín",
  clase: "Frontend Developer",
  rango: "S",
  nivel: 27,
  estado: "Online · abierto a proyectos",
  tagline:
    "Seis años subiendo de nivel en interfaces de producto. Especialidad en rendimiento, animación y sistemas de diseño.",
  email: "hola@steven.dev",
  cvUrl: "#top",
  // Coloca una imagen en /public y pon aquí la ruta, p. ej. "/avatar.jpg".
  // Si lo dejas vacío se muestra un placeholder con monograma.
  avatar: "",
  monograma: "S",
  copyright: "© 2026 Steven Marín · Save file v2.7",
};

export const navItems = [
  { id: "top", href: "#top", label: "Perfil", color: "#00F0FF" },
  { id: "sobre", href: "#sobre", label: "Sobre mí", color: "#6BB8FF" },
  { id: "misiones", href: "#misiones", label: "Misiones", color: "#BC6CFF" },
  { id: "stats", href: "#stats", label: "Atributos", color: "#7C5CFF" },
  { id: "contacto", href: "#contacto", label: "Contacto", color: "#FF5CA8" },
];

// Paleta neón reutilizable
const PRIMARY = "#FF5CA8";
const SECONDARY = "#BC6CFF";
const CYAN = "#00F0FF";
const BLUE = "#6BB8FF";
const CYAN_LITE = "#7CF7FF";

export const vitals = [
  { label: "Experiencia", valor: "6", nota: "años en producto", color: SECONDARY },
  { label: "Entregas", valor: "40+", nota: "proyectos en producción", color: PRIMARY },
  { label: "Impacto", valor: "120k", nota: "usuarios servidos", color: CYAN },
  { label: "Carga", valor: "-45%", nota: "tiempo de carga", color: BLUE },
];

export const registro = [
  {
    rol: "Frontend Lead",
    empresa: "Lumen Labs",
    periodo: "2023 — Hoy",
    color: CYAN,
    desc:
      "Lidero la interfaz de un SaaS con 120k usuarios. Migración a Next.js App Router y −45 % en carga inicial.",
  },
  {
    rol: "Frontend Developer",
    empresa: "Órbita Studio",
    periodo: "2021 — 2023",
    color: SECONDARY,
    desc:
      "Sitios y campañas para retail y música. Autor del design system interno usado en 14 proyectos.",
  },
  {
    rol: "Desarrollador Web",
    empresa: "Freelance",
    periodo: "2020 — 2021",
    color: PRIMARY,
    desc:
      "Más de 20 proyectos entregados para startups y artistas, del diseño al despliegue.",
  },
  {
    rol: "Ing. en Sistemas",
    empresa: "Universidad Nacional",
    periodo: "2016 — 2020",
    color: BLUE,
    desc: "Especialización en gráficos por computadora y arquitectura de software.",
  },
];

export const sobreMi = {
  parrafos: [
    "Empecé maquetando sitios para bandas locales y terminé liderando la capa de interfaz de un SaaS con 120k usuarios. Me muevo bien entre diseño e ingeniería: prototipo rápido, mido y vuelvo a iterar.",
    "Trabajo mejor en equipos pequeños donde el código y el diseño se discuten en la misma mesa. Fuera del editor: sintetizadores y fotografía nocturna.",
  ],
  ficha: [
    { k: "Base", v: "Ciudad · Remoto" },
    { k: "Idiomas", v: "Español · Inglés" },
    { k: "Ahora", v: "Editor de motion en WebGL" },
    { k: "Modo", v: "Freelance / full-time" },
  ],
  herramientas: [
    "React",
    "Next.js",
    "TypeScript",
    "Vite",
    "Tailwind",
    "Framer Motion",
    "three.js",
    "Playwright",
    "Figma",
  ],
};

export type Rareza = "Legendario" | "Épico" | "Raro";

const RAREZAS: Record<Rareza, { bg: string; glow: string }> = {
  Legendario: { bg: "linear-gradient(100deg, #7CF7FF, #BC6CFF)", glow: "rgba(0,240,255,.6)" },
  "Épico": { bg: "linear-gradient(100deg, #BC6CFF, #7B4BFF)", glow: "rgba(188,108,255,.6)" },
  Raro: { bg: "linear-gradient(100deg, #6BB8FF, #4A6BFF)", glow: "rgba(107,184,255,.55)" },
};

export const misiones = [
  {
    num: "#01",
    titulo: "Nocturne Player",
    desc: "Reproductor con visualizador WebGL reactivo al audio y biblioteca offline-first.",
    tags: ["React", "WebGL", "IndexedDB"],
    rareza: "Legendario" as Rareza,
    xp: "1 200",
  },
  {
    num: "#02",
    titulo: "Pulse Analytics",
    desc: "Panel en tiempo real: 40k eventos por minuto sin bloquear el hilo principal.",
    tags: ["Next.js", "WebSockets", "D3"],
    rareza: "Épico" as Rareza,
    xp: "980",
  },
  {
    num: "#03",
    titulo: "Halo UI",
    desc: "48 componentes accesibles con tokens temáticos y documentación viva.",
    tags: ["TypeScript", "Radix", "Storybook"],
    rareza: "Épico" as Rareza,
    xp: "1 050",
  },
  {
    num: "#04",
    titulo: "Grid Forge",
    desc: "Editor visual de layouts CSS que exporta grid y flex listos para producción.",
    tags: ["Vue", "CSS Grid", "Vite"],
    rareza: "Raro" as Rareza,
    xp: "720",
  },
  {
    num: "#05",
    titulo: "Neon Terrain",
    desc: "Paisaje procedural infinito con shaders propios a 60 fps en móvil.",
    tags: ["three.js", "GLSL", "Workers"],
    rareza: "Legendario" as Rareza,
    xp: "1 340",
  },
  {
    num: "#06",
    titulo: "Vela Store",
    desc: "Tienda headless con checkout en tres pasos y edge rendering.",
    tags: ["Astro", "Shopify", "Edge"],
    rareza: "Raro" as Rareza,
    xp: "860",
  },
].map((m) => ({ ...m, rarezaBg: RAREZAS[m.rareza].bg, rarezaGlow: RAREZAS[m.rareza].glow }));

export const statsIntro =
  "Dónde están asignados mis puntos hoy. Los ejes se mueven con cada proyecto: ahora mismo subo WebGL y testing.";

// El orden define la posición en el radar (empezando arriba y girando a la derecha).
export const ejes = [
  { k: "React", v: 92, color: PRIMARY },
  { k: "TypeScript", v: 88, color: SECONDARY },
  { k: "CSS / anim", v: 95, color: CYAN_LITE },
  { k: "Rendimiento", v: 85, color: CYAN },
  { k: "Testing", v: 74, color: SECONDARY },
  { k: "WebGL", v: 68, color: PRIMARY },
];

export const contacto = {
  kicker: "Nueva partida",
  titulo: "¿Sumamos tu proyecto al registro?",
  desc: "Cuéntame qué estás construyendo. Respondo en menos de 24 horas.",
};

export const social = [
  { label: "GitHub", href: "#top" },
  { label: "LinkedIn", href: "#top" },
  { label: "Read.cv", href: "#top" },
];
