function add(a, b) {
  console.log('调用了add函数', a + b);
}

export function registerDir(app) {
  app.directive('add', {
    created(arg,binding) {
      add(binding.value.a, binding.value.b);
      console.log(arg,"这是菜地过来的参数")
    },
    beforeMount() { },
    mounted(el, binding, vnode) {
      console.log('mounted钩子', el);
      el.style.color = 'red';
      add(binding.value.a, binding.value.b);
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