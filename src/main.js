import Vue from 'vue'

import App from './App.vue'
import Routes from './routes'
// to use http get and post
import VueResource from 'vue-resource'
Vue.use(VueResource);
// routing
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
//
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
