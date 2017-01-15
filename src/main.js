// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import discoverView from './views/movies-view';
import movieView from './views/movie-view';
import tvShowsView from './views/tvshows-view';
import tvShowView from './views/tvshow-view';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { name: 'discover', path: '/', component: discoverView },
    { name: 'movie', path: '/movie/:id', component: movieView },
    { name: 'tvshows', path: '/tvshows', component: tvShowsView },
    { name: 'tvshow', path: '/tvshow/:id', component: tvShowView },
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
