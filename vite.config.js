import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/store-geracao-tech",
  build: { outDir: 'dist'},
  publicDir: 'public'
})
