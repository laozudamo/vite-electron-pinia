const roles = ['admin', 'superAdmin']

function add(app) {
  app.directive('add', {
    created(arg, binding) {
      console.log(arg, "这是菜地过来的参数")
    },
    mounted(el, binding, vnode) {
      console.log('mounted钩子', el);
      el.style.color = 'red';
      console.log(vnode)
    },
    beforeUpdate() { },
    // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
    updated() { },
    // 在绑定元素的父组件卸载之前调用
    beforeUnmount() { },
    // 在绑定元素的父组件卸载之后调用
    unmounted() {
      console.log('进行一些卸载操作');
    }
  })
}

// 自定义权限控制
function pression(app) {
  let role = 'admin'
  const hasPre = roles.includes(role)
  app.directive('pression', {
    beforeMount(el) {
      if (hasPre) {
        console.log('有权限')
      } else {
        el.removeChild()
      }
    }
  })
}

export function registerDir(app) {
  add(app)
  pression(app)
}