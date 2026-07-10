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
    title: 'Nombre del cortometraje',
    category: 'video',
    thumb: { type: 'video', src: 'videos/corto-01-loop.mp4' },
    modalEmbed: { type: 'iframe', src: 'https://player.vimeo.com/video/000000000' },
    description: 'Descripción corta del proyecto: cliente, rol de Daniel, año.',
  },
  {
    id: 'comercial-01',
    title: 'Nombre del comercial',
    category: 'video',
    thumb: {
      type: 'iframe',
      src: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0',
    },
    modalEmbed: { type: 'iframe', src: 'https://www.youtube.com/embed/VIDEO_ID' },
    description: 'Descripción corta del proyecto: cliente, rol de Daniel, año.',
  },
  {
    id: 'cancion-01',
    title: 'Nombre de la canción',
    category: 'audio',
    thumb: {
      type: 'iframe',
      src: 'https://w.soundcloud.com/player/?url=https://soundcloud.com/usuario/track&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false',
    },
    modalEmbed: {
      type: 'iframe',
      src: 'https://w.soundcloud.com/player/?url=https://soundcloud.com/usuario/track&color=%23000000&auto_play=true',
    },
    description: 'Descripción corta: en qué consistió la producción, mezcla o master.',
  },
  {
    id: 'album-01',
    title: 'Nombre del álbum o EP',
    category: 'composicion',
    thumb: {
      type: 'iframe',
      src: 'https://bandcamp.com/EmbeddedPlayer/album=0000000000/size=large/bgcol=ffffff/linkcol=000000/artwork=small/track=0000000000/transparent=true/',
    },
    modalEmbed: {
      type: 'iframe',
      src: 'https://bandcamp.com/EmbeddedPlayer/album=0000000000/size=large/bgcol=ffffff/linkcol=000000/tracklist=true/artwork=small/transparent=true/',
    },
    description: 'Descripción corta: instrumentación, año, para qué proyecto se compuso.',
  },
];
