<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link :to="{ name: 'discover' }" class="navbar-brand">
        <img src="https://vuejs.org/images/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Mo<span>Vue</span>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{ name: 'discover' }" class="navbar-brand">
              <a class="nav-link" href="#">Movies</span></a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'tvshows' }" class="navbar-brand">
              <a class="nav-link" href="#">TV Shows</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
