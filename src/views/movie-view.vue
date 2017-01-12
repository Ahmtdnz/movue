<template>
  <div class="col-md-12">
    <p v-if="loading">Loading...</p>
    <h1>{{movie.original_title}}</h1>
    <div class="card text-left">
      <img class="card-img-top" :src="image_url + movie.backdrop_path" alt="Card image cap">
      <div class="card-block">
        <ul>
          <li><strong>Genres:</strong></li>
          <li v-for="genre in movie.genres">{{genre.name}}</li>
        </ul>
        <ul>
          <li><strong>Production Companies:</strong></li>
          <li v-for="companies in movie.production_companies">{{companies.name}}</li>
        </ul>
        <p class="card-text">{{movie.overview}}</p>
        <p class="small-text">IMDB: <a :href="'http://www.imdb.com/title/' + movie.imdb_id">http://www.imdb.com/title/{{movie.imdb_id}}/</a></p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { IMAGE_URL, API_URL, API_KEY } from '../constants';

export default {
  name: 'moviePage',
  data() {
    return {
      loading: true,
      movie: {},
      image_url: IMAGE_URL,
    };
  },
  created() {
    fetch(`${API_URL}movie/${this.$route.params.id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then((res) => {
        console.log(res.original_title);
        this.movie = res;
        this.loading = false;
      });
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
