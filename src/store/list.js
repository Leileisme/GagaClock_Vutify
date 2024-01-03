import { defindStore } from 'pinia'

export const useListStore = defindStore('list', {
  // 定義 store 的初始狀態的地方。
  state: () => ({
    items: [],
    id: 1,
    // timelief:time,
    break: false,
    finishedItems: [],
    // 目前進行中的事，會到 items 拿第一個資料，好了放到 finishedItems
    currentItem: ''
  }),
  actions: {
    addItem (name) {
      this.items.push({
        id: this.id++

      })
    }
  }
})
