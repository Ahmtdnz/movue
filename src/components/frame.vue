<template>
  <div class="row">
    <div class="col-md-4 card-deck" v-for="media in media">
      <div class="card text-left">
        <img class="card-img-top img-fluid" :src="posterUrl(media.poster_path)" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">{{media.original_title}} {{media.original_name}}</h4>
          <p class="card-text" v-text="media.overview"></p>
        </div>
        <div class="card-footer">
          <router-link :to="{ name: type, params: { id: media.id } }" class="btn btn-primary">
            Detail
          </router-link>
          <p class="average float-right">Rating: <span>{{media.vote_average}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IMAGE_URL } from '../constants';

export default {
  name: 'frame',
  props: ['media', 'type'],
  methods: {
    posterUrl: function (path) {
      return `${IMAGE_URL}${path}`;
    },
  },
};
</script>

<style media="screen">
  .card {
    margin-bottom: 30px;
  }
  .average {
    margin: 7px 0 0 0;
  }
  .average span {
    color: #0275d8;
    font-weight: 600;
  }
</style>
