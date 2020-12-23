import Vue from 'vue';
import input from './input';
import click from './click';

const directives = [
  input, click
];

directives.forEach(item => {
  Vue.directive(item.name, item.directive);
});
