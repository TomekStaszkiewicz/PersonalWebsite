<template>
  <div class="home bg-black">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>

const Dot = require('../dots.js').default;
      
export default {
  name: 'home',
  data(){
    return{
      dots: [],
      canvas: null,
      height: 0,
      width: 0,
      ctx: null
    }
  },
  mounted(){
      this.canvas = document.querySelector('#myCanvas');
      this.height = this.canvas.height = window.innerHeight;
      this.width = this.canvas.width = window.innerWidth;
      this.ctx = this.canvas.getContext('2d');

      for( var i = 0; i<1000; i++)
          this.dots.push( new Dot(this.ctx, this.width, this.height));

      this.animateDots();
  },

  methods: {
       animateDots: function(){
        this.ctx.fillStyle = '#ffe6f0';
        this.ctx.fillRect(0, 0, this.width, this.height );
        this.ctx.fillStyle = "#000000";
        this.dots.forEach( el => el.draw());
        this.dots.forEach( el => el.move(this.width, this.height) );
        setTimeout( this.animateDots, 1000/60 );
    }
  }
}
</script>
