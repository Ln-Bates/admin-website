const Error = () => import(/* webpackChunkName: "modules/error/index" */ '@/views/error/index.vue');
const Layout = () => import(/* webpackChunkName: "modules/layout/index" */ '@/layout/index.vue');
export const children = []
export const defaultRoutes = [
    {
        path: '',
        name: 'main',
        component: Layout,
        children
    },
    {
        path: '*',
        name: 'error',
        component: Error
    },
];
export default [
    ...defaultRoutes
]