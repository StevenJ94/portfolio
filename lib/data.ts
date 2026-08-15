const automaticDate = () => {
  const inicio = new Date('2019-12-12').getFullYear();
  const actual = new Date().getFullYear();
  return actual - inicio;
}

const calcularEdad = () => {
  const nacimiento = new Date('1994-08-01');
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const yaCumplioEsteAno =
    hoy.getMonth() > nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() >= nacimiento.getDate());
  if (!yaCumplioEsteAno) edad--;
  return edad;
}

// <---------- / funciones ------>

/**
 * Toda la información del portafolio vive aquí.
 * Contenido basado en el CV real de Steven Ruíz.
 * Los textos que varían entre español e inglés usan la forma { es, en }.
 * Edita este archivo para actualizar el contenido: no necesitas tocar los componentes.
 */

export type Bi = { es: string; en: string };

export const perfil = {
  nombre: "Steven Ruíz",
  clase: "Frontend & Mobile Developer",
  nivel: 32,
  edad: calcularEdad(),
  estado: {
    es: "Disponible · abierto a nuevas oportunidades",
    en: "Available · open to new opportunities",
  } as Bi,
  tagline: {
    es: `Desarrollador Front‑End con más de ${automaticDate()} años de experiencía creando aplicaciones web y móviles modernas con Angular, React, Next.js y React Native.`,
    en: `Front‑End Developer with over ${automaticDate()} years of experience building modern web and mobile applications with Angular, React, Next.js, and React Native.`,
  } as Bi,
  email: "stevenruiz.p94@gmail.com",
  telefono: "+57 300 636 9312",
  whatsapp: "573006369312", // solo dígitos, para el enlace wa.me
  ubicacion: "Barranquilla, Colombia",
  linkedin: "https://www.linkedin.com/in/stevenruiz94",
  github: "https://github.com/StevenJ94",
  // CV en PDF: /public/CV_Steven_Ruiz_ES.pdf (es) y /public/CV_Steven_Ruiz_EN.pdf (en)
  cvUrl: {
    es: "/CV_Steven_Ruiz_ES.pdf",
    en: "/CV_Steven_Ruiz_EN.pdf",
  } as Bi,
  // La foto vive en /public/profile.png — no se toca.
  avatar: "/profile.png",
  monograma: "S",
  // copyright: "© 2026 Steven Ruíz · Save file v2.7",
};

export const navItems: { id: string; href: string; label: Bi; color: string }[] = [
  { id: "top", href: "#top", label: { es: "Perfil", en: "Profile" }, color: "#00F0FF" },
  { id: "sobre", href: "#sobre", label: { es: "Sobre mí", en: "About" }, color: "#C5003C" },
  { id: "misiones", href: "#misiones", label: { es: "Proyectos", en: "Projects" }, color: "#BC6CFF" },
  { id: "stats", href: "#stats", label: { es: "Skills", en: "Skills" }, color: "#FFCA06" },
  { id: "contacto", href: "#contacto", label: { es: "Contacto", en: "Contact" }, color: "#FF5CA8" },
];

// Paleta neón reutilizable
const PRIMARY = "#FF5CA8";
const SECONDARY = "#BC6CFF";
const CYAN = "#00F0FF";
const BLUE = "#6BB8FF";
const CYAN_LITE = "#7CF7FF";
const YELLOW = "#FFCA06";
const RED = "#C5003C"

export const vitals: { label: Bi; valor: Bi; nota: Bi; color: string }[] = [
  {
    label: { es: "Experiencia", en: "Experience" },
    valor: { es: automaticDate() + '+', en: automaticDate() + '+' },
    nota: { es: "años en la industria", en: "years in the industry" },
    color: SECONDARY,
  },
  {
    label: { es: "Proyectos", en: "Projects" },
    valor: { es: "6+", en: "6+" },
    nota: { es: "en producción", en: "in production" },
    color: PRIMARY,
  },
  {
    label: { es: "Stack", en: "Stack" },
    valor: { es: "4", en: "4" },
    nota: { es: "Angular · React · Next · RN", en: "Angular · React · Next · RN" },
    color: CYAN,
  },
  {
    label: { es: "Fuerte", en: "Strength" },
    valor: { es: "Adapta bilidad", en: "Adaptability" },
    nota: { es: "Resolución de problemas", en: "Problem solving" },
    color: BLUE,
  },
  {
    label: { es: "IA", en: "AI" },
    valor: { es: "Vibe coding", en: "Vibe coding" },
    nota: { es: "Automatización ", en: "Automation" },
    color: YELLOW,
  },
  {
    label: { es: "Metodologías", en: "Methodologies" },
    valor: { es: "Scrum", en: "Scrum" },
    nota: { es: "Trabajo en equipo", en: "Teamwork" },
    color: RED,
  },
];

export const registro: { rol: Bi; empresa: string; periodo: Bi; color: string; desc: Bi }[] = [
  {
    rol: { es: "Desarrollador Móvil y Front‑End", en: "Mobile & Front‑End Developer" },
    empresa: "Grupo HSEQ",
    periodo: { es: "2025 — Hoy", en: "2025 — Present" },
    color: CYAN,
    desc: {
      es: "Aplicaciones móviles con React Native y Expo para trabajo de campo y cumplimiento normativo.",
      en: "Mobile applications built with React Native and Expo for field work and regulatory compliance.",
    },
  },
  {
    rol: { es: "Desarrollador Front‑End", en: "Front‑End Developer" },
    empresa: "Binar10 Tecnología y Servicios",
    periodo: { es: "2019 — Hoy", en: "2019 — Present" },
    color: SECONDARY,
    desc: {
      es: "E-commerce y dashboards administrativos con Angular, Angular Universal, RXJS y NGX-Bootstrap.",
      en: "E-commerce platforms and admin dashboards built with Angular, Angular Universal, RxJS, and NGX-Bootstrap.",
    },
  },
  {
    rol: { es: "Tecnólogo en Análisis y Programación", en: "Technologist in Systems Analysis and Programming" },
    empresa: "SENA",
    periodo: { es: "2019", en: "2019" },
    color: PRIMARY,
    desc: {
      es: "Análisis y desarrollo de software: programación, bases de datos y optimización de sistemas.",
      en: "Software analysis and development: programming, databases, and systems optimization.",
    },
  },
  {
    rol: { es: "Técnico en Sistemas", en: "Systems Technician" },
    empresa: "Centro INCA",
    periodo: { es: "2016", en: "2016" },
    color: BLUE,
    desc: {
      es: "Soporte técnico, redes y administración de sistemas operativos.",
      en: "Technical support, networking, and operating systems administration.",
    },
  },
];

export const sobreMi = {
  parrafos: {
    es: [
      `Soy Desarrollador Front‑End con más de ${automaticDate()} años de experiencia en la industria tecnológica, especializado en aplicaciones web y móviles modernas. Construyo productos multiplataforma con Angular, React, Next.js y React Native.`,
      "Trabajo con metodologías ágiles (Scrum), colaboro con equipos multidisciplinarios y me adapto rápido a los cambios del proyecto. Con base en Barranquilla, Colombia, y abierto a trabajo remoto.",
    ],
    en: [
      `I'm a Front‑End Developer with over ${automaticDate()} years of experience in the tech industry, specialized in modern web and mobile applications. I build cross-platform products with Angular, React, Next.js, and React Native.`,
      "I work with agile methodologies (Scrum), collaborate with multidisciplinary teams, and adapt quickly to project changes. Based in Barranquilla, Colombia, and open to remote work.",
    ],
  },
  ficha: [
    { k: { es: "Ubicación", en: "Location" } as Bi, v: { es: "Barranquilla, Colombia", en: "Barranquilla, Colombia" } as Bi },
    { k: { es: "Idiomas", en: "Languages" } as Bi, v: { es: "Español", en: "Spanish" } as Bi },
    { k: { es: "Ahora", en: "Currently at" } as Bi, v: { es: "Binar10 Tecnología y Servicios", en: "Binar10 Tecnología y Servicios" } as Bi },
    { k: { es: "Modo", en: "Mode" } as Bi, v: { es: "Remoto · abierto a ofertas laborales", en: "Remote · open to job offers" } as Bi },
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
    "Wordpress",
    "CSS",
    "Bootstrap",
    "NGX-Bootstrap",
    "Expo",
    "Google Maps",
    "Git",
    "Scrum",
    "Vibe coding",
  ],
};

export type Rareza = "Legendario" | "Épico" | "Raro";

const RAREZAS: Record<Rareza, { bg: string; glow: string }> = {
  Legendario: { bg: "linear-gradient(100deg, #7CF7FF, #BC6CFF)", glow: "rgba(0,240,255,.6)" },
  "Épico": { bg: "linear-gradient(100deg, #BC6CFF, #7B4BFF)", glow: "rgba(188,108,255,.6)" },
  Raro: { bg: "linear-gradient(100deg, #6BB8FF, #4A6BFF)", glow: "rgba(107,184,255,.55)" },
};

export const RAREZA_LABEL: Record<Rareza, Bi> = {
  Legendario: { es: "Legendario", en: "Legendary" },
  "Épico": { es: "Épico", en: "Epic" },
  Raro: { es: "Raro", en: "Rare" },
};

// Proyectos reales del CV. `link` es opcional: si añades una URL, aparece un botón
// "Ver proyecto →" en la tarjeta. `desc` es bilingüe; el resto de campos no cambian con el idioma.
export const misiones = [
  {
    num: "#01",
    titulo: "Puntos saludables",
    empresa: "Binar10",
    desc: {
      es: "Página web con landing, dashboard que permite al usuario registrarse, iniciar sesión, cunsultar datos de comprar e interactuar y redimir bonos.",
      en: "A website with a landing page and dashboard where users can sign up, log in, check purchase data, interact with the platform, and redeem coupons.",
    } as Bi,
    tags: ["Nextjs", "google maps", "Tailwinds"],
    rareza: "Legendario" as Rareza,
    xp: "2 000",
    link: "https://puntossaludables.com/",
    images: ["/PS/1.png", "/PS/2.png", "/PS/3.png"],
  },
  {
    num: "#02",
    titulo: "Unidrogas",
    empresa: "Binar10",
    desc: {
      es: "Landing  y panel administrativo para usuarios que gestionan y administran productos de droguerías y empleados. Desarrollo y mantenimiento continuo.",
      en: "Landing page and admin panel for users who manage drugstore products and employees. Ongoing development and maintenance.",
    } as Bi,
    tags: ["Angular", "Bootstrap", "NGX-Bootstrap"],
    rareza: "Legendario" as Rareza,
    xp: "1 850",
    link: "https://unidrogas.com/",
    images: ["/Unidrogas/1.png", "/Unidrogas/2.png", "/Unidrogas/3.png"],
  },
  {
    num: "#03",
    titulo: "SuperaT",
    empresa: "Binar10",
    desc: {
      es: "Dashboard multi empresa, que trabajos con diferente tipos de información, usando herramientas modernas para la visualización de datos, ya sea graficos, mapas, o usando otras aplicaciones.",
      en: "Multi-company dashboard that works with different types of information, using modern tools for data visualization — charts, maps, or other integrated applications.",
    } as Bi,
    tags: ["Angular", "Google Maps", "RXJS", "NGX-Bootstrap"],
    rareza: "Legendario" as Rareza,
    xp: "1 700",
    link: "https://superat.co/",
    images: ["/SuperaT/1.png", "/SuperaT/2.png", "/SuperaT/3.png"],
  },
  {
    num: "#04",
    titulo: "GIMED",
    empresa: "Binar10",
    desc: {
      es: "Plataforma de venta de productos de droguería como parte del equipo de desarrollo principal, con renderizado del lado del servidor.",
      en: "Drugstore product sales platform built as part of the core development team, with server-side rendering.",
    } as Bi,
    tags: ["Angular", "Angular Universal", "RXJS", "NGX-Bootstrap"],
    rareza: "Épico" as Rareza,
    xp: "1 550",
    link: "https://www.gimed.com.co/",
    images: ["/GIMED/1.png", "/GIMED/2.png", "/GIMED/3.png"],
  },
  {
    num: "#05",
    titulo: "Dropopular",
    empresa: "Binar10",
    desc: {
      es: "Landing  y panel administrativo para usuarios que gestionan y administran productos de droguerías y empleados. Desarrollo y mantenimiento continuo.",
      en: "Landing page and admin panel for users who manage drugstore products and employees. Ongoing development and maintenance.",
    } as Bi,
    tags: ["Angular", "Bootstrap", "NGX-Bootstrap"],
    rareza: "Épico" as Rareza,
    xp: "1 400",
    link: "https://dropopular.com/",
    images: ["/Dropopular/1.png", "/Dropopular/2.png", "/Dropopular/3.png"],
  },
  {
    num: "#06",
    titulo: "Julienne",
    empresa: "Binar10",
    desc: {
      es: "E-commerce que permite a los usuarios visualizar e interactuar con los productos ofrecidos por la página, se puede filtrar por región y categorías.",
      en: "E-commerce site that lets users browse and interact with the products on offer, with filtering by region and category.",
    } as Bi,
    tags: ["Angular", "Bootstrap", "NGX-Bootstrap", "RXJS"],
    rareza: "Épico" as Rareza,
    xp: "1 250",
    link: "https://juliennecosmetic.com/",
    images: ["/Julienne/1.png", "/Julienne/2.png", "/Julienne/3.png"],
  },

  {
    num: "#07",
    titulo: "HSEQ Cloud",
    empresa: "Grupo HSEQ",
    desc: {
      es: "Apliación web que permite el control o administración de datos, ya sea usuarios, herramientas, roles, etc. ",
      en: "Web application for controlling and managing data such as users, tools, roles, and more.",
    } as Bi,
    tags: ["NextJS", "Tailwinds", "Firebase", "Google maps"],
    rareza: "Épico" as Rareza,
    xp: "1 150",
    link: "https://hseqcloud.com/",
    images: ["/HSEQ/1.png"],
  },
  {
    num: "#08",
    titulo: "Binar10",
    empresa: "Binar10",
    desc: {
      es: "Sitio web Landing, que permite ver servicios como desarrollo de software, marketing digital, ventas de productos, gestión de contenido hasta lograr la sistematización y automatización de tus operaciones.",
      en: "Landing website showcasing services such as software development, digital marketing, product sales, and content management to help systematize and automate business operations.",
    } as Bi,
    tags: ["Wordpress"],
    rareza: "Raro" as Rareza,
    xp: "950",
    link: "https://www.binar10.co/",
    images: ["/Binar10/1.png", "/Binar10/2.png", "/Binar10/3.png"],
  },
  // {
  //   num: "#09",
  //   titulo: "MOS",
  //   empresa: "Binar10",
  //   desc:
  //     "Tienda online de productos de belleza con pasarela de pago y soporte multi-idioma, desarrollada de extremo a extremo.",
  //   tags: ["Angular", "Pasarela de pago", "i18n", "RXJS"],
  //   rareza: "Raro" as Rareza,
  //   xp: "800",
  //   link: "",
  //   images: ["/MOS/1.jpg"],
  // },
  // {
  //   num: "#09",
  //   titulo: "GirosYa",
  //   empresa: "Binar10",
  //   desc:
  //     "Sitio web que permite a los usuarios hacer giros, solicitar información, y visualizarla.",
  //   tags: ["Angular", "Bootstrap", "NGX-Bootstrap"],
  //   rareza: "Raro" as Rareza,
  //   xp: "650",
  //   link: "",
  //   images: ["/GirosYa/1.png"],
  // },

].map((m) => ({ ...m, rarezaBg: RAREZAS[m.rareza].bg, rarezaGlow: RAREZAS[m.rareza].glow }));

export const statsIntro: Bi = {
  es: "Más allá del código: estas son las habilidades blandas que sostienen mi forma de trabajar en equipo, adaptarme a los cambios y resolver problemas día a día.",
  en: "Beyond the code: these are the soft skills behind how I work with teams, adapt to change, and solve problems every day.",
};

// El orden define la posición en el radar (empezando arriba y girando a la derecha).
export const ejes: { k: Bi; v: number; color: string }[] = [
  { k: { es: "Adaptabilidad", en: "Adaptability" }, v: 100, color: YELLOW },
  { k: { es: "Resolución de problemas", en: "Problem solving" }, v: 95, color: PRIMARY },
  { k: { es: "Trabajo en equipo", en: "Teamwork" }, v: 90, color: SECONDARY },
  { k: { es: "Comunicación", en: "Communication" }, v: 85, color: CYAN },
  { k: { es: "Pensamiento crítico", en: "Critical thinking" }, v: 85, color: BLUE },
  { k: { es: "Gestión del tiempo", en: "Time management" }, v: 90, color: RED },
];

export const contacto: { kicker: Bi; titulo: Bi; desc: Bi } = {
  kicker: { es: "Nueva partida", en: "New quest" },
  titulo: { es: "¿Buscas un Front‑End para tu equipo?", en: "Looking for a Front‑End dev for your team?" },
  desc: {
    es: "Estoy abierto a nuevas oportunidades. Escríbeme y te respondo en menos de 24 horas.",
    en: "I'm open to new opportunities. Reach out and I'll get back to you within 24 hours.",
  },
};

export const social: { label: Bi; href: string; download?: boolean }[] = [
  // { label: { es: "Email", en: "Email" }, href: "mailto:stevenruiz.p94@gmail.com" },
  // Nota: cvUrl ahora es bilingüe (perfil.cvUrl.es / .en), Footer no conoce el idioma actual,
  // así que si reactivas esto habría que resolverlo en el componente, no aquí.
  // { label: { es: "Ver CV", en: "View CV" }, href: perfil.cvUrl.es, download: true },
];

// Textos sueltos de la interfaz (kickers, títulos y etiquetas fijas de cada sección).
export const ui = {
  nav: {
    aria: { es: "Navegación", en: "Navigation" } as Bi,
  },
  player: {
    classLabel: { es: "Clase", en: "Class" } as Bi,
    missionLog: { es: "Registro de misión · 2016 → hoy", en: "Mission log · 2016 → present" } as Bi,
    ageTitle: { es: "Edad", en: "Age" } as Bi,
    years: { es: "años", en: "years old" } as Bi,
  },
  about: {
    kicker: { es: "Ficha del jugador", en: "Player sheet" } as Bi,
    title: { es: "Sobre mí", en: "About me" } as Bi,
  },
  missions: {
    kicker: { es: "Misiones completadas", en: "Missions completed" } as Bi,
    title: { es: "Proyectos destacados", en: "Featured projects" } as Bi,
    completed: { es: "completadas", en: "completed" } as Bi,
    viewProject: { es: "Ver proyecto", en: "View project" } as Bi,
    cover: { es: "Captura del proyecto", en: "Project screenshot" } as Bi,
  },
  stats: {
    kicker: { es: "Estadísticas de combate", en: "Combat stats" } as Bi,
    title: { es: "Atributos", en: "Attributes" } as Bi,
  },
  contact: {
    emailCopied: { es: "¡Correo copiado!", en: "Email copied!" } as Bi,
    downloadCv: { es: "Descargar CV", en: "Download CV" } as Bi,
  },
};
