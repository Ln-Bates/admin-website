const RouterContainer = () => import('components/router-container/index.vue');
const Example1 = () => import(/* webpackChunkName: "modules/views/example/example-1" */ 'views/example/example-1.vue');
const Example2 = () => import(/* webpackChunkName: "modules/views/example/example-2" */ 'views/example/example-2.vue');
const Example3 = () => import(/* webpackChunkName: "modules/views/example/example-2" */ 'views/example/example-3.vue');

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
    component: RouterContainer,
    meta: {
      title: '测试页面 - 2'
    },
    children: [
      {
        path: '',
        name: 'example3',
        component: Example2,
        meta: {
          title: '测试页面 - 3'
        }
      },
      {
        path: 'example3',
        name: 'example3',
        component: Example3,
        meta: {
          title: '测试页面 - 3'
        }
      }
    ]
  }
];
