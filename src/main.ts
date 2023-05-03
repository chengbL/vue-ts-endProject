import { createApp } from 'vue'
import App from './App.vue'

// !保证各浏览器样式的一致性
import 'normalize.css'
// !!项目的公共样式
import '@/assets/styles/common.less'

const app = createApp(App)
app.mount('#app')
