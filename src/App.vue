<template>
  <v-app >
      <!-- 導覽列 -->
      <v-app-bar  height="80" class="appBar">
        <v-container class="d-flex align-center">
          <v-app-bar-title  class="text-md-h4 font-weight-bold" style="line-height: 1">Gaga 嘎嘎鐘  </v-app-bar-title>
          <v-btn class="text-md-h6" style="line-height: 1" prepend-icon=" mdi-home"  to="/">首頁</v-btn>
          <v-btn  class="text-md-h6"  style="line-height: 1"  prepend-icon=" mdi-playlist-edit"  to="/list">清單</v-btn>

          <SettingView></SettingView>
        </v-container>
      </v-app-bar>

      <v-main class="main">
        <MyParticles class="MyParticles"></MyParticles>
        <div class="Copyright">Copyright © 2024 Leilei Hsu</div>

        <!-- Component = 目前該顯示的路由元件，透過 :is="Component" 會傳進 <component> 這個標籤 -->
        <router-view v-slot="{ Component }" class="routerView">
          <!-- 為了效能問題，元件會抽換 -->
          <!-- KeepAlive 保持被包住的元件不被銷毀 -->
          <!-- 使用  include 指定只有 HomeView 這個元件不被銷毀  -->
          <!-- 切換元件時元件取消掛載了，但 setInterval 還在執行 再回去HomeVue不會偵測到-->
          <!-- HomeVue 的 setInterval 還會再執行一次，速度就會加倍-->

          <!-- <component> 動態元件  使用 is 綁定元件-->

            <KeepAlive include="HomeView">
            <component :is="Component"></component>
          </KeepAlive>
        </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
// import { createApp } from 'vue'
import SettingView from './components/SettingView.vue'
import MyParticles from './components/myParticles.vue'
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

.MyParticles{
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 0;
  display: flex;
}

.routerView{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 3;
}

.Copyright{
  position: fixed;
  bottom: 0;
color: #555;
 /* left: 50%; */
 right: 0;
 /* transform: translateX(-50%); */
 margin: 12px;
 margin-right: 18px;
 font-size: 12px;
}
</style>
