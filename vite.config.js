import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  server: {
    proxy: {
      '/spline-proxy': {
        target: 'https://prod.spline.design',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/spline-proxy/, ''),
        headers: {
          'Origin': 'https://my.spline.design',
          'Referer': 'https://my.spline.design/'
        }
      }
    }
  },

  build: {
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})