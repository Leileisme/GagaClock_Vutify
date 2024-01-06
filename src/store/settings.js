import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    alarms: [
      {
        id: 1,
        name: '鈴聲1',
        file: new URL('@/assets/alarm.mp3', import.meta.url).href
      },
      {
        id: 2,
        name: '鈴聲2',
        file: new URL('@/assets/ya.mp3', import.meta.url).href
      }
    ],
    selectedAlarm: 1,
    notify: true
  }),
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(el => el.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  },
  persist: {
    // local storage 保存的名稱
    key: 'pomodoro-settings',
    // 要存的值
    paths: ['selectedAlarm', 'notify']
  }
})
