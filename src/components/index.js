import Vue from 'vue';

const components = [
    { name: 'SimpleView', component: () => import('./simple-view/index.vue') },
];

const useComponents = () => {
    components.forEach(item => {
        return Vue.component(item.name, item.component)
    })
}

Vue.use(useComponents);
export default components;
