import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admission: resolve(__dirname, 'admission.html'),
        classes: resolve(__dirname, 'classes.html'),
        vacancies: resolve(__dirname, 'vacancies.html'),
      },
    },
  },
})
