<script setup>
import { ref } from "vue";
let testVal = '这是组件实际例子的值'
let foo = ref("hello");
</script>

<template>
  这是登录页面

  <!-- foo是参数arg 2是value -->
  <div v-par:foo="2">这是测试参数的绑定</div>
  <button v-pression>这是权限按钮</button>
  <div v-add:hello="{ a: 1, b: 2 }">2121</div>
</template>
