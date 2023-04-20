import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import 'amfe-flexible' // 将font-size 设置成viewport 1/10
import './style.css'
import 'animate.css' // 动画效果库
const pinia = createPinia()

import App from './App.vue'

createApp(App).use(router).use(pinia).mount('#app')
