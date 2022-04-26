<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";
let show = ref(true);
const showModal = ref(false);

</script>

<template>
  <button @click="show = !show">Toggle</button>
  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>


  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </teleport>

</template>

<style lang="scss" scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>