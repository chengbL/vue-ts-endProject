import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '127.0.0.1', // !!指定服务器应该监听哪个 IP 地址
    port: 8888, // !!指定开发服务器端口
    strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    open: true, // 开发服务器启动时，自动在浏览器中打开应用程序
    https: false // 是否开启 https
  },
  css: {
    // https://cn.vitejs.dev/config/#css-preprocessoroptions
    preprocessorOptions: {
      less: {
        additionalData: `
             @import "@/assets/styles/variables.less";
             @import "@/assets/styles/mixins.less";
           `
      }
    }
  }
})
