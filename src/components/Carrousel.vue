<script setup>
import { ref } from 'vue';

const images = [
    { url: '/images/10002-beaming-face-with-smiling-eyes-icon.png', label: 'smiling eyes'},
    { url: '/images/10009-winking-face-icon.png', label: 'winking'},
    { url: '/images/10012-smiling-face-with-sunglasses-icon.png', label: 'smiling face'},
    { url: '/images/10024-thinking-face-icon.png', label: 'thinking'},
    { url: '/images/10033-face-with-open-mouth-icon.png', label: 'open mouth'},
]

let idx = 0;
const currentImage = ref(images[idx])

function previous() {
    idx--;
    if (idx < 0) idx = images.length - 1;
    currentImage.value = images[idx];
}
function next() {
    idx++;
    if (idx > images.length - 1) idx = 0;
    currentImage.value = images[idx];
}

let slideshow;
function playPause() {
    if (!slideshow) {
        slideshow = setInterval(() => {
            next();
        }, 500);
    }
    else  {
        clearInterval(slideshow);
        slideshow = null
    }
}
</script>

<template>
    <div class="row">
        <div class="column">
            <a href="#" @click="previous()">PREVIOUS</a>
        </div>
        <div class="column">
            <img v-bind:src="currentImage.url" />
            <br>
            <h1 class="label">{{ currentImage.label }}</h1>
        </div>
        <div class="column">
            <a href="#" @click="next()">NEXT</a>
        </div>
    </div>
    <button @click="playPause">PLAY / PAUSE</button>
</template>

<style scoped>
.label {
    width: 512px;
    text-align: center;
    background-color: bisque;
}
.row {
    display: table;
    table-layout: fixed; /*Optional*/
    border-spacing: 10px; /*Optional*/
}
.column {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
</style>