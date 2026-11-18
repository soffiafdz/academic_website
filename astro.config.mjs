// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sofiafdzl.com',
  // About was folded into the home page. public/_redirects answers with a
  // 301 on the host; this page is the fallback wherever that file is ignored.
  redirects: {
    '/about': '/',
  },
});
