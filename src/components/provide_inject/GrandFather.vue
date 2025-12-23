<script setup>
import { provide, ref } from 'vue';
import Father from './Father.vue';

const firstname = ref('Bob')

provide('firstnameKey', firstname)
</script>

<template>
    <div style="background-color: aqua; padding: 10px;">
        <h1>GrandFather</h1>
        <label for="fnId">Prénom : </label>
        <input type="text" id="fnId" v-model="firstname" />

        <Father :firstname="firstname" />
    </div>
</template>
