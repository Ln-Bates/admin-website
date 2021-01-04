import Vue from 'vue';

import Confirm from './confirm';

const plugins = [
  Confirm
];

plugins.forEach(plugin => Vue.use(plugin));
