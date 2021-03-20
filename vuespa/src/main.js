import Vue from 'vue'
import VueRouter from 'vue-router';
import UserList from './UserList.vue';
import UserDetails from './UserDetails.vue';
import App from './App.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/users'},
  { path: '/users', component: UserList},
  { path: '/users/:id', component: UserDetails}
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});