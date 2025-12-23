<script setup>
import { inject } from 'vue';

const firstnameInjected = inject('firstnameKey')
</script>

<template>
    <div style="background-color: yellowgreen; padding: 10px;">
        <h3>Son</h3>
        <p>{{ firstnameInjected }}</p>
    </div>
</template> 