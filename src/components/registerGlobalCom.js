// 全局组件注册
import HelloWorld from './HelloWorld.vue'

export function RegisterGlobalCom(app) {
  app.component('HelloWorld', HelloWorld)
}