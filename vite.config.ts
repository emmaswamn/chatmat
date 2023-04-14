import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/utils/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue(), svgBuilder('./src/assets/svg/')],

  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://124.70.16.88:21677',
        changeOrigin: true,
      },
    },
  },
})
