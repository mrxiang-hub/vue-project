import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Layout from '@/views/layout/index'

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
        },
        component: Layout,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                meta: {
                    title: 'Dashboard'
                },
                component: () => import('@/views/dashboard/dashboard')
            }
        ]
    },
    {
        path: '/valueTransfer',
        redirect: '/valueTransfer/parentToChildren',
        meta: {
            title: '传值',
        },
        component: Layout,
        children: [
            {
                path: 'parentToChildren',
                name: 'ParentToChildren',
                meta: {
                    title: '父传子',
                },
                component: () => import('@/views/valueTransfer/parentToChildren')
            },
            {
                path: 'childrenToParent',
                name: 'ChildrenToParent',
                meta: {
                    title: '子传父',
                },
                component: () => import('@/views/valueTransfer/childrenToParent')
            },
            {
                path: 'brotherToBrother',
                name: 'BrotherToBrother',
                meta: {
                    title: '兄弟传值',
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