import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './styles/index.scss'
import { RegisterRouter } from './router'
import { RegisterPina } from './store'
import { RegisterGlobalCom } from '@/components/registerGlobalCom.js'
import { RegisterDir } from './directives/index.js'
import { RegisterPlugin } from './plugin/index.js'
function regesterApp() {
  const app = createApp(App)

  // 注册路由
  RegisterRouter(app)

  // 注册方法
  RegisterDir(app)

  // 注册全局组件
  RegisterGlobalCom(app)

  // 注册插件
  RegisterPlugin(app)

  // 注册store
  RegisterPina(app)
  // 渲染
  app.mount('#app')
}

regesterApp()