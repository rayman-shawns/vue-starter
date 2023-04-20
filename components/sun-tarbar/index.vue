<template>
  <!-- 底部tarbar -->
  <div class="footer-container">
    <button v-for="item in state.list" :key="item.id" class="footer-container-item" @click="changeTab(item)">
      <div class="button-inner-img">
        <img ref="homeLogo" :src="`/image/footer/${item.icon}${item.active ? '_active' : ''}.png`" alt="img" />
      </div>
      <div class="item-name" :style="{ color: item.active ? '#FFFFFF' : '#626A7E' }">
        {{ item.text }}
      </div>
    </button>
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
// 数据模型
const state = reactive({
  list: [
    { id: 1, text: 'Menu', icon: 'menu', active: false },
    { id: 2, text: 'Casino', icon: 'casino', active: false },
    { id: 3, text: 'Wallet', icon: 'wallet', active: true },
    { id: 4, text: 'Sports', icon: 'sports', active: false },
    { id: 5, text: 'Chat room', icon: 'Chat room', active: false }
  ]
})

// tab改变
const changeTab = (item: any) => {
  router.push(item.icon)
  // console.log(item);
}
</script>

<style scoped lang="scss">
.footer-container {
  background: red;
}
</style>
