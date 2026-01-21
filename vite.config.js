import { defineConfig } from 'vite'

export default defineConfig(async ({ command }) => {
  const react = (await import('@vitejs/plugin-react')).default()
  return {
    plugins: [react()]
  }
})
