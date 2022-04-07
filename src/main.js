import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './styles/index.scss'
import { RegesterRouter } from './router'
import { RegesterPina } from './store'
import { regsiterGlobalCom } from '@/components/regsiterGlobalCom.js'

function regesterApp() {
  const app = createApp(App)

  // 注册路由
  RegesterRouter(app)

  // 注册全局组件
  regsiterGlobalCom(app)

  // 注册store
  RegesterPina(app)
  // 渲染
  app.mount('#app')
}

regesterApp()