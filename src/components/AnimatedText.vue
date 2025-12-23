<script setup>
import { ref } from 'vue';

const showHideParagraph1 = ref(false);
const showHideParagraph2 = ref(false);
const showHideParagraph3 = ref(false);

function showHide(paragraphNumber) {
    switch (paragraphNumber) {
        case 1 : showHideParagraph1.value = !showHideParagraph1.value; break;
        case 2 : showHideParagraph2.value = !showHideParagraph2.value; break;
        case 3 : showHideParagraph3.value = !showHideParagraph3.value; break;
    }
    return true;
}
</script>

<template>
    <button @click="showHide(1)">Show/Hide paragraph1</button>
    <Transition v-if="showHideParagraph1"> <!-- La transition est à définir sur le CHILD unique -->
        <!-- <p class="paragraphTitle">Paragraph 1</p> PAS POSSIBLE D'AVOIR 2 CHILDS -->
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lacus sapien. 
            In ac risus et arcu sodales fringilla ut et nisi. In hac habitasse platea dictumst. 
            Suspendisse semper tincidunt libero, eget malesuada metus faucibus quis.
        </p>
    </Transition>
    
    <hr>

    <button @click="showHide(2)">Show/Hide paragraph2</button>
    <Transition>
        <p v-if="showHideParagraph2">
            Sed massa tellus, aliquet sit amet mi id, dapibus pellentesque nisl. 
            Duis at ligula tempor, consectetur nisl eu, tincidunt dui. Nunc at porttitor purus. 
            Proin leo mi, semper luctus urna ut, porta consectetur urna. 
            Integer pharetra venenatis tellus ut euismod. 
        </p>
    </Transition>

    <hr>

    <button @click="showHide(3)">Show/Hide paragraph3</button>
    <Transition name="paragraph3">
        <p class="parag3" v-if="showHideParagraph3">
            Nam interdum risus neque, sit amet ullamcorper ipsum aliquam id. Vivamus feugiat semper tristique. 
            Integer lobortis rhoncus libero at elementum. 
            Sed dapibus, erat sit amet blandit venenatis, est lorem auctor nisi, a blandit dui ante in tellus. 
            Vivamus placerat venenatis libero, vitae euismod nibh tincidunt ut. 
            Pellentesque tincidunt orci rhoncus est hendrerit, sollicitudin venenatis leo pretium.
        </p>
    </Transition>
</template>

<style scoped>
p {
    color: rgb(78, 201, 88);
}

.v-enter-from {
    opacity: 0%;
    color: rgb(21, 131, 226);
}
.v-enter-active {
    transition: opacity, color 1s ease;
}
.v-enter-to {
    opacity: 100%;
    color: rgb(230, 42, 42);
}
.v-leave-from {
    opacity: 100%;
    color: rgb(230, 42, 42);
}
.v-leave-active {
    transition: opacity 3s ease;
}
.v-leave-to {
    opacity: 0%;
    color: rgb(21, 131, 226);
}

.parag3 {
    background-color: gainsboro;
    border-radius: 20px;
    padding: 10px;
    color: black;
    height: 150px;
    width: 50%;
}
.paragraph3-enter-from {
    /* color: red; */
    height: 150px;
    width: 20%;
}
.paragraph3-enter-to {
    color: red;
    height: 150px;
    width: 50%;
}
.paragraph3-enter-active {
    transition: width 1s ease;
}
.paragraph3-leave-from {
    color: red
}
.paragraph3-leave-active {
    transition: width 1s ease;
}
.paragraph3-leave-to {
    color: blue;
    height: 150px;
    width: 20%;
}
</style>