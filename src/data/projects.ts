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
}

export const projects: Project[] = [
  {
    id: 'corto-01',
    title: 'Social Media 1',
    category: 'video',
    thumb: { type: 'video', src: 'videos/corto-01-loop.mp4' },
    modalEmbed: { type: 'iframe', src: 'https://player.vimeo.com/video/000000000' },
    description: 'Coro Filarmonico Juvenil de Bogotá, 2026',
  },
  {
    id: 'corto-02',
    title: 'Social Media 2',
    category: 'video',
    thumb: { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0', },
    modalEmbed: { type: 'iframe', src: 'https://www.youtube.com/embed/VIDEO_ID' },
    description: 'Coro Filarmonico Juvenil de Bogotá, 2026, rol de Daniel, año.',
  },
  {
    id: 'corto-03',
    title: 'Show Reel',
    category: 'video',
    thumb: { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0', },
    modalEmbed: { type: 'iframe', src: 'https://www.youtube.com/embed/VIDEO_ID' },
    description: 'Descripción corta del proyecto: cliente, rol de Daniel, año.',
  },
  {
    id: 'corto-05',
    title: 'Recopilación',
    category: 'video',
    thumb: { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0', },
    modalEmbed: { type: 'iframe', src: 'https://www.youtube.com/embed/VIDEO_ID' },
    description: 'Descripción corta del proyecto: cliente, rol de Daniel, año.',
  },
];
