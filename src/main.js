import Vue from 'vue'
import App from './App.vue'
import store from './store'

import animate from 'animate.css'
Vue.use(animate)

import VueRouter from 'vue-router';
Vue.use(VueRouter)

import vuescroll from 'vuescroll';
Vue.use(vuescroll);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
