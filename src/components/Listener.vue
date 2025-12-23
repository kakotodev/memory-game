<script setup>
import { ref } from 'vue';

const keyLogged = ref('')
const textStyle = ref('color: blue')
const isOver = ref(false);
const count = ref(0);

function keyLogger(event) {
    console.log(event.key)
    keyLogged.value += event.key
}
function resetText() {
    document.querySelector('#textId').value = '';
    keyLogged.value = ''
}
function onTextOver() {
    textStyle.value = 'color: red';
    isOver.value = true;
}
function onTextOut() {
    textStyle.value = 'color: blue';
    isOver.value = false;
}
function displayWindowAlert(msg) {
    window.alert(msg);
}
</script>

<template>
    <fieldset>
        <legend>Mon Formulaire</legend>
        <form action="./postData.php" @submit.prevent="">
            <label for="textId">Texte : </label>
            <input id="textId" type="text" maxlength="50" placeholder="Saisir un texte" @keydown="keyLogger($event)" />
            <br>
            Keylogged : {{ keyLogged }}
            <br>
            Keylogged (reset on click) : <span v-text="keyLogged" v-on:click="resetText"></span>
            <br>
            <button type="submit">ENVOYER</button>&nbsp;<button type="reset">ANNULER</button>
        </form>
    </fieldset>
    <p :style="textStyle" @mouseover="onTextOver" @mouseout="onTextOut">texte avec event mouse</p>
    <p :style="{color : (isOver) ? 'red' : 'blue'}" @mouseover="onTextOver" @mouseout="onTextOut">texte bis avec event mouse</p>
    <hr></hr>
    <button @click="count++">CLICK</button>&nbsp;Nombre de clicks = {{ count }}
    <br></br>
    <a href="./nextPage.html" @click.prevent="window.alert('OK')">Lien KO</a>&nbsp;
    <a href="./nextPage.html" @click.prevent="displayWindowAlert('OK')">Lien OK</a>
</template>