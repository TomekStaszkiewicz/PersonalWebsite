<template>
<header>
<b-navbar class="main-navbar" toggleable="md" >
      <b-navbar-brand to="/">Tomasz Staszkiewicz</b-navbar-brand> 

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <a href="https://www.linkedin.com/in/tomasz-staszkiewicz-a64a5415b" class="navbar-brand-icons">
         <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/TomekStaszkiewicz" class="navbar-brand-icons">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="mailto:staszkiewicztoma@gmail.com" class="navbar-brand-icons">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </b-navbar-nav>

      
          <b-navbar-nav class="ml-auto">
          
              <b-nav-item to="/about">About</b-nav-item>
            
              <b-nav-item to="/blog">Blog</b-nav-item> 
              <b-nav-item to="/contact">Contact</b-nav-item>
              <b-nav-item to="/portfolio">Portfolio</b-nav-item> 
            
          </b-navbar-nav>
    </b-collapse>
    
    
    </b-navbar>
</header>
</template>

<script>
    export default{
        name: 'navbar',
    }
</script>
