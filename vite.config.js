import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  }
})

//correct title
//audio plays
//timer shows and hides onClick
//timer starts on click
//light/dark mode correct
//image changes w/ light/dark mode