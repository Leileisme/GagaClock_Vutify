import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settimgs', {
  state: () => ({
    alarms: [
      {
        id: 1,
        name: '鬧鐘',
        file: new URL('@/assets/alarm.mp3', import.meta.url).href
      },
      {
        id: 2,
        name: 'ya',
        file: new URL('@/assets/ya.mp3', import.meta.url).href
      }
    ],
    selectedAlarm: 1,
    notify: true
  }),
  getter: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex((el) => el.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  }
})
