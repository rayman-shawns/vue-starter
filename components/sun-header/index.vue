<template>
  <el-affix :offset="0">
    <div class="flex bg-primary-lighter justify-end h-[64px] overflow-hidden items-center w-full shadow-lg shodow-primary-lighter">
      <!-- <div class="flex">
        <img class="w-[44px] h-[44px] ml-2" src="@/assets/imgs/demo.jpg" />
        <img class="w-[140px] h-[44px] ml-2" src="@/assets/imgs/demo.jpg" />
      </div> -->
      <div class="flex mr-2 justify-between">
        <van-button type="default" @click="showToast('toast')">Sign In</van-button>
        <van-button class="mx-2" type="primary" @click="showToast('toast')">Sign Up</van-button>
        <van-icon name="comment" size="40" class="w-[44px] h-[44px] ml-2 te" />
      </div>
    </div>
  </el-affix>
</template>

<script setup>
// const router = useRouter()
// const showLogin = ref(false)
// const showRegist = ref(false)
// function showHome() {
//   router.push({ path: '/' })
// }
// function SingIn() {
//   router.push({ path: '/login/' })
// }
// function SingUp() {
//   router.push({ path: '/login/regist' })
// }
</script>

<style lang="scss" scoped></style>
