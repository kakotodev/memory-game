<script setup>
import { ref } from 'vue';

const isGreenDisplayed = ref(true)
const isOrangeDisplayed = ref(false)

function displayGreen() {
    isGreenDisplayed.value = true;
    isOrangeDisplayed.value = false;
}
function displayOrange() {
    isGreenDisplayed.value = false;
    isOrangeDisplayed.value = true;
}
function displayRed() {
    isGreenDisplayed.value = false;
    isOrangeDisplayed.value = false;
}

function change() {
    if (isGreenDisplayed.value) displayOrange();
    else if (isOrangeDisplayed.value) displayRed();
    else displayGreen();
}
</script>

<template>
    <button @click="change">CHANGE</button>
    <div class="couleur-fond" v-if="isGreenDisplayed">
        <div class="circle" />
        <div class="circle" />
        <div class="circle green" />
    </div>
    <div class="couleur-fond" v-else-if="isOrangeDisplayed">
        <div class="circle" />
        <div class="circle orange" />
        <div class="circle" />
    </div>
    <div class="couleur-fond" v-else>
        <div class="circle red" />
        <div class="circle" />
        <div class="circle" />
    </div>
    <h1 style="color: red" v-show="!isGreenDisplayed && !isOrangeDisplayed">STOP</h1>
</template>

<style scoped>
.couleur-fond {
    width: 102px;
    background-color: black;
}
.circle {
    background-color:#fff;
    border:1px solid black;    
    height:100px;
    border-radius:50%;
    width:100px;
}
.circle.green {
    background-color: green;
}
.circle.orange {
    background-color: orange;
}
.circle.red {
    background-color: red;
}

</style>