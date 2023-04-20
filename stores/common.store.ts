import { defineStore } from 'pinia'
// console.log(window.localStorage)

const commonStore = {
  state: () => {
    return {
      isMobile: false // 是否手机端
    }
  },
  // 获取state状态
  getters: {},
  // pinia中采用this替代state
  actions: {
    setDevice(isMobile: boolean) {
      this.isMobile = isMobile // 设置终端
    }
  },

  // 持久化
  persist: process.client && {
    storage: localStorage,
    paths: '*' // ['isMobile']
  }
}

export const useCommonStore = defineStore('commonStore', commonStore)
