<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import { ref } from 'vue';

onBeforeMount(() => {
  console.log("onBeforeMount")
})
onMounted(() => {
  console.log("onMounted")
  startTicTac();
})
onBeforeUpdate(() => {
  console.log("onBeforeUpdate")
})
onUpdated(() => {
  console.log("onUpdated")
})
onBeforeUnmount(() => {
  console.log("onBeforeUnmount")
})
onUnmounted(() => {
  console.log("onUnmounted")
  stopTicTac()
})

const label = ref('TIC')

let timer;
function startTicTac() {
  timer = setInterval(() => {
      label.value = (label.value === 'TIC') ? 'TAC' : 'TIC'
      console.log(label.value)
  }, 1000);
}
function stopTicTac() {
  clearInterval(timer);
}
</script>


<template>
    <h1>{{ label }}</h1>
</template>