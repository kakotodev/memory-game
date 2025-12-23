<script setup>
import { ref, computed } from 'vue';

import PageHome from './PageHome.vue';
import PageAbout from './PageAbout.vue';
import PageNotFound from './PageNotFound.vue';
import { RouterView, useRoute, useRouter } from 'vue-router';

const router = useRouter();
router.push("/home")
const route = useRoute()
</script>

<template>
    <h1>Application Page</h1>

    <RouterLink to="/home?dataId=123">Home</RouterLink>&nbsp;-&nbsp;<RouterLink to="/about">About</RouterLink>&nbsp;-&nbsp;<RouterLink to="/page-not-found">???</RouterLink>
    
    <RouterView />
    
    <!-- {{ router.currentRoute }} -->
    <!-- {{ route }} -->
</template>