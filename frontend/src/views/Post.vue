<template>
  <section class="post-container">
     <div class="col-12 post-photo">
      <img :src="post.photo" :alt="post.title">
      </div>
    <article>
      <header>
      <h1>{{post.title}}</h1>
      </header>
      <p>
      {{post.content}}
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
    }
  },
  mounted(){
    apiURL += this.$props.id;
    axios.get(apiURL)
      .then( res => {
        console.log( res )
        this.post = res.data[0];
      })
      .catch( err => console.error( err ));
  }
}
</script>
