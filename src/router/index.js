import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router