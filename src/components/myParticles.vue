<template>
  <div id="particles-js"></div>
</template>

<script setup>
import { onMounted } from 'vue'
// // 在 index.js 可以引入?
// //  https://github.com/VincentGarreau/particles.js
// import { mounted } from 'vue'
// import particlesJS from 'particles.js'
// import app from '../particles/app.js'

// mounted(() => {
//   // 在组件挂载后初始化 particles.js
//   particlesJS('particles-js', {
//     app
//     // particles.js 的配置选项
//     // 你可以根据需要在这里设置粒子效果的各种参数
//   })
// })

// window 都可以省略，但是因為這邊是 eslint 所以要加
// '/particles.json' 這邊要 json檔，且必要放到 public 裡面，因為到網頁後再 get 請求
onMounted(() => {
  window.particlesJS.load('particles-js', './particles.json', function () {
    console.log('callback - particles-js config loaded')
  })
})
</script>
