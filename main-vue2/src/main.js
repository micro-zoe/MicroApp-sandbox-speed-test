import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routes from './router'
import App from './App.vue'

import microApp from '@micro-zoe/micro-app'
microApp.start()

import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'table',
    entry: 'http://localhost:3001',
    container: '#qiankun-table',
    activeRule: '/qiankun-table',
  },
  {
    name: 'list',
    entry: 'http://localhost:3001',
    container: '#qiankun-list',
    activeRule: '/qiankun-list',
  },
]);

start({
  sandbox: {
    experimentalStyleIsolation: true,
    speedy: true,
  }
});

Vue.config.productionTip = false
Vue.use(ElementUI)

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
