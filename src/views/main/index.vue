<script setup>
import { ref, onMounted } from 'vue'

const list = ref([1, 3, 4, 5])

const itemRefs = ref([])

onMounted(() => console.log(itemRefs.value))
</script>

<template>
    <li v-for="item in list" :key="item" ref="itemRefs">
      {{ item }}
    </li>
</template>