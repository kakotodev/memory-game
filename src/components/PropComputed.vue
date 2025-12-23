<script setup>
import { ref, computed } from 'vue';

const note1 = ref('');
const note2 = ref('');
const note3 = ref('');

const somme = computed(() => parseInt(note1.value) + parseInt(note2.value) + parseInt(note3.value));

function computeSum() {
    return parseInt(note1.value) + parseInt(note2.value) + parseInt(note3.value);
}
</script>


<template>
    <input v-bind:value="note1" @input="event => note1 = event.target.value" />
    <br>
    <input v-bind:value="note2" @input="event => note2 = event.target.value" />
    <br>
    <input v-bind:value="note3" @input="event => note3 = event.target.value" />
    <br>
    <span>{{ somme }}</span>
    <br>
    <span>{{ computeSum() }}</span>
</template>