export type ProjectCategory = 'video' | 'audio' | 'composicion';

// "video": archivo propio en public/, se sirve con el "base" del sitio como prefijo.
// "iframe": embed externo (Vimeo/YouTube/SoundCloud/Bandcamp), URL absoluta tal cual.
type LocalVideo = { type: 'video'; src: string };
type Embed = { type: 'iframe'; src: string };

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumb: LocalVideo | Embed;
  modalEmbed: LocalVideo | Embed;
  description: string;
  // Habilidades que demuestra ESTE video puntual (no la ficha técnica del
  // proyecto) — se muestra en la página de detalle, debajo de description.
  skills: string;
  // Opcional: ruta relativa a src/assets/proyectos/, ej. "corto-01/foto-1.jpg".
  // Astro las optimiza en el build (astro:assets). Si un proyecto no tiene
  // imágenes, simplemente se omite el campo.
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'corto-01',
    title: 'Social Media 1',
    category: 'video',
    thumb: { type: 'video', src: 'videos/prueba.mp4' },
    modalEmbed: { type: 'iframe', src: 'https://www.youtube.com/embed/obPC8TOTaQs' },
    description: 'Coro Filarmonico Juvenil de Bogotá, 2026, Version 1',
    skills: 'Mi trabajo va desde videos documentales, cortos, hasta videos para redes.',
  },
  {
    id: 'corto-02',
    title: 'Social Media 2',
    category: 'video',
    thumb: { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0', },
    modalEmbed: { type: 'iframe', src: 'https://www.youtube.com/embed/VIDEO_ID' },
    description: 'Coro Filarmonico Juvenil de Bogotá, 2026, Version 2.',
    skills: 'Mi trabajo va desde videos documentales, cortos, hasta videos para redes.',
  },
  {
    id: 'corto-03',
    title: 'Show Reel',
    category: 'video',
    thumb: { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0', },
    modalEmbed: { type: 'iframe', src: 'https://www.youtube.com/embed/VIDEO_ID' },
    description: '2026.',
    skills: 'He tenido la oportunidad de trabajar para: Universidad Nacional de Colombia, Catedra Bogotá Musical Internacional, Figurante, UNAL Inclusiva. Usando mis conocimientos en la suite de Adobe y usando diferentes técnicas de storytelling y Sound Design para otorgarle un mayor impacto e interés a los videos.',
    images: ['corto-03/foto-1.png', 'corto-03/foto-2.png'],
  },
  {
    id: 'corto-05',
    title: 'Recopilación',
    category: 'video',
    thumb: { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0', },
    modalEmbed: { type: 'iframe', src: 'https://www.youtube.com/embed/VIDEO_ID' },
    description: '2026.',
    skills: 'Primer video: Historia divulgativa para enseñar a más de 700 estudiantes a entender lo que son los formatos musicales, qué instrumentos los conforman y cuántos de ellos. Segundo video: Un corto de horror para divulgar y enseñar sobre las articulaciones musicales y sus ejemplos, con personajes propios y una historia con un desenlace inesperado. Tercer video: Mini-Documental que visibiliza las problemáticas estructurales del conservatorio de la Universidad Nacional que afectan a toda la comunidad universitaria, y especialmente a personas con discapacidad. ',
    images: ['corto-04/foto-1.1.png', 'corto-04/foto-1.2.png'],
  },
];
