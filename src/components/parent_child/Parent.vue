<script setup>
import Child from './Child.vue';
import { ref } from 'vue';

const nombre = ref(0)

const update = (inc, incOrDec) => {
    if (incOrDec === 'inc') nombre.value += inc;
    else nombre.value -= inc;
}
// Autre syntaxe
// function update(inc, incOrDec) {
//     console.log(inc, incOrDec)
//     if (incOrDec === 'inc') nombre.value += inc;
//     else nombre.value -= inc;
// }
</script>

<template>
    <p>{{ nombre }}</p>
    <Child @change="update">Texte qui sert à rien sans slot</Child>
</template>