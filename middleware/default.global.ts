// 全局路由拦截
export default defineNuxtRouteMiddleware(to => {
  // test 是测试页面
  if (to.path === '/test1') {
    return navigateTo('/home')
  }
  // TODO: 登陆校验
})
