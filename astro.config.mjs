// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // SUBSTITUA "SEU_USUARIO" PELO SEU NOME NO GITHUB (Ex: Crise-Ergodica)
  site: 'https://Crise-Ergodica.github.io',

  // O nome do seu repositório (a pasta do projeto no GitHub)
  base: '/abraxas',

  integrations: [mdx()],
});