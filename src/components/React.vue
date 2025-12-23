<script setup>
import { reactive, readonly, ref } from 'vue';

const variable = 0;
const refVariable = ref(10);
const reactiveVariable = reactive({data : 20});
const copyReactive = readonly(reactiveVariable);
const copyRef = readonly(refVariable);

let timer;
function start() {
    timer = setInterval(() => {
        console.log('setInterval');
        reactiveVariable.data += 1;
        refVariable.value += 1;
        copyReactive.data += 1; // Warning : ne fonctionne pas
        copyRef.value += 1; // Warning : ne fonctionne pas
    }, 1000);
}

function stop() {
    clearInterval(timer);
}
</script>

<template>
    <span>{{ variable }}</span>
    <br>
    <span>{{ refVariable }}</span>
    <br>
    <span>{{ reactiveVariable.data }}</span>
    <br>
    <span>{{ copyReactive.data }}</span>
    <br>
    <span>{{ copyRef }}</span>
    <br>
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
</template>
