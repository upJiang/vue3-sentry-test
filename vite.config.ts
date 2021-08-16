import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import importerPlugin from 'vite-plugin-importer'; // <---
import legacyPlugin from '@vitejs/plugin-legacy';
import path from 'path';

const { resolve } = require('path')

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 使用 antd 的 less 样式 需要开启
      }
    },
  },
  plugins: [
    vue(),
    importerPlugin({ 
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: true // less
    }),
    // 配置低浏览器版本兼容，如此构建时，vite 将按 targets 配置编译产物。
    legacyPlugin({
      targets: ['defaults', 'not IE 11']
    })
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/gapi/mock': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gapi/, '')
      },
      '/gapi': {
        target: 'https://globaldev.zkcserv.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gapi/, '')
      },
    },
    open: true,
  },
  // 打包构建环境
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html')
      }
    }
  }
});
