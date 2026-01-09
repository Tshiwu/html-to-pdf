import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages 部署需要设置 base 路径
  // 如果仓库名是 html-to-pdf，则 base 为 '/html-to-pdf/'
  // 如果部署到自定义域名，可以设置为 '/'
  base: process.env.NODE_ENV === 'production' ? '/html-to-pdf/' : '/',
  server: {
    port: 3020,
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
