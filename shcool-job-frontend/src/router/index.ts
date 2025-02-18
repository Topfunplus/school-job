import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/Index.vue')
    },
    {
        path: '/like',
        name: 'like',
        component: () => import('@/views/like/Like.vue')
    },
    {
        path: '/job/:jobId',
        name: 'job',
        component: () => import('@/components/main/components/JobDetail.vue')
    },
    {
        path: '/talking',
        name: 'talking',
        component: () => import('@/components/socket/Socket.vue')
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router
