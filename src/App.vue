<template>
  <v-app>
    <v-container>
      <!-- 導覽列 -->
      <v-app-bar color="blue-grey-darken-4" height="80">
        <v-container class="d-flex align-center">
          <v-app-bar-title  class="text-md-h4 font-weight-bold" style="line-height: 1">Pomodoro 番茄鐘</v-app-bar-title>
          <v-btn class="text-md-h6" style="line-height: 1" prepend-icon=" mdi-home"  to="/">首頁</v-btn>
          <v-btn  class="text-md-h6"  style="line-height: 1"  prepend-icon=" mdi-playlist-edit"  to="/list">清單</v-btn>

          <!-- 跳出 Setting 頁面 ，可能用 import 到 settings頁面，或是不跳轉到setting-->
          <v-dialog width="500">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="text-md-h6" style="line-height: 1" prepend-icon=" mdi-cog">設定</v-btn>
            </template>

            <v-card class="mx-auto" max-width="400">
              <v-toolbar color="amber-lighten-1">
                <v-btn icon="mdi-cog"></v-btn>
                <v-toolbar-title>設定</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon="mdi-magnify"></v-btn>
              </v-toolbar>

              <v-list lines="three">
                <v-list-subheader>通知設定</v-list-subheader>

                <v-list-item>
                  <v-radio-group inline v-model="notify">
                    <v-radio label="開啟" value="true"></v-radio>
                    <v-radio label="關閉" value="false"></v-radio>
                  </v-radio-group>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list lines="three" select-strategy="classic">
                <v-list-subheader>鈴聲設定</v-list-subheader>

                <template v-for="alarm in alarms" :key="alarm.id">
                  <v-list-item :value="alarm.name">
                    <template v-slot:prepend="{}">
                      <v-radio-group v-model="selectedAlarm" class="me-5">
                        <v-radio :value="alarm.id"></v-radio>
                      </v-radio-group>
                    </template>
                    <v-list-item-title class="mb-2 ms-4">{{ alarm.name}}</v-list-item-title>

                    <v-list-item-subtitle>
                      <audio :src="alarm.file" controls></audio>
                    </v-list-item-subtitle>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-dialog>
        </v-container>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-app>
</template>

<script setup>
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarm, notify } = storeToRefs(settings)
</script>
