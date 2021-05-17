import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/Dashboard'
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        meta: {
            title:'主页',
            module:'Dashboard'
        },
        component: () => import('@/pages/Dashboard/Dashboard')
    },
    {
        path: '/ParentToChildren',
        name: 'ParentToChildren',
        meta: {
            group:'传值',
            title:'父传子',
            module:'transfer'
        },
        component: ()=> import('@/pages/valueTransfer/parentToChildren')
    },
    {
        path: '/ChildrenToParent',
        name: 'ChildrenToParent',
        meta: {
            group:'传值',
            title:'子传父',
            module:'transfer'
        },
        component: ()=> import('@/pages/valueTransfer/childrenToParent')
    },
    {
        path: '/BrotherToBrother',
        name: 'BrotherToBrother',
        meta: {
            group:'传值',
            title:'兄弟传值',
            module:'transfer'
        },
        component: ()=> import('@/pages/valueTransfer/brotherToBrother')
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router;