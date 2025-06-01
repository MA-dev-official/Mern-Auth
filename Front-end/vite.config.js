import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    allowedHosts: [
      'ebad88d5-ce5b-4705-a17b-bc2d52018a9d-00-u84o69repm2g.pike.replit.dev'
    ]
  },
})
