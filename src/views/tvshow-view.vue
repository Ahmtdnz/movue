<template>
  <div class="col-md-12">
    <p v-if="loading">Loading...</p>
    <MediaDetail :media=media></MediaDetail>
  </div>
</template>
<script type="text/javascript">
import { API_URL, API_KEY } from '../constants';
import MediaDetail from '../components/mediaDetail';

export default {
  name: 'tvshowPage',
  components: {
    MediaDetail,
  },
  data() {
    return {
      loading: true,
      media: {},
    };
  },
  created() {
    fetch(`${API_URL}tv/${this.$route.params.id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then((res) => {
        this.media = res;
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
