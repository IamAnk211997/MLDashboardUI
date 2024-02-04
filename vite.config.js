import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@action': '/src/action',
      '@selector': '/src/selector', 
      '@assets': '/src/assets', 
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Your backend server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    cors: true,
    open: false,
  },
})
