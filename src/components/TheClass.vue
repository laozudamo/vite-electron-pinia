<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "vue";
let isActive = ref(false);

// class 样式的动态绑定
const changeColor = () => {
  isActive.value = !isActive.value;
};

// :style的动态绑定
let cssObj = reactive({
  color: "red",
  fontSize: "13px",
  background: "pink",
  width: "400px",
});
function bindClass() {
  (cssObj.color = "green"), (cssObj.fontSize = "15px");
}


let theColor = ref();
// 实时监听鼠标的位置
function getPostion() {
  document.addEventListener("mousemove", (e) => {
    getColor(e.clientX, e.clientY);
  });
}
function getColor(x, y) {
  let a = (x > 255 ? x / 255 : x).toFixed(0);
  let b = (y > 255 ? y / 255 : y).toFixed(0);
  theColor.value = `rgba(${Number(a)},${Number(b)},${Number(a)})`;
}

onMounted(() => {
  getPostion();
});


</script>

<template>
  <button @click="changeColor">改变颜色</button>
  <div :class="{ active: isActive }">这是样式</div>
  <div :style="cssObj" @click="bindClass">
    <button>改变</button>
    动态改变盒子的宽度
  </div>

  <h3 class="text">css的v-bind</h3>
</template>

<style lang="scss" scoped>
.active {
  color: pink;
}
.text {
  color: v-bind(theColor);
}
</style>