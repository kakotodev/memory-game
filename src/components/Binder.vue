<script setup>
function getRandomClass() {
    const randomNumber = parseInt(Math.random() * 3);
    switch(randomNumber) {
        case 0: return "bleu";
        case 1 : return "rouge";
        case 2 : return "vert";
    }
}

const URLs = [
    'https://www.efrei.fr',
    'https://fr.vuejs.org/',
    'https://developer.mozilla.org/en-US/',
]


const getUrl = () => {
    const randomNumber = parseInt(Math.random() * 3);
    return URLs[randomNumber];
}

const getImage = () => {
    return "https://picsum.photos/200/300"
}

function getStyle() {
    return "color: violet"
}
</script>


<template>
    <div class="bleu">Affiche un texte bleu</div>
    <div v-bind:class="getRandomClass()">Affiche une couleur dynamique</div>
    <div :class="getRandomClass()">Affiche une couleur dynamique</div>
    <br>
    <a :href="getUrl()">URL dynamique</a>
    <br>
    <p v-bind:style="getStyle()">Texte stylé</p>
    <br>
    <img src="/images/10009-winking-face-icon.png">
    <!-- <img :src="getImage()"> -->
</template>

<style scoped>
.bleu {
    color: blue;
}
.rouge {
    color: red;
}
.vert {
    color: green;
}
</style>