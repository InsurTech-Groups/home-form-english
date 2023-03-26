import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  appType: 'spa',

  preview: {
    port: 3000,
    open: true,
  },

  optimizeDeps: {
    include: ['linked-dep'],
  },
  build: {
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },

    rollupOptions: {
      output:{
          manualChunks(id) {
              if (id.includes('node_modules')) {
                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
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
