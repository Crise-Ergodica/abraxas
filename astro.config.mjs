// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // SUBSTITUA PELA SUA URL DO GITHUB
  // Exemplo: https://aurora.github.io (sem a subpasta aqui)
  site: 'crise-ergodica.github.io',

  // O nome do seu repositório (a subpasta)
  // Se o seu repo chama "abraxas", mantenha assim.
  base: '/abraxas',

  integrations: [mdx()],
});