// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import discoverView from './views/discover-view';
import movieView from './views/movie-view';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { name: 'discover', path: '/', component: discoverView },
    { name: 'movie', path: '/movie/:id', component: movieView },
  ],
  mode: 'history',
  root: '/',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
