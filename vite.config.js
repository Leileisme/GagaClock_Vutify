// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
// 引入 vite 的 google 分析打包工具(引入方式依文件)
import { VitePluginRadar } from 'vite-plugin-radar'
import { VitePWA } from 'vite-plugin-pwa'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    vuetify({
      autoImport: true
    }),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900'
        }]
      }
    }),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-X57R0M4Q2L'
      }
    }),
    // PWA 設定
    VitePWA({
      // 設定快取自動更新
      registerType: 'autoUpdate',
      // Service Worker 產生設定
      workbox: {
        // 清除過期快取
        cleanupOutdatedCaches: true,
        // 快取檔案路徑
        globPatterns: [
          // 任意資料夾內任意檔名，符合這些的副檔名檔案
          '**/*.{html,css,js,woff,eot,ttf,woff2,ico,jpg,jpeg,png,svg,gif}**'
        ],
        // 忽略網址參數，預設不會快取有參數的檔案或頁面
        ignoreURLParametersMatching: [/.*/]
      },
      // PWA要有的Json的設定檔，打包的時候會自動產生，開發模式看不到
      manifest: {
        // 名稱 有兩個
        name: 'Gaga 嘎嘎鐘',
        short_name: 'Gaga 嘎嘎鐘',
        // 工作列的顏色
        theme_color: '#00FFFF',
        // 啟動畫面的背景色
        background_color: '#000',
        // 啟動網址
        start_url: './',
        //  PWA 顯示範圍，超出範圍會啟動瀏覽器
        scope: './',
        // 顯示方式
        display: 'standalone',
        icons: [
          {
            src: './android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  server: {
    port: 3000
  }
})
