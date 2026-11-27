// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://workelana.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // External CSS only, so the CSP can forbid inline styles.
    inlineStylesheets: 'never',
  },
  devToolbar: { enabled: false },
});
