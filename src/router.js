import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./routers/Home.vue'),
    },
    {
        path: '/algorithm',
        name: 'algorithm',
        component: () => import('./routers/Algorithm.vue'),
    },
    {
        path: '/vue',
        name: 'vue',
        // component: () => import(''),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;