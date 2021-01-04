import Vue from 'vue';

const components = [
  { name: 'SimpleView', component: () => import('./simple-view/index.vue') },
  { name: 'TableView', component: () => import('./table-view/index.vue') },
  { name: 'Question', component: () => import('./question/index.vue') },
  { name: 'Detail', component: () => import('./detail/index.vue') },
  { name: 'Drawer', component: () => import('./drawer/index.vue') },
  { name: 'DrawerDetail', component: () => import('./drawer-detail/index.vue') },
  { name: 'SimpleDialog', component: () => import('./dialog/index.vue') },
];

components.forEach(item => Vue.component(item.name, item.component));

export default components;
