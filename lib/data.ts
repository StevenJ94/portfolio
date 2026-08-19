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
  clase: {
    es: "Desarrollador Front-End y Móvil",
    en: "Front-End & Mobile Developer",
  } as Bi,
  nivel: 32,
  edad: calcularEdad(),
  estado: {
    es: "Disponible para nuevas oportunidades",
    en: "Available for new opportunities",
  } as Bi,
  tagline: {
    es: `Desarrollador Front-End y Móvil con más de ${automaticDate()} años de experiencia creando aplicaciones web y móviles modernas, escalables y centradas en la experiencia de usuario. Especializado en Angular, React, Next.js y React Native.`,
    en: `Front-End & Mobile Developer with +${automaticDate()} years of experience creating modern, scalable web and mobile applications focused on user experience. Specialized in Angular, React, Next.js and React Native.`,
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
};

export const navItems: { id: string; href: string; label: Bi; color: string }[] = [
  { id: "top", href: "#top", label: { es: "Perfil", en: "Profile" }, color: "#00F0FF" },
  { id: "sobre", href: "#sobre", label: { es: "Sobre mí", en: "About me" }, color: "#8AFF00" },
  { id: "misiones", href: "#misiones", label: { es: "Proyectos", en: "Projects" }, color: "#BC6CFF" },
  { id: "stats", href: "#stats", label: { es: "Habilidades", en: "Skills" }, color: "#FFCA06" },
  { id: "contacto", href: "#contacto", label: { es: "Contacto", en: "Contact" }, color: "#FF5CA8" },
];

// Paleta neón reutilizable
const PRIMARY = "#FF5CA8";
const SECONDARY = "#BC6CFF";
const CYAN = "#00F0FF";
const BLUE = "#6BB8FF";
const GREEN = "#8AFF00";
const YELLOW = "#FFCA06";


export const vitals: { label: Bi; valor: Bi; nota: Bi; color: string }[] = [
  {
    label: { es: "Experiencia", en: "Experience" },
    valor: { es: "+" + automaticDate(), en: "+" + automaticDate() },
    nota: { es: "Años en la industria", en: "Years in the industry" },
    color: SECONDARY,
  },
  {
    label: { es: "Proyectos", en: "Projects" },
    valor: { es: "+6", en: "+6" },
    nota: { es: "En producción", en: "In production" },
    color: PRIMARY,
  },
  {
    label: { es: "Especialidad", en: "Specialization" },
    valor: { es: "5", en: "5" },
    nota: { es: "Angular, React, Next.js, React Native", en: "Angular, React, Next.js, React Native" },
    color: CYAN,
  },
  {
    label: { es: "Enfoque", en: "Focus" },
    valor: { es: "Optimización", en: "Optimization" },
    nota: { es: "Resolución de problemas", en: "Problem solving" },
    color: BLUE,
  },
  {
    label: { es: "IA", en: "AI" },
    valor: { es: "Automatización", en: "Automation" },
    nota: { es: "Innovación", en: "Innovation" },
    color: YELLOW,
  },
  {
    label: { es: "Metodología", en: "Methodology" },
    valor: { es: "Scrum", en: "Scrum" },
    nota: { es: "Colaboración", en: "Collaboration" },
    color: GREEN,
  },
];

export const registro: { rol: Bi; empresa: string; periodo: Bi; color: string; desc: Bi }[] = [
  {
    rol: { es: "Desarrollador Front-End", en: "Front-End Developer" },
    empresa: "Binar10 Tecnología y Servicios",
    periodo: { es: "2019 — Hoy", en: "2019 — Present" },
    color: SECONDARY,
    desc: {
      es: "E-commerce y dashboards administrativos con Angular, Angular Universal, RXJS y NGX-Bootstrap.",
      en: "E-commerce platforms and admin dashboards built with Angular, Angular Universal, RxJS, and NGX-Bootstrap.",
    },
  },
  {
    rol: { es: "Desarrollador Móvil y Front-End", en: "Mobile & Front-End Developer" },
    empresa: "Grupo HSEQ",
    periodo: { es: "2025 — 2026", en: "2025 — 2026" },
    color: CYAN,
    desc: {
      es: "Aplicaciones móviles con React Native y Expo para trabajo de campo y cumplimiento normativo.",
      en: "Mobile applications built with React Native and Expo for field work and regulatory compliance.",
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
      "Me gusta transformar ideas y necesidades en productos digitales funcionales, intuitivos y bien estructurados. A lo largo de mi experiencia he tenido la oportunidad de participar en proyectos de diferentes sectores, adaptándome a nuevos equipos, retos y formas de trabajo. Disfruto encontrar soluciones prácticas, resolver problemas y cuidar los detalles que hacen que un producto sea más fácil de usar y mantener.",
      "Actualmente vivo en Barranquilla, Colombia, y estoy abierto a nuevas oportunidades de trabajo remoto. Busco seguir desarrollándome en entornos dinámicos, asumir nuevos desafíos y participar en proyectos que me permitan ampliar mis conocimientos y continuar creciendo profesionalmente.",
    ],
    en: [
      "I enjoy turning ideas and needs into functional, intuitive and well-structured digital products. Throughout my career, I have had the opportunity to work on projects across different industries, adapting to new teams, challenges and ways of working. I enjoy finding practical solutions, solving problems and paying attention to the details that make a product easier to use and maintain.",
      "I'm currently based in Barranquilla, Colombia, and open to new remote opportunities. I'm looking to continue growing professionally, take on new challenges and work on projects that allow me to expand my knowledge and keep learning.",
    ],
  },
  ficha: [
    { k: { es: "Ubicación", en: "Location" } as Bi, v: { es: "Barranquilla, Colombia", en: "Barranquilla, Colombia" } as Bi },
    { k: { es: "Idiomas", en: "Languages" } as Bi, v: { es: "Español e Inglés", en: "Spanish & English" } as Bi },
    { k: { es: "Ahora", en: "Currently at" } as Bi, v: { es: "Binar10 Tecnología y Servicios", en: "Binar10 Tecnología y Servicios" } as Bi },
    { k: { es: "Modo", en: "Mode" } as Bi, v: { es: "Remoto · abierto a ofertas laborales", en: "Remote · open to job offers" } as Bi },
  ],
  herramientas: [
    "Angular",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "RXJS",
    "Angular Universal",
    "SSR",
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "NGX-Bootstrap",
    "Responsive UI",
    "Expo",
    "iOS & Android",
    "NodeJS",
    "Mongo DB",
    "Firebase",
    "Firebase Auth",
    "REST APIs",
    "Google Maps API",
    "Dashboards",
    "Data Viz",
    "SEO",
    "Web Performance",
    "Git",
    "Scrum",
    "Agile",
    "Wordpress",
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
    titulo: "Puntos Saludables",
    empresa: "Binar10",
    desc: {
      es: "Plataforma web que permite a los usuarios registrarse, consultar información sobre sus compras, acumular beneficios y redimir bonos. Estuve a cargo del desarrollo de la plataforma y de la construcción de la experiencia de usuario.",
      en: "Web platform that allows users to register, view information about their purchases, earn benefits and redeem rewards. I was responsible for developing the platform and building the user experience.",
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
      es: "Página web y panel administrativo para la gestión de productos, usuarios y empleados de una cadena de droguerías. Trabajé en el desarrollo y mantenimiento de sus diferentes módulos, incorporando mejoras de acuerdo con las necesidades del proyecto.",
      en: "Website and administrative dashboard for managing products, users and employees within a pharmacy chain. I worked on the development and maintenance of its different modules, implementing improvements based on the project's needs.",
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
      es: "Dashboard multiempresa que trabaja con diferentes tipos de información y permite visualizarla mediante gráficos, mapas y elementos interactivos. Me enfoqué en la construcción de componentes y herramientas para presentar los datos de forma clara e interactiva.",
      en: "Multi-company dashboard that works with different types of information and allows users to visualize data through charts, maps and interactive elements. I focused on building components and tools to present data in a clear and interactive way.",
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
      es: "Plataforma web para la comercialización de productos de droguería, desarrollada con funcionalidades de e-commerce y renderizado del lado del servidor. Participé en el desarrollo e implementación de diferentes funcionalidades de la plataforma.",
      en: "Web platform for selling pharmaceutical products, featuring e-commerce functionality and server-side rendering. I participated in the development and implementation of different platform features.",
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
      es: "Página web y panel administrativo para la gestión de productos, usuarios y empleados de una cadena de droguerías. Formé parte del equipo encargado de construir y mantener los diferentes módulos de la plataforma.",
      en: "Website and administrative dashboard for managing products, users and employees within a pharmacy chain. I was part of the team responsible for building and maintaining the platform's different modules.",
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
      es: "Plataforma e-commerce para la visualización y comercialización de productos, con filtros por región y categoría para facilitar la navegación y búsqueda. Trabajé principalmente en la interfaz, la navegación y las herramientas de filtrado del sitio.",
      en: "E-commerce platform for showcasing and selling products, with filters by region and category to make navigation and product discovery easier. I primarily worked on the interface, navigation and filtering tools.",
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
      es: "Aplicación web para la administración y control de usuarios, herramientas, roles y diferentes tipos de información. Participé en la construcción de la plataforma y en la conexión con servicios como Firebase y Google Maps.",
      en: "Web application for managing and monitoring users, tools, roles and different types of information. I participated in building the platform and integrating services such as Firebase and Google Maps.",
    } as Bi,
    tags: ["NextJS", "Tailwinds", "Firebase", "Google maps"],
    rareza: "Épico" as Rareza,
    xp: "1 150",
    link: "https://hseqcloud.com/",
    images: ["/HSEQ/1.png"],
  },
  {
    num: "#08",
    titulo: "Binario",
    empresa: "Binar10",
    desc: {
      es: "Sitio web corporativo enfocado en presentar servicios de desarrollo de software, marketing digital, gestión de contenidos y automatización de procesos. Trabajé en la construcción del sitio y en la organización de su contenido para presentar los servicios de forma clara.",
      en: "Corporate website focused on showcasing software development, digital marketing, content management and process automation services. I worked on building the website and organizing its content to clearly communicate the company's services.",
    } as Bi,
    tags: ["Wordpress"],
    rareza: "Raro" as Rareza,
    xp: "950",
    link: "https://www.binar10.co/",
    images: ["/Binar10/1.png", "/Binar10/2.png", "/Binar10/3.png"],
  },
].map((m) => ({ ...m, rarezaBg: RAREZAS[m.rareza].bg, rarezaGlow: RAREZAS[m.rareza].glow }));

export const statsIntro: Bi = {
  es: "Más allá del código, me interesa mantener una forma de trabajo flexible, colaborativa y orientada a encontrar soluciones. Estos principios me acompañan en cada proyecto y en la manera en que afronto nuevos retos.",
  en: "Beyond coding, I value a flexible, collaborative and solution-oriented approach to work. These principles guide me throughout each project and shape the way I approach new challenges.",
};

// El orden define la posición en el radar (empezando arriba y girando a la derecha).
export const ejes: { k: Bi; v: number; color: string }[] = [
  { k: { es: "Adaptabilidad", en: "Adaptability" }, v: 100, color: YELLOW },
  { k: { es: "Resolución de problemas", en: "Problem solving" }, v: 95, color: PRIMARY },
  { k: { es: "Trabajo en equipo", en: "Teamwork" }, v: 90, color: SECONDARY },
  { k: { es: "Comunicación", en: "Communication" }, v: 85, color: CYAN },
  { k: { es: "Pensamiento crítico", en: "Critical thinking" }, v: 85, color: BLUE },
  { k: { es: "Gestión del tiempo", en: "Time management" }, v: 90, color: GREEN },
];

export const contacto: { kicker: Bi; titulo: Bi; desc: Bi } = {
  kicker: { es: "Nueva partida", en: "New quest" },
  titulo: { es: "¿Tienes un proyecto en mente?", en: "Do you have a project in mind?" },
  desc: {
    es: "Estoy abierto a nuevas oportunidades y retos. Hablemos sobre cómo puedo aportar a tu próximo proyecto.",
    en: "I'm open to new opportunities and challenges. Let's talk about how I can contribute to your next project.",
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
    title: { es: "Sobre mí", en: "About Me" } as Bi,
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
    title: { es: "Habilidades", en: "Skills" } as Bi,
  },
  contact: {
    emailCopied: { es: "¡Correo copiado!", en: "Email copied!" } as Bi,
    downloadCv: { es: "Descargar CV", en: "Download CV" } as Bi,
  },
};
