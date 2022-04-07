// 全局组件注册
import HelloWorld from './HelloWorld.vue'

export function regsiterGlobalCom(app) {
  app.component('HelloWorld', HelloWorld)
}