<script setup>
import { ref, onMounted } from "vue";

const myRefs = ref([]);
onMounted(() => {
  console.log(myRefs.value);
});
</script>

<template>
  <li v-for="item in 10" :key="item" ref="myRefs">
    {{ item }}
  </li>
</template>