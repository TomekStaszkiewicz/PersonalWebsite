<template>
  <div id="app">
    <Navbar></Navbar>
    
    
    <router-view/>
    <pagefooter></pagefooter>
  </div>
</template>
<script>

import Navbar from './components/Navbar.vue'
import pagefooter from './components/Footer.vue'
  export default{
    components: {
      Navbar,
      pagefooter
    }
  }

</script>
