<script setup>
import { ref } from 'vue'
import { ipcRenderer } from 'electron';
// const { port1 } = new MessageChannel()


function writeText () {
  ipcRenderer.send("write")
}

let message = ref("")

ipcRenderer.on('disk-info', (e, arg) => {
  message.value = JSON.parse(arg)
})

</script>

<template>
  <h1>welcome vite 使用 electron</h1>
  <button @click="writeText">写数据</button>

  <div v-for="(key, i) in Object.keys(message)" :key="i">
    {{ key }} /{{ message[key] / 1024 / 1024 }}
  </div>
</template>

<style lang="scss" scoped></style>