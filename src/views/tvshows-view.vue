<template>
  <div class="col-md-12">
    <h1>Discover Popular TV Shows</h1>
    <p v-if="loading">Loading...</p>
    <Frame :media=media :type=type ></Frame>
  </div>
</template>

<script type="text/javascript">
import Frame from '../components/frame';
import { API_URL, API_KEY } from '../constants';

export default {
  name: 'tvShowsPage',
  components: {
    Frame,
  },
  data() {
    return {
      loading: true,
      movies: [],
      type: 'tvshow',
    };
  },
  created() {
    fetch(`${API_URL}discover/tv?sort_by=popularity.desc&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(res => res.results)
      .then((response) => {
        this.media = response;
        this.loading = false;
      });
  },
};
</script>

<style>
  h1 {
    text-align: left;
    margin: 30px 0;
  }
</style>
