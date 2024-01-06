import { defineStore } from 'pinia'

// parseInt(string, radix) 將字串轉換成整數
// radix ：可選指定進位制，2 到 36 的數字。若省略，則預設為 10（十進位）
const time = parseInt(import.meta.env.VITE_TIME)
const timeBreak = parseInt(import.meta.env.VITE_TIME_BREAK)

export const useListStore = defineStore('list', {
  // 定義 store 的初始狀態的地方。
  state: () => ({
    items: [],
    id: 1,
    timeLeft: time,
    break: false,
    finishedItems: [],
    // 目前進行中的事，會到 items 拿第一個資料，好了放到 finishedItems
    currentItem: '',
    newItem: '',
    newItemInput: null,
    editItemInput: []

  }),
  actions: {
    addItem (list) {
      this.items.push({
        id: this.id++,
        list,
        edit: false,
        listEdit: list
      })
    },
    findIndexById (id) {
      return this.items.findIndex(item => item.id === id)
    },
    confirmEditItem (id) {
      const i = this.findIndexById(id)
      if (i < 0) return
      this.items[i].list = this.items[i].listEdit
      this.items[i].edit = false
    },
    cancelEditItem (id) {
      const i = this.findIndexById(id)
      if (i < 0) return
      this.items[i].listEdit = this.items[i].list
      this.items[i].edit = false
    },
    editItem (id) {
      const i = this.findIndexById(id)
      if (i < 0) return
      this.items[i].edit = true
    },
    delItem (id) {
      const i = this.findIndexById(id)
      if (i < 0) return
      this.items.splice(i, 1)
    },
    // 目前的項目
    // shift() 移除陣列內的第一個東西，並回傳移除的內容
    setCurrentItem () {
      this.currentItem = this.break ? '休息溜~' : this.items.shift().list
    },
    countDown () {
      this.timeLeft--
    },
    setFinishedItem () {
      if (!this.break) {
        this.finishedItems.push({
          list: this.currentItem,
          // 這邊為什麼是 id++
          id: this.id++
        })
      }
      this.currentItem = ''
      if (this.items.length > 0) {
        this.break = !this.break
      }
      this.timeLeft = this.break ? timeBreak : time
    },
    delFinishedItem (id) {
      console.log(id)
      console.log(this.currentItem, 'CURRENT')
      console.log(this.finishedItems, '.finishedItems')
      console.log(this.findIndexById(id))

      const i = this.findIndexById(id)
      console.log(i)
      if (i < 0) return
      this.finishedItems.splice(i, 1)
      console.log(this.finishedItems)
    }

  },
  //  跟 computed 一樣??
  getters: {

  },
  // 存 local storage
  persist: {
  // local storage 保存的名稱
    key: 'pomodoro-list'
  }
})
