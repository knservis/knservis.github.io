import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://knserv.is',
  base: '/msn',
  output: 'static',
  outDir: '../dist/msn',
});
