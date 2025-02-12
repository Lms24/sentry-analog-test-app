/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
    sourcemap: true,
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      vite: { experimental: { supportAnalogFormat: true } },
      nitro: {
        sourceMap: true,
        rollupConfig: {
          output: {
            sourcemapExcludeSources: false,
          },
        },
      },
    }),
    sentryVitePlugin({
      org: 'sentry-sdks',
      project: 'javascript-angular-ir',
      authToken: '',
      sourcemaps: {
        filesToDeleteAfterUpload: [],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
