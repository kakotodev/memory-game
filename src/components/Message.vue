<script setup>
const props = defineProps(['label','level'])

function getClass() {
    if (props.level === 'error') {
        return "rouge"
    }
    else if (props.level === 'warning') {
        return "orange"
    }
    return ""
}
</script>

<template>
    <p :class="getClass()"> {{ props.label }}</p>
</template>

<style scoped>
.rouge {
    color: red;
}
.orange {
    color: orange;
}
</style>