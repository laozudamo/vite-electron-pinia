<script setup>
import { ref, onMounted } from "vue";

const myRefs = ref([]);
onMounted(() => {
  console.log(myRefs.value);
});

let time = Date.now();
</script>

<template>
  <h3>
    这是处理时间插件
    <span>{{ $time(time, '{y}-{m}-{d}') }}</span>
  </h3>
  <li v-for="item in 10" :key="item" ref="myRefs">
    {{ item }}
  </li>
</template>