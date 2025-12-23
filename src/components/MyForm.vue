<script setup>
import { ref } from 'vue';

const countries = ['France', 'Italie', 'USA', 'Japon', 'Australie'];

const formData = ref({
    firstname: '',
    lastname: '',
    email: '',
    numberOfPerson: '',
    startdate: '',
    enddate: '',
    hasBack: false,
    yesOrNo : false,
    country : '',
    price: 200,
    comment : ''
});

function log() {
    console.log(
        "firstname=", formData.value.firstname, 
        "lastname=", formData.value.lastname,
        "email=", formData.value.email,
        "numberOfPerson=", formData.value.numberOfPerson,
        "startdate=", formData.value.startdate,
        "enddate=", formData.value.enddate,
        "hasBack=", formData.value.hasBack,
        "yesOrNo=", formData.value.yesOrNo,
        "country=", formData.value.country,
        "price=", formData.value.price,
        "comment=", formData.value.comment
    );
}

setInterval(() => {
    log();
}, 5000);

function reset() {
    formData.value.firstname = ''
    formData.value.lastname = ''
    formData.value.email = ''
    formData.value.numberOfPerson = ''
    formData.value.startdate = ''
    formData.value.enddate = ''
    formData.value.hasBack = false
    formData.value.yesOrNo = true
    formData.value.country = ''
    formData.value.price = 0
    formData.value.comment = ''
}

function init() {
    formData.value.firstname = 'james'
    formData.value.lastname = 'bond'
    formData.value.email = 'james@bond.uk'
    formData.value.numberOfPerson = 1
    
    const today = new Date(2025,11,13,1)
    formData.value.startdate = today.toISOString().slice(0, 10)//'2025-12-13';//new Date();//Date.parse('2025-12-13').toLocaleString();//.format('DD/MM/YYYY')
    
    const christmas = new Date(Date.parse('2025-12-25'))
    formData.value.enddate = christmas.toISOString().slice(0, 10)
    
    formData.value.hasBack = true
    formData.value.yesOrNo = false
    formData.value.country = 'Japon'
    formData.value.price = 321
    formData.value.comment = 'un petit commentaire histoire de dire'
}
</script>

<template>
    <h1>Formulaire de réservation de voyage</h1>
    <h2>Utilisation de ref</h2>

    <label for="firstnameId">Prénom : </label>
    <input id="firstnameId" type="text" maxlength="20" v-model="formData.firstname"/> <!-- value -->
    <br>
    
    <label for="lastnameId">Nom : </label>
    <input id="lastnameId" type="text" maxlength="20" v-model="formData.lastname" /> <!-- value -->
    <br>
    
    <label for="emailId">Email : </label>
    <input id="emailId" type="email" maxlength="20" v-model="formData.email" required /> <!-- value -->
    <br>
    
    <label for="personId">Nb Personnes : </label>
    <input id="personId" type="number" min="1" max="5" v-model="formData.numberOfPerson" /> <!-- value -->
    <br>
    
    <label for="targetId">Destination : </label>
    <select id="targetId" v-model="formData.country"> <!-- value -->
        <option v-for="country in countries">{{ country }}</option>
    </select>
    <br>

    <label for="startDateId">Date aller: </label>
    <input id="startDateId" type="date" format="DD/MM/YYYY" v-model="formData.startdate" /> <!-- value -->
    <br>
    
    <label for="checkboxId">Retour prévu ? </label>
    <input id="checkboxId" type="checkbox" v-model="formData.hasBack" /> <!-- checked -->

    <div v-if="formData.hasBack">
        <label for="endDateId">Date retour: </label>
        <input id="endDateId" type="date" v-model="formData.enddate" /> <!-- value -->
    </div>
    <br>
    
    <label for="radioId">Avec assurance (Oui ou Non) : </label>
    <input type="radio" value="true" v-model="formData.yesOrNo">Oui</input> <!-- checked -->
    <input type="radio" value="false" v-model="formData.yesOrNo">Non</input> <!-- checked -->
    <br>
    
    <label for="priceId">Prix (min/max) : </label>
    <input id="priceId" type="range" min="200" max="500" v-model="formData.price" /> {{ formData.price }}
    <br>

    <label for="commentId">Commentaire : </label>
    <textarea id="commentId" v-model="formData.comment">{{ formData.comment }}</textarea>
    <br>

    <hr>

    <button @click="log">ENVOYER</button>
    <br></br>
    <button @click="reset">RESET</button>&nbsp;<button @click="init">INIT</button>
</template>