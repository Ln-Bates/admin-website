import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/reset.css';
import '@/styles/scroll-bar.scss';
// 注入全局组件
import 'components';
// 注入全局插件
import 'plugins';
// 注入全局指令
import 'directives';

Vue.use(ElementUI, { size: 'mini' });

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
