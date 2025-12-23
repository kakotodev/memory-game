<script setup>
import { inject } from 'vue';
import Son from './Son.vue';

const props = defineProps(['firstname'])

const firstnameInjected = inject('firstnameKey')
</script>

<template>
    <div style="background-color: plum; padding: 10px;">
        <h2>Father</h2>
        <p>Inject : {{ firstnameInjected }}</p>
        <p>Props avec prefix : {{ props.firstname }}</p>
        <p>Props sans prefix : {{ firstname }}</p>
        
        <Son />
    </div>

</template>