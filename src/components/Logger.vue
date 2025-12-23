<script setup>
import { reactive, ref, watch } from 'vue';

const firstname = reactive({data : ''})
const lastname = ref('')

//watch(firstname, () => { console.log(firstname.data)})
//watch(lastname, () => { console.log(lastname.value)})
watch([firstname, lastname], () => { console.log(firstname.data, lastname.value)})

function changeTitle() {
    console.log(firstname.data); // La donnée n'est pas à jour par rapport à la saisie (binding unidirectionnel)
    console.log(lastname.value); // La donnée n'est pas à jour par rapport à la saisie (binding unidirectionnel)

    const firstnameValue = document.getElementById('firstnameId').value;
    const lastnameValue = document.getElementById('lastnameId').value;
    
    firstname.data = firstnameValue;
    lastname.value = lastnameValue;
}

// Initialisation pour test
// firstname.data = "Ada"
// lastname.value = "Lovelace"
</script>

<template>
    <h1>Bonjour {{ firstname.data }} {{ lastname }}</h1>
    <input v-bind:value="firstname.data" id="firstnameId" placeholder="Prénom" />
    <br>
    <input v-bind:value="lastname" id="lastnameId" placeholder="Nom" />
    <br>
    <button @click="changeTitle()">CHANGE</button>
</template>