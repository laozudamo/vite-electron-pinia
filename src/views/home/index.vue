<script setup>
import { useUserStore } from "@/store/modules/user";
const store = useUserStore();
let msg = "Hello World";
</script>


<template>
  <h1>welcome vite 使用 electron</h1>
  <h3>{{ store.name }}</h3>
  <hello-world :msg="msg"></hello-world>
</template>

<style lang="scss" scoped>
</style>