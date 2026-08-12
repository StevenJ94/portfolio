const automaticDate = () => {
  const inicio = new Date('2019-12-12').getFullYear();
  const actual = new Date().getFullYear();
  return actual - inicio;
} 


// <---------- / funciones ------>

/**
 * Toda la información del portafolio vive aquí.
 * Contenido basado en el CV real de Steven Ruíz.
 * Edita este archivo para actualizar el contenido: no necesitas tocar los componentes.
 */

export const perfil = {
  nombre: "Steven Ruíz",
  clase: "Frontend & Mobile Developer",
  nivel: 32,
  rango: "S",
  estado: "Disponible · abierto a nuevas oportunidades",
  tagline:
    `Desarrollador Front-End con ${automaticDate()} años creando aplicaciones web y móviles modernas con Angular, React, Next.js y React Native.`,
  email: "stevenruiz.p94@gmail.com",
  telefono: "+57 300 636 9312",
  whatsapp: "573006369312", // solo dígitos, para el enlace wa.me
  ubicacion: "Barranquilla, Colombia",
  // ✏️ Cuando tengas tu CV en PDF, ponlo en /public (p. ej. /cv-steven-ruiz.pdf) y su ruta aquí.
  cvUrl: "",
  // La foto vive en /public/foto.jpg — no se toca.
  avatar: "/foto.jpg",
  monograma: "S",
  copyright: "© 2026 Steven Ruíz · Save file v2.7",
};

export const navItems = [
  { id: "top", href: "#top", label: "Perfil", color: "#00F0FF" },
  { id: "sobre", href: "#sobre", label: "Sobre mí", color: "#6BB8FF" },
  { id: "misiones", href: "#misiones", label: "Proyectos", color: "#BC6CFF" },
  { id: "stats", href: "#stats", label: "Skills", color: "#7C5CFF" },
  { id: "contacto", href: "#contacto", label: "Contacto", color: "#FF5CA8" },
];

// Paleta neón reutilizable
const PRIMARY = "#FF5CA8";
const SECONDARY = "#BC6CFF";
const CYAN = "#00F0FF";
const BLUE = "#6BB8FF";
const CYAN_LITE = "#7CF7FF";
const YELLOW = "#FFCA06";
const NEON_PURPLE = "#BC6CFF"

export const vitals = [
  { label: "Experiencia", valor:  automaticDate()+'+', nota: "años en la industria", color: SECONDARY },
  { label: "Proyectos", valor: "6+", nota: "en producción", color: PRIMARY },
  { label: "Stack", valor: "4", nota: "Angular · React · Next · RN", color: CYAN },
  { label: "Fuerte", valor: "Adapta bilidad", nota: "equipos ágiles", color: BLUE },
  { label: "IA", valor: "Vibe coding", nota: "equipos ágiles", color: YELLOW },
];

export const registro = [
  {
    rol: "Desarrollador Móvil y Front-End",
    empresa: "Grupo HSEQ",
    periodo: "2025 — Hoy",
    color: CYAN,
    desc:
      "Aplicaciones móviles con React Native y Expo para trabajo de campo y cumplimiento normativo.",
  },
  {
    rol: "Desarrollador Front-End",
    empresa: "Binar10 Tecnología y Servicios",
    periodo: "2019 — Hoy",
    color: SECONDARY,
    desc:
      "E-commerce y dashboards administrativos con Angular, Angular Universal, RXJS y NGX-Bootstrap.",
  },
  {
    rol: "Tecnólogo en Análisis y Programación",
    empresa: "SENA",
    periodo: "2019",
    color: PRIMARY,
    desc: "Análisis y desarrollo de software: programación, bases de datos y optimización de sistemas.",
  },
  {
    rol: "Técnico en Sistemas",
    empresa: "Centro INCA",
    periodo: "2016",
    color: BLUE,
    desc: "Soporte técnico, redes y administración de sistemas operativos.",
  },
];

export const sobreMi = {
  parrafos: [
    "Soy Desarrollador Front-End con más de 5 años de experiencia en la industria tecnológica, especializado en aplicaciones web y móviles modernas. Construyo productos multiplataforma con Angular, React, Next.js y React Native.",
    "Trabajo con metodologías ágiles (Scrum), colaboro con equipos multidisciplinarios y me adapto rápido a los cambios del proyecto. Con base en Barranquilla, Colombia, y abierto a trabajo remoto.",
  ],
  ficha: [
    { k: "Ubicación", v: "Barranquilla, Colombia" },
    { k: "Idiomas", v: "Español" },
    { k: "Ahora", v: "Binar10 Tecnología y Servicios" },
    { k: "Modo", v: "Remoto · abierto a ofertas" },
  ],
  herramientas: [
    "Angular",
    "React",
    "React Native",
    "Next.js",
    "RXJS",
    "Angular Universal",
    "TypeScript",
    "HTML5",
    "CSS",
    "Bootstrap",
    "NGX-Bootstrap",
    "Expo",
    "Google Maps",
    "Git",
    "Scrum",
    "Vibe coding"
  ],
};

export type Rareza = "Legendario" | "Épico" | "Raro";

const RAREZAS: Record<Rareza, { bg: string; glow: string }> = {
  Legendario: { bg: "linear-gradient(100deg, #7CF7FF, #BC6CFF)", glow: "rgba(0,240,255,.6)" },
  "Épico": { bg: "linear-gradient(100deg, #BC6CFF, #7B4BFF)", glow: "rgba(188,108,255,.6)" },
  Raro: { bg: "linear-gradient(100deg, #6BB8FF, #4A6BFF)", glow: "rgba(107,184,255,.55)" },
};

// Proyectos reales del CV. `link` es opcional: si añades una URL, aparece un botón
// "Ver proyecto →" en la tarjeta.
export const misiones = [
   {
    num: "#01",
    titulo: "Binar10",
    empresa: "Binar10",
    desc:
      "Sitio web Landing, que permite ver servicios como desarrollo de software, marketing digital, ventas de productos, gestión de contenido hasta lograr la sistematización y automatización de tus operaciones.",
    tags: ["Wordpress"],
    rareza: "Raro" as Rareza,
    xp: "1 400",
    link: "https://www.binar10.co/",
    images: ["/Binar10/1.png", "/Binar10/2.png", "/Binar10/3.png"],
  },
   {
    num: "#02",
    titulo: "Puntos saludables",
    empresa: "Binar10",
    desc:
      "Página web con landing, dashboard que permite al usuario registrarse, iniciar sesión, cunsultar datos de comprar e interactuar y redimir bonos.",
    tags: ["Nextjs", "google maps","Tailwinds"],
    rareza: "Legendario" as Rareza,
    xp: "1 400",
    link: "https://puntossaludables.com/",
    images: ["/PS/1.png", "/PS/2.png", "/PS/3.png"],
  },
    {
    num: "#03",
    titulo: "Unidrogas",
    empresa: "Binar10",
    desc:
      "Landing  y panel administrativo para usuarios que gestionan y administran productos de droguerías y empleados. Desarrollo y mantenimiento continuo.",
    tags: ["Angular", "Bootstrap", "NGX-Bootstrap"],
    rareza: "Épico" as Rareza,
    xp: "980",
    link: "https://unidrogas.com/",
    images: ["/Unidrogas/1.png", "/Unidrogas/2.png", "/Unidrogas/3.png"],
  },
    {
    num: "#04",
    titulo: "Dropopular",
    empresa: "Binar10",
    desc:
      "Landing  y panel administrativo para usuarios que gestionan y administran productos de droguerías y empleados. Desarrollo y mantenimiento continuo.",
     tags: ["Angular", "Bootstrap", "NGX-Bootstrap"],
    rareza: "Raro" as Rareza,
    xp: "1 400",
    link: "https://dropopular.com/",
    images: ["/Dropopular/1.png", "/Dropopular/2.png", "/Dropopular/3.png"],
  },
   {
    num: "#05",
    titulo: "SuperaT",
    empresa: "Binar10",
    desc:
      "Dashboard multi empresa, que trabajos con diferente tipos de información, usando herramientas modernas para la visualización de datos, ya sea graficos, mapas, o usando otras aplicaciones.",
    tags: ["Angular", "Google Maps", "RXJS", "NGX-Bootstrap"],
    rareza: "Épico" as Rareza,
    xp: "860",
    link: "https://superat.co/",
    images: ["/SuperaT/1.png", "/SuperaT/2.png", "/SuperaT/3.png"],
  },
  {
    num: "#06",
    titulo: "GIMED",
    empresa: "Binar10",
    desc:
      "Plataforma de venta de productos de droguería como parte del equipo de desarrollo principal, con renderizado del lado del servidor.",
    tags: ["Angular", "Angular Universal", "RXJS", "NGX-Bootstrap"],
    rareza: "Épico" as Rareza,
    xp: "1 100",
    link: "https://www.gimed.com.co/",
    images: ["/GIMED/1.png", "/GIMED/2.png", "/GIMED/3.png"],
  },
  {
    num: "#07",
    titulo: "Julienne",
    empresa: "Binar10",
    desc:
      "E-commerce que permite a los usuarios visualizar e interactuar con los productos ofrecidos por la página, se puede filtrar por región y categorías.",
    tags: ["Angular", "Bootstrap", "NGX-Bootstrap", "RXJS"],
    rareza: "Legendario" as Rareza,
    xp: "1 400",
    link: "https://juliennecosmetic.com/",
    images: ["/Julienne/1.png", "/Julienne/2.png", "/Julienne/3.png"],
  },
  
   {
    num: "#08",
    titulo: "HSEQ Cloud",
    empresa: "Grupo HSEQ",
    desc:
      "Apliación web que permite el control o administración de datos, ya sea usuarios, herramientas, roles, etc. ",
    tags: ["NextJS", "Tailwinds", "Firebase", "Google maps"],
    rareza: "Épico" as Rareza,
    xp: "1 400",
    link: "https://hseqcloud.com/",
    images: ["/HSEQ/1.png"],
  },
   {
    num: "#09",
    titulo: "MOS",
    empresa: "Binar10",
    desc:
      "Tienda online de productos de belleza con pasarela de pago y soporte multi-idioma, desarrollada de extremo a extremo.",
    tags: ["Angular", "Pasarela de pago", "i18n", "RXJS"],
    rareza: "Legendario" as Rareza,
    xp: "1 250",
    link: "",
    images: ["/MOS/1.jpg"],
  },
  {
    num: "#10",
    titulo: "GirosYa",
    empresa: "Binar10",
    desc:
      "Sitio web que permite a los usuarios hacer giros, solicitar información, y visualizarla.",
    tags: ["Angular", "Bootstrap", "NGX-Bootstrap"],
    rareza: "Raro" as Rareza,
    xp: "1 400",
    link: "",
    images: ["/GirosYa/1.png"],
  },

].map((m) => ({ ...m, rarezaBg: RAREZAS[m.rareza].bg, rarezaGlow: RAREZAS[m.rareza].glow }));

export const statsIntro =
  "Mi stack del día a día. Angular es mi base tras años construyendo aplicaciones webs de tipo lading, e-commerce y dashboards; sumo React, React Native y Next.js para producto web y móvil.";

// El orden define la posición en el radar (empezando arriba y girando a la derecha).
export const ejes = [
  { k: "Angular", v: 90, color: PRIMARY },
  { k: "React", v: 80, color: CYAN },
  { k: "Next.js", v: 85, color: CYAN_LITE },
  { k: "React Native", v: 75, color: SECONDARY },
  { k: "Vibe Coding", v: 85, color: BLUE },
  { k: "Adaptabilidad", v: 100, color: CYAN_LITE },
];

export const contacto = {
  kicker: "Nueva partida",
  titulo: "¿Buscas un Front-End para tu equipo?",
  desc: "Estoy abierto a nuevas oportunidades. Escríbeme y te respondo en menos de 24 horas.",
};

export const social = [
  { label: "Email", href: "mailto:stevenruiz.p94@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/573006369312" },
  // ✏️ Agrega la URL de tu perfil de LinkedIn:
  { label: "LinkedIn", href: "#" },
];
