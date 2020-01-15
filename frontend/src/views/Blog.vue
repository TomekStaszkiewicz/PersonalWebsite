<template>
  <section class="blog-container row">
      
      
      <a v-for="p in this.posts" 
      v-bind:key="p.id"
      :href="`/post/${p.id}`"
      class="col-12 blog-big my-3">
        <img :alt="p.title" :src="p.photo">
        <span>
          <h2 :title="p.title">{{ p.title.length > 30  ? p.title.substr( 0, 30 ) + '...' : p.title }}</h2>
          <p>
            {{ p.content.substr(0, 300)}}
          </p>
        </span>
      </a>

     
  </section>
</template>

<script>

  const axios = require('axios');
  const blogURL = require('../router/api.js').publicURLS.allPosts;

export default {
  name: 'blog',
  data(){
    return{
      posts: [],
    }
  },
  mounted(){
    axios.get(blogURL)
    .then( res => {
      //get posts from backend
      this.posts = res.data;
    })
      .catch( err => console.error(err));
  }
}
</script>
