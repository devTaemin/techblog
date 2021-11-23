import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/techblog',
        name: 'home',
        component: () => import('./routers/Home.vue'),
    },
    {
        path: '/techblog/algorithm',
        name: 'algorithm',
        component: () => import('./routers/Algorithm.vue'),
    },
    {
        path: '/techblog/development',
        name: 'development',
        component: () => import('./routers/Development.vue'),
    },
    {
        path: '/techblog/life',
        name: 'life',
        component: () => import('./routers/Life.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;