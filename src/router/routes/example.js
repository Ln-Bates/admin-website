const RouterContainer = () => import('components/router-container/index.vue');
const Example1 = () => import(/* webpackChunkName: "modules/views/example/example-1" */ 'views/example/example-1.vue');
const Example2 = () => import(/* webpackChunkName: "modules/views/example/example-2" */ 'views/example/example-2.vue');
const Example3 = () => import(/* webpackChunkName: "modules/views/example/example-3" */ 'views/example/example-3.vue');

export default [
  {
    path: '/example',
    name: 'example',
    component: RouterContainer,
    meta: {
      title: '示例'
    },
    children: [
      {
        path: '',
        name: 'example-1',
        component: Example2,
        meta: {
          title: '部分功能'
        }
      },
      {
        path: 'view-simple',
        name: 'view-simple',
        component: Example1,
        meta: {
          title: '视图组件 - 空'
        }
      },
      {
        path: 'view-table',
        name: 'view-table',
        component: Example3,
        meta: {
          title: '视图组件 - 表格'
        }
      },
    ]
  }
];
