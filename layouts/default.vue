<template>
  <!-- 默认布局模板 -->
  <div id="layout-default" class="flex justify-between">
    <!-- <sun-header /> -->
    <sun-sider />
    <!-- <section class="flex-1"> -->
    <slot />
    <!-- </section> -->

    <sun-chat />
    <!-- <sun-tarbar /> -->
    <!-- <sun-footer /> -->
  </div>
</template>

<script setup lang="ts">
// import SunHeader from '@/components/sun-header/index.vue'
// import SunTarbar from '@/components/sun-tarbar/index.vue'
import SunChat from '@/components/sun-chat/index.vue'
import SunSider from '@/components/sun-sider/index.vue'
</script>
