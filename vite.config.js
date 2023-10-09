import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 在渲染进程中访问ipcrender
import renderer from 'vite-plugin-electron-renderer'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), renderer()],
  base: './',    // 新增
  root: __dirname,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    }
  },
})
