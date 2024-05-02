import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      types: fileURLToPath(new URL('./src/types', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/components/icons.ts', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://91.220.155.235:8080/FrontTestingService-0.0.1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/auth': {
        target: 'http://91.220.155.235:8080/auth-service/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '')
      }
    }
  }
})
