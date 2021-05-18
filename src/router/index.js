import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            hide: true
        },
        component: () => import('@/views/login/login')
    },
    {
        path: '/',
        redirect: '/dashboard',
        meta: {
            title: '主页',
            hide: false
        },
        component: () => import('@/views/layout'),
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('@/views/dashboard/dashboard')
            }
        ]
    },
    {
        path: '/valueTransfer',
        redirect: '/parentToChildren',
        meta: {
            title: '传值',
            hide: false
        },
        component: () => import('@/views/layout'),
        children: [
            {
                path: '/parentToChildren',
                name: 'ParentToChildren',
                meta: {
                    title: '父传子',
                    hide: false
                },
                component: () => import('@/views/valueTransfer/parentToChildren')
            },
            {
                path: '/childrenToParent',
                name: 'ChildrenToParent',
                meta: {
                    title: '字传父',
                    hide: false
                },
                component: () => import('@/views/valueTransfer/childrenToParent')
            },
            {
                path: '/brotherToBrother',
                name: 'BrotherToBrother',
                meta: {
                    title: '兄弟传值',
                    hide: false
                },
                component: () => import('@/views/valueTransfer/brotherToBrother')
            }
        ]
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router;