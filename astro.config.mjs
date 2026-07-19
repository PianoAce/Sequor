// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Reemplaza "tu-usuario" y "nombre-del-repo" cuando crees el repositorio en GitHub.
  // Si el repo se llama exactamente "tu-usuario.github.io", quita la línea "base" por completo.
  site: 'https://PianoAce.github.io',
  base: '/Sequor/',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
