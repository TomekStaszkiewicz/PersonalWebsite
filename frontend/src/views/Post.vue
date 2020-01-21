<template>
  <section class="post-container">
     <div class="col-12 post-photo">
      <img :src="photourl + post.photo" :alt="post.title">
      </div>
    <article>
      <header>
      <h1>{{post.title}}</h1>
      </header>
      <p v-html="post.content">
      </p>
    </article>
  </section>
</template>

<script>
let apiURL = require('../router/api.js').publicURLS.post;
const axios = require('axios');
export default {
  name: 'post',
  props: ['id'],
  data(){
    return{
        post: {},
        photourl: '',
    }
  },
  mounted(){
    apiURL += this.$props.id;
    axios.get(apiURL)
      .then( res => {
        this.post = res.data[0];
    this.photourl = require('../router/api.js').publicURLS.getPhoto;

      })
      .catch( err => console.error('ERROR' +  err ));
  }
}
</script>
