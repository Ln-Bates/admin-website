import Vue from 'vue';

import Confirm from './confirm';
import Message from './message';

const plugins = [
  Confirm,
  Message
];

plugins.forEach(plugin => Vue.use(plugin));
