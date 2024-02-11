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
        target: 'https://ankit1997.pythonanywhere.com', // Your backend server address prod https://ankit1997.pythonanywhere.com/ dev http://127.0.0.1:5000
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    cors: true,
    open: false,
  },
})
