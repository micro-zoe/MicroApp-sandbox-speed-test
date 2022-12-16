import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

const router = new VueRouter({
  // mode: 'history',
  routes,
})


let app = null

// -------------------分割线-micro-app------------------ //
// if (window.__MICRO_APP_ENVIRONMENT__) {
//   app = new Vue({
//     router,
//     render: h => h(App),
//   }).$mount('#app')
  
//   // 监听卸载
//   window.unmount = () => {
//     app.$destroy()
//     app.$el.innerHTML = ''
//     app = null
//   }
// }


// -------------------分割线-qiankun------------------ //
export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  const { container } = props;
  app = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

export async function unmount() {
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
}


// -------------------分割线-非微前端------------------ //
if (!window.__MICRO_APP_ENVIRONMENT__ && !window.__POWERED_BY_QIANKUN__) {
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}


// window.bootstrap = async () => {
//   console.log('react app bootstraped');
// }

// window.mount = async (props) => {
// const { container } = props;
// app = new Vue({
//   router,
//   render: h => h(App),
// }).$mount(container ? container.querySelector('#app') : '#app')
// }

// window.unmount = async () => {
//   app.$destroy()
//   app.$el.innerHTML = ''
//   app = null
// }