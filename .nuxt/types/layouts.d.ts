import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "normal"
declare module "/Users/mac/Project/vue-starter/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}