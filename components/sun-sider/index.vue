<template>
  <aside class="flex flex-col h-screen bg-primary-light w-[260px]">
    <!-- logo -->
    <header class="h-[64px] flex items-center">
      <div class="flex">
        <img class="w-[44px] h-[44px] ml-2" src="@/assets/imgs/demo.jpg" />
        <img class="w-[140px] h-[44px] ml-2" src="@/assets/imgs/demo.jpg" />
      </div>
    </header>
    <!--top-->
    <main class="flex-1 overflow-y-auto bg-slate-300 p-[10px]">
      <h1 class="mb-2">My VIP Perks</h1>
      <div>
        <p class="w-[186px] h-[50px] border border-solid mb-2 ml-6">2</p>
        <p class="w-[186px] h-[50px] border border-solid mb-2 ml-6">d</p>
      </div>
      <ul>
        <li v-for="item in 5" :key="item" class="flex items-center bg-slate-700 mb-2 py-2 text-white">
          <van-icon name="chat-o" size="30" class="ml-6" />
          <span class="ml-5 text-text-main">首页</span>
        </li>
      </ul>
    </main>
    <!--bottom-->
    <footer class="text-white bg-slate-800 px-[10px]">
      <div class="flex justify-between py-2 items-center">
        <p class="flex items-center">
          <van-icon name="chat-o" size="30" class="mr-2" />
          <span>语言</span>
        </p>
        <img src="@/assets/imgs/demo.jpg" class="w-[28px] h-[20px] mr-2" />
      </div>
      <div class="flex justify-between py-4 items-center">
        <p class="flex items-center">
          <van-icon name="chat-o" size="30" class="mr-2" />
          <span>Night Mode</span>
        </p>
        <van-switch v-model="checked" size="20" class="mr-2" />
      </div>
    </footer>
  </aside>
</template>

<script lang="ts" setup>
const checked = ref(false)
</script>
