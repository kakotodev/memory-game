<script setup>
import { computed, ref } from 'vue';

const emitEvents = defineEmits(['change']);

const incrementValue = ref(1);
const isIncrementValue = ref('inc');

const symbol = computed(() => 
    (isIncrementValue.value === 'dec') ? "-" : "+"
)

function emitChange() {
    // console.log(isIncrementValue.value, incrementValue.value)
    emitEvents('change', parseInt(incrementValue.value), isIncrementValue.value)
}
</script>

<template>
    <div class="fond">
        <label for="numberId">Nombre (inc ou dec) : </label>
        <input id="nombreId" type="number" v-model="incrementValue"></input>
        
        <input type="radio" name="incOrDec" v-model="isIncrementValue" value="inc" :checked="isIncrementValue === 'inc'">INC</input>
        <input type="radio" name="incOrDec" v-model="isIncrementValue" value="dec" :checked="isIncrementValue === 'dev'">DEC</input>
        
        <br></br>
        
        <button @click="$emit('change', parseInt(incrementValue), isIncrementValue)">{{ symbol }}</button>
        <button @click="emitChange">{{ symbol }}</button>
    </div>
</template>

<style scoped>
.fond {
    background-color: lightskyblue;
}    
</style>