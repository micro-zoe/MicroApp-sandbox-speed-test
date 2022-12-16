import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ './pages/list.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "table" */ './pages/table.vue'),
  },
];

export default routes;
