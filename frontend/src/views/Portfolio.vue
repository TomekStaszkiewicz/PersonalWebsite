<template>
  <section class="portfolio-container row">
    <h1 class="col-12 ">Projects from GitHub</h1>
    <article class="col-12 col-md-6 col-lg-4 p-1 p-md-3" v-for="p in githubProjects"
    v-bind:key="p.id" 
    >
    <b-card
    :title="p.name"
    tag="div"
    class="h-100 portfolio-card"
    >
      <b-card-text v-text="p.description">
      </b-card-text>
      <b-button :href="p.html_url" class="btn portfolio-button">Show me the code!</b-button>
    </b-card>
    </article>
  </section>
</template>

<script>


export default {
  name: 'portfolio',
  data(){
    return{
      githubProjects: [],
      websiteLinks: [],
    }
  },

  mounted(){
    const URL = 'https://api.github.com/users/TomekStaszkiewicz/repos';
    
    fetch(URL)
      .then( res => res.json())
        .then(json => this.githubProjects = json)
          .catch( err => console.error(err));

      this.websiteLinks = ["http://www.sencare-de.com"];
  }
}
</script>
