# Proyecto: Portafolio de Daniel Coronado

## Qué es esto
Sitio de portafolio para un editor de video. Lo estoy construyendo yo mismo mientras aprendo Astro y Tailwind CSS simultáneamente. Tengo bases de HTML pero necesito aprender CSS

## Stack técnico
- Astro, con output estático (sin SSR).
- Tailwind CSS v4 — usa el plugin de Vite (@tailwindcss/vite), NO el
  paquete antiguo @astrojs/tailwind ni tailwind.config.js. Si en algún
  momento sugieres algo con esa sintaxis vieja, detente y usa el
  enfoque de v4.
- Sin frameworks de componentes adicionales (nada de React/Vue) — solo
  Astro + Tailwind.
- Cuando utilices Tailwind, usa solamente la sintaxis que sugiere la extension Tailwind CSS IntelliSense
- Iconos: Lucide.
- Despliegue: GitHub Pages vía GitHub Actions (build automático en
  cada push a main).
- Siempre cuando me ayudes a construir codigo, que sea organizado, modular y facil de leer.

## Referencia de estilo
El sitio debe verse parecido a maraocejo.com: nav fija con logo/nombre
centrado, tipografía grande, mucho espacio en blanco, grilla de
proyectos filtrable por categoría.
Tambien puedes tomar de referencia https://alexmcdaris.com

## Diferencias importantes respecto a la referencia
- El detalle de cada proyecto vive en su propia página, generada con
  una ruta dinámica de Astro (`src/pages/proyectos/[id].astro` +
  `getStaticPaths()`), en vez de un modal sobre la misma página. Se
  decidió así después de migrar a Astro: como el nav/footer ya viven
  una sola vez en `Layout.astro`, tener páginas separadas por proyecto
  no duplica nada (el problema que el modal evitaba en la versión
  HTML plana original ya no existe en Astro).
- Sin formulario de contacto. En su lugar: links a redes sociales +
  correo (mailto:).
- Los "thumbnails" de la grilla son videos en loop o embeds de
  Vimeo/YouTube (para trabajos de edición) — no fotos fijas.

## Mapa del sitio
1. Inicio — grilla de proyectos con filtro por categoría
2. Sobre mí — bio corta, foto
3. Contacto — links a redes + correo

## Cómo trabajar conmigo
- Estoy aprendiendo Astro y Tailwind mientras construyo esto. Cuando
  uses algo específico de Astro (slots, frontmatter, content
  collections, etc.) o una clase de Tailwind poco obvia, explícamelo
  brevemente antes o después del código.
- Prefiero avanzar en pasos pequeños (una sección o componente a la
  vez) en vez de generar el sitio completo de una sola vez.
- Cuando sea relevante, explícame qué cambia respecto a HTML/CSS
  plano, para entender la equivalencia con lo que ya sé.
- Siempre explicame todo como si fuera nuevo en cada concepto.
  ya que hay cosas que no se, sin embargo, puedes ser eficiente a la hora de explicar conceptos

## Comandos
- `npm run dev` — servidor local de desarrollo
- `npm run build` — genera el sitio estático en /dist
- `npm run preview` — previsualiza el build de producción