<script setup>
import { ref } from 'vue';

const personnes = ref([])

const PRENOMS = ['Alexa', 'Bob', 'Celian', 'David', 'Emilie', 'Farid', 'Gilbert', 'Henri', 'Ismaël', 'Jules'];

function createPersonnes() {
    for (let i = 0; i < 10; i++) {
        let age = Math.floor(Math.random() * 99) + 1;
        let personne = {id: i, prenom: PRENOMS[i], age: age};
        personnes.value.push(personne);
    }
}

function setStyle(age) {
    if (age < 18) return "blue";
    else return "default";
}

function sortByAge() {
    personnes.value.sort((p1, p2) => {
        return p1.age - p2.age;
    })
}
function sortByName() {
    // personnes.value.sort((p1, p2) => {
    //     if (p1.prenom < p2.prenom) return -1
    //     else if (p1.prenom > p2.prenom) return 1
    //     else return 0
    // })
    personnes.value.sort((p1, p2) => p1.prenom.localeCompare(p2.prenom))
}

createPersonnes();
</script>

<template>
    <li v-for="personne in personnes" :key="personne.id">
        <div v-if="personne.age < 18" class="blue">{{personne.prenom}} / {{personne.age}}</div>
        <div v-else class="default">{{personne.prenom}} / {{personne.age}}</div>
    </li>
    <hr></hr>
    <li v-for="personne in personnes" :key="personne.id">
        <div :class="setStyle(personne.age)">{{personne.prenom}} / {{personne.age}}</div>
    </li>
    <br></br>
    <button @click="sortByName">Tri par prénom</button>&nbsp;<button @click="sortByAge">Tri par age</button>
</template>

<style scoped>
.default {
    color: black;
}
.blue {
    color: blue;
}
</style>