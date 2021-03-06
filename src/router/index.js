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
            hide: true
        },
    },
    {
        path: '/dashboard',
        meta: {
            icon: 'el-icon-platform-eleme',
            title: '主页',
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'dashboard',
                meta: {
                    icon: 'el-icon-platform-eleme',
                    title: 'Dashboard',
                },
                component: () => import('@/views/dashboard/dashboard')
            }
        ]
    },
    {
        path: '/valueTransfer',
        redirect: '/valueTransfer/parentToChildren',
        meta: {
            icon: 'el-icon-user-solid',
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
            },
            {
                path: 'Provide',
                name: 'Provide',
                meta: {
                    title: 'provide/inject',
                },
                component: () => import('@/views/valueTransfer/provide')
            },
            {
                path: 'Vuex',
                name: 'Vuex',
                meta: {
                    title: 'Vuex传值',
                },
                component: () => import('@/views/valueTransfer/vuexTransfer')
            }
        ]
    },
    {
        path: '/keepAlive',
        meta: {
            title: '路由缓存',
            icon: 'el-icon-star-on'
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'KeepAlive',
                meta: {
                    title: 'KeepAlive',
                    icon: 'el-icon-star-on',
                    keepAlive: true
                },
                component: () => import('@/views/keepAlive/keepAlive')
            }
        ]
    },
    {
        path: '/hookFn',
        redirect: '/hookFn/life',
        meta: {
            title: '钩子函数',
            icon: 'el-icon-s-promotion'
        },
        component: Layout,
        children: [
            {
                path: 'life',
                name: 'Life',
                meta: {
                    title: '生命周期钩子',
                },
                component: () => import('@/views/hookFn/life')
            },
            {
                path: 'routing',
                name: 'Routing',
                meta: {
                    title: '路由钩子',
                },
                component: () => import('@/views/hookFn/routing')
            },
        ]
    },
    {
        path: '/bridge',
        meta: {
            title: 'Bridge',
            icon: 'el-icon-s-tools'
        },
        component: Layout,
        children: [
            {
                path: '',
                name: 'Bridge',
                meta: {
                    title: '双向绑定',
                    icon: 'el-icon-s-tools'
                },
                component: () => import('@/views/bridge/bridge')
            }
        ]
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router;