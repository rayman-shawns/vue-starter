<template>
  <div id="app" class="bg-black">
    <nav>
      <cube-button>你好</cube-button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// let a = 1
export default {
  data() {
    return {}
    // init: {
    //   a: 1
    // }
  }
}
</script>

<style scoped lang="scss">
#app {
  // background: red;
}
</style>
