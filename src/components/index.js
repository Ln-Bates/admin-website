import Vue from 'vue';

const components = [
  {name: 'SimpleView', component: () => import('./simple-view/index.vue')},
  {name: 'TableView', component: () => import('./table-view/index.vue')},
];

components.forEach(item => Vue.component(item.name, item.component));

export default components;
