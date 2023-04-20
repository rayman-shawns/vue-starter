import { useCommonStore } from './common.store'

// 统一出口
export const useStore = () => ({
  useCommonStore: useCommonStore()
})
