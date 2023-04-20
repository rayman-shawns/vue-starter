<template>
  <section class="h-screen bg-blue-600 flex flex-col w-[355px] flex-shrink-0">
    <!-- head -->
    <header class="flex-row-between h-[64px] bg-slate-600 text-white w-full px-2">
      <div class="flex">
        <p>在线聊天</p>
        <p>在线客服</p>
      </div>
      <van-icon name="cross" size="35" />
    </header>
    <!-- content -->
    <main class="flex-1 p-2 overflow-y-auto">
      <article v-for="num in 10" :key="num" class="flex bg-slate-300 mb-2">
        <div class="w-[48px] h-[48px] mr-2 relative">
          <van-circle v-model:current-rate="currentRate" :rate="30" :speed="100" size="48px" />
          <img src="@/assets/imgs/demo.jpg" class="w-[39px] h-[39px] rounded-full absolute left-[5px] top-[5px]" />
          <p class="absolute bg-blue-300 rounded-md px-2 w-[30px] h-[18px] mt-[-20px] text-sm text-white text-center">V35</p>
        </div>
        <div class="flex flex-col w-full">
          <p>
            <span>ROOFiO</span>
            <span>20:29</span>
          </p>
          <ul class="mr-2">
            <li v-for="item in 3" :key="item" class="text-xs bg-slate-500 mb-1 mr-2">
              Hold my beer and step backasdfsdfsdfsdfsdfsfsd i got a bust 这里欧啊时代精神大风阿斯顿发送到方式
            </li>
          </ul>
        </div>
      </article>
    </main>
    <!-- input -->
    <footer class="h-[96px] bg-slate-400 flex-row-between px-2">
      <van-field v-model="content" label="文本" placeholder="请输入用户名" />
      <van-button square type="primary" class="w-[44px] ml-2"></van-button>
    </footer>
  </section>
</template>

<script lang="ts" setup>
const content = ref('') // input 输入
const currentRate = ref(100)
</script>
