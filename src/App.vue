<template>
  <v-app >
      <!-- 導覽列 -->
      <v-app-bar  height="80" class="appBar">
        <v-container class="d-flex align-center">
          <v-app-bar-title  class="text-md-h4 font-weight-bold" style="line-height: 1">Pomodoro 番茄鐘</v-app-bar-title>
          <v-btn class="text-md-h6" style="line-height: 1" prepend-icon=" mdi-home"  to="/">首頁</v-btn>
          <v-btn  class="text-md-h6"  style="line-height: 1"  prepend-icon=" mdi-playlist-edit"  to="/list">清單</v-btn>

          <SettingView></SettingView>
        </v-container>
      </v-app-bar>

      <v-main class="main">
        <!-- <div id="particles-js"></div> -->
        <!-- <particles id="particles-js" :options="particlesConfig"></particles> -->
        <div id="tsparticles"></div>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import SettingView from './components/SettingView.vue'
// 安裝 npm i particles.js 套件，並引入(下面失效)
// import * as particlesJS from 'particles.js'
import './particles/particles.min'
// import Particles from 'particles.vue3'
import { tsParticles } from '@tsparticles/engine'
import { particlesConfig } from './particles/particlesConfig'

// onMounted(() => {
//   Particles.init('#particles-js')
// })

tsParticles
  .load({
    id: 'tsparticles',
    url: '@/src/particles/particlesjs-config.json'
  })
  .then(container => {
    console.log('callback - tsparticles config loaded')
  })
  .catch(error => {
    console.error(error)
  })

</script>

<style scoped>
.main{
  margin: 0;
  padding: 0;
  /* background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(./assets/B.jpg) no-repeat center -350px/230vh ; */
}
.appBar{
  background-color: #000 !important;
  color: aqua !important;
}

#particles-js{
  width: 100px;
  height: 100vh;
  position: absolute;
}

</style>
