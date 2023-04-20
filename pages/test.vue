<template>
  <div class="app-test">
    <h1>This is function test</h1>
    <p class="text-green-700">thilwind</p>
    <p>usevue: {{ x }} {{ y }}</p>
    <p>
      <span>store: isMobile: {{ useCommonStore.isMobile }}</span>
      <button class="bg-blue-600 ml-5 p-1 text-white" @click="onPlatform">change</button>
    </p>
    <p>fetch: {{ data }}</p>
    <p>path: {{ $route.path }}</p>
    <van-button type="primary" @click="showToast('toast')">button</van-button>
    <el-button @click="ElMessage('hello')">button</el-button>
  </div>
</template>

<script lang="ts" setup>
// store
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores'
const { useCommonStore } = useStore()
const { isMobile } = storeToRefs(useCommonStore)
// usevue
const { x, y } = useMouse()
// change store
const onPlatform = () => {
  useCommonStore.setDevice(!isMobile.value)
}

const data = await useFetch('https://jsonplaceholder.typicode.com/todos/1')
</script>

<style scoped lang="scss">
$color: red;
.app-test {
  color: $color;
}
</style>
