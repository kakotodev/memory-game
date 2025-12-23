import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js';

// création du router
const router = createRouter({
    history: createWebHistory(),
    routes
})

const application = createApp(App)
// déclaration du router
application.use(router)
application.mount('#app')
