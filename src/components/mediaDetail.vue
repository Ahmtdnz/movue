<template>
  <div class="col-md-12">
    <h1>{{media.original_title}}</h1>
    <div class="card text-left">
      <img class="card-img-top" v-bind:src="mediaImagePath" alt="Card image cap">
      <div class="card-block">
        <ul>
          <li><strong>Genres:</strong></li>
          <li v-for="genre in media.genres">{{genre.name}}</li>
        </ul>
        <ul>
          <li><strong>Production Companies:</strong></li>
          <li v-for="companies in media.production_companies">{{companies.name}}</li>
        </ul>
        <p class="card-text">{{media.overview}}</p>
        <p class="small-text">IMDB: <a :href="imdb">http://www.imdb.com/title/{{media.imdb_id}}/</a></p>
      </div>
  </div>
</template>
<script type="text/javascript">
import { IMAGE_URL } from '../constants';

export default {
  name: 'mediaDetailPage',
  props: ['media'],
  methods: {
    posterUrl: function (path) {
      return `${IMAGE_URL}${path}`;
    },
  },
  computed: {
    mediaImagePath: function () {
      return `${IMAGE_URL}${this.media.backdrop_path}`;
    },
    imdb: function () {
      return `http://www.imdb.com/title/${this.media.imdb_id}`;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
  margin: 30px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px 0 0;
}

a {
  color: #42b983;
}
</style>
