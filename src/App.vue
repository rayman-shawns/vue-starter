<script setup lang="ts">
// import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
const a = 1
const show = ref(false)
const { x, y } = useMouse()
console.log(a)

const onShow = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="p-1 bg-sun1">
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link><br />
    <router-view />
    <div class="test animate__animated animate__bounce" v-if="show">this is text</div>
    <van-button type="primary" text="212" @click="onShow" />
    <div class="text-red-700">pos: {{ x }}, {{ y }}</div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
