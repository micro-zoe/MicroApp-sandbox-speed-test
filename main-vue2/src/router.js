import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/micro-app-table',
    name: 'micro-app-table',
    component: () => import(/* webpackChunkName: "micro-app-table" */ './pages/micro-app-table.vue'),
  },
  {
    path: '/micro-app-list',
    name: 'micro-app-list',
    component: () => import(/* webpackChunkName: "micro-app-list" */ './pages/micro-app-list.vue'),
  },
  {
    path: '/qiankun-table/*',
    name: 'qiankun-table',
    component: () => import(/* webpackChunkName: "qiankun-table" */ './pages/qiankun-table.vue'),
  },
  {
    path: '/qiankun-list/*',
    name: 'qiankun-list',
    component: () => import(/* webpackChunkName: "qiankun-list" */ './pages/qiankun-list.vue'),
  },
];

export default routes;
