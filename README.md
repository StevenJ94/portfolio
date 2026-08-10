# Portafolio de Steven — "Player Card"

Portafolio personal con estética de tarjeta de personaje de videojuego (RPG), hecho con **Next.js (App Router) + TypeScript**. Fondo de hexágonos reactivo al cursor, nav lateral con scroll-spy, inclinación 3D en las tarjetas, animaciones de entrada, contadores y un radar hexagonal de habilidades.

Recreado tomando como referencia el diseño "Player Card".

## Requisitos

- Node.js 18.18+ (recomendado 20/22). Este proyecto se probó con Node 24.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

Para producción:

```bash
npm run build
npm run start
```

## Cómo personalizar el contenido

**Todo el contenido está en un solo archivo:** [`lib/data.ts`](lib/data.ts).

Ahí editas:

- `perfil` — nombre, clase (rol), rango, nivel, estado, tagline, email, CV, avatar.
- `vitals` — las 4 métricas destacadas de la tarjeta.
- `registro` — tu experiencia / historial (el "registro de misión").
- `sobreMi` — párrafos, ficha (base, idiomas, etc.) y lista de herramientas.
- `misiones` — tus proyectos (título, descripción, tags, rareza y XP).
- `ejes` — tus habilidades y su valor 0–100 (alimentan el radar y las barras).
- `contacto`, `social` — textos y enlaces de contacto.

### Fotos

- **Avatar:** pon una imagen en `/public` (p. ej. `public/avatar.jpg`) y en `perfil.avatar`
  escribe `"/avatar.jpg"`. Si lo dejas vacío se muestra un monograma.
- **Capturas de proyectos:** puedes extender `misiones` y el componente `ImageSlot`
  para pasar una imagen por proyecto. Por defecto muestran un placeholder.

### Colores

La paleta neón se define como variables CSS en [`app/globals.css`](app/globals.css)
(`--cyan`, `--purple`, `--pink`, `--primary`, `--secondary`, …).

## Estructura

```
app/
  layout.tsx      Fuentes (Space Grotesk + IBM Plex Mono) y metadata
  page.tsx        Ensambla todas las secciones
  globals.css     Tokens, animaciones y estilos de componentes
components/
  HexCanvas.tsx   Fondo de hexágonos (canvas, cliente)
  ScrollFX.tsx    Reveal, contadores, tilt 3D, parallax y scroll-spy (cliente)
  ImageSlot.tsx   Imagen o placeholder
  sections/       NavRail, PlayerCard, About, Missions, Stats, Contact, Footer
lib/
  data.ts         👈 TODO el contenido editable
```
