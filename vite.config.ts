import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  //  生产环境
  build: {
    //指定输出路径
    assetsDir: "./",
    // 指定输出文件路径
    outDir: "dist",
  },
  server: {
    host: '0.0.0.0',
    port: 4000 // 设置服务启动端口号
    //    cors: true // 允许跨域

    //    // 设置代理，根据我们项目实际情况配置
    //    // proxy: {
    //    //   '/api': {
    //    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //    //     changeOrigin: true,
    //    //     secure: false,
    //    //     rewrite: (path) => path.replace('/api/', '/')
    //    //   }
    //    // }
  }
})
