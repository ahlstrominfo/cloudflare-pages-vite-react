import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 8787, // Your desired port
    proxy: {
      '/api': {
        target: 'http://localhost:8788/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})