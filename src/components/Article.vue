<script setup>
import { useSlots } from 'vue';

const slots = useSlots();
console.log(slots.auteurArticle);
</script>

<template>
    <h1><slot name="titreArticle" /></h1>
    <p><slot /></p>
    <template v-if="$slots.auteurArticle">
        <u>Auteur: </u><em><slot name="auteurArticle" /></em>
    </template>
    <hr></hr>
</template>