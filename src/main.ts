import { createApp } from 'vue'
import App from './App.vue'

// !!保证各浏览器样式的一致性
import 'normalize.css'

// !!项目的公共样式
import '@/assets/styles/common.less'

// !!路由配置信息导入
import router from '@/router'

// !!pinia数据管理
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
