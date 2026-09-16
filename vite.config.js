import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages supplies its path during the manual workflow build.
  base: process.env.BASE_PATH || '/findhorn-market/',
})
