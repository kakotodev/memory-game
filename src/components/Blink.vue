<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const blinkClass = ref("alert")
const currentColor = ref("red")
const isShown = ref(true)

let repeater;
onMounted(() => {
    repeater = setInterval(_ => {
        // Solution 1
        blinkClass.value = (blinkClass.value === "invisible") ? "alert" : "invisible";
        
        // Solution 2
        isShown.value = !isShown.value;
        
        // Solution 3
        currentColor.value = (currentColor.value === "red") ? "transparent" : "red";
    }, 500);
})

onUnmounted(() => {
    clearInterval(repeater)
})
</script>


<template>
    <!-- Solution 1 -->
    <p :class="blinkClass"><slot /></p>
    
    <!-- Solution 2 -->
    <p class="alert" v-show="isShown"><slot /></p>
    
    <!-- Solution 3 -->
    <p class="blink"><slot /></p>
</template>

<style scoped>
.invisible {
    color: transparent;
}
.alert {
    color: red;
}
.blink {
    color: v-bind(currentColor)
}
</style>