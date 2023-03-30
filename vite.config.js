import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { terser } from 'rollup-plugin-terser'
import imageminPlugin from 'vite-plugin-imagemin'
import ssr from 'vite-ssr/plugin'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), tailwindcss(),
    imageminPlugin({
      gifsicle: { optimizationLevel: 3, interlaced: true },
      mozjpeg: { quality: 75, progressive: true },
      optipng: { optimizationLevel: 7 },
      pngquant: { quality: [0.75, 0.9], speed: 1 },
      svgo: { plugins: [{ removeViewBox: false }] },
      cache: true,
    }),
    ssr(),

  ],
  appType: 'spa',

  preview: {
    port: 3000,
    open: true,
  },

  optimizeDeps: {
    include: ['linked-dep'],
  },
  mode: 'production',
  build: {
    sourcemap: true,
    ssrManifest: true,
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },

    server: {
      hmr: {
        port: 443
      }
    },

    rollupOptions: {
      plugins: [terser()],
      output: {
        manualChunks(id) {
          if (id.includes('/src/')) {
            return 'app';
          }
          if (id.includes('/node_modules/')) {
            return 'vendor';
          }
        }
      }
  }
  },

  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    },
  },
})
