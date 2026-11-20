import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Dirección IPv4 fija y puerto propio: evita que algunos navegadores (Brave)
  // resuelvan "localhost" a otro servidor o a una dirección donde Vite no escucha.
  server: {
    host: '127.0.0.1',
    port: 5180,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 5180,
  },
})
