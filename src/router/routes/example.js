const Example1 = () => import(/* webpackChunkName: "modules/views/example/example-1" */ 'views/example/example-1.vue');
const Example2 = () => import(/* webpackChunkName: "modules/views/example/example-2" */ 'views/example/example-2.vue');
export default [
    {
        path: '/example1',
        name: 'example1',
        component: Example1,
        meta: {
            title: '测试页面 - 1'
        }
    },
    {
        path: '/example2',
        name: 'example2',
        component: Example2,
        meta: {
            title: '测试页面 - 2'
        }
    },
]