import Vue from 'vue';
import input from './input';

const directives = [
    input
]

directives.forEach(item => {
    Vue.directive(item.name, item.directive);
})
