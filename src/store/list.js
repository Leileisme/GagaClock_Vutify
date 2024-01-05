import { defineStore } from 'pinia'

export const useListStore = defineStore('list', {
  // 定義 store 的初始狀態的地方。
  state: () => ({
    items: [],
    id: 1,
    // timelief:time,
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
      this.item[i].listEdit = this.items[i].list
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
    delFinishedItem (id) {
      const i = this.findIndexById(id)
      if (i < 0) return
      this.finishedItems.slice(i, 1)
    },
    // 目前的項目
    setCurrentItem () {
      this.currentItem = this.break ? '休息一下' : this.items.shift().list
    },
    setFinishedItem () {
      if (!this.break) {
        this.finishedItems.push({
          list: this.currentItem,
          id: this.id
        })
      }
      this.currentItem = ''
      if (this.items.length > 0) {
        this.break = !this.break
      }
    }
  }
})
