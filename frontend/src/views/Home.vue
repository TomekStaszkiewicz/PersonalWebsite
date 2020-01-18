<template>
  <section class="home-container row">
    <a href="javascript:void(0)" @click="showInfo" class="main-question">
         <font-awesome-icon class="question-icon" :icon="['fas', 'question']" />
        </a>
    <canvas class="col-12" id="myCanvas"></canvas>
  </section>
</template>

<script>

const Ant = require('../ant.js').default;
import Swal from 'sweetalert2'; 

export default {
  name: 'home',
  data(){
    return{
      blocks: [],
      canvas: null,
      height: 0,
      width: 0,
      ctx: null,
      ant: {},
      size: 10,
    }
  },
  mounted(){
      this.canvas = document.querySelector('#myCanvas');
      this.height = this.canvas.height = window.innerHeight;
      this.width = this.canvas.width = window.innerWidth;
      this.ctx = this.canvas.getContext('2d');

      for( var i = 0; i<this.width/this.size; i++)
      {
        this.blocks[i] = new Array(Math.floor(this.height/this.size));
        for(var j = 0; j < this.height/this.size; j ++ )
              this.blocks[i][j] = {x:i*this.size, y:j*this.size, color:'#ffe6f0'};
      }
      const middleX = Math.round(this.blocks.length / 2); 
      const middleY = Math.round( this.blocks[middleX].length /2 );
      this.ant = new Ant(this.ctx, this.size, this.blocks[middleX][middleY].x, this.blocks[middleX][middleY].y, 90)
      this.moveAnt();
  },

  methods: {
       moveAnt: async function(){
         
         let prevBlock = await this.findPrev();
        this.ant.move(prevBlock);
          prevBlock.color = prevBlock.color === '#ffe6f0' ? '#000000' : '#ffe6f0';
        setTimeout(this.moveAnt, 1000/20);

    },
    findPrev: function(){
        this.blocks.forEach( el => el.forEach( b => {
        this.ctx.fillStyle = b.color;
        this.ctx.fillRect(b.x ,b.y, this.size, this.size );
      }));

         let prev= this.blocks.find( el => {
           return el[0].x === this.ant.x ? el : undefined;
         });
         return prev.find( el => {
           return el.y === this.ant.y ? el : undefined;
         });
    },

    showInfo: function(){
      Swal.fire({
    title: 'What is that?',
    icon: 'info',
    background: '#ffe6f0',
    html: 'Welcome to the 2d world where you can only move right or left. The rules are quite simple: <ol><li>If you stand on pink area you turn left</li><li>If you stand on black area you turn right</li></ol>There is one living creature down here - Langton\'s Ant. It isn\'t very smart so all it does is following the two rules. It seems like it is moving in some random way, but if you wait long enough( about 10 minutes ) you will see that our little friend starts to draw continuous pattern! From now on it will draw the exact same thing forever! If you want to know more about Langton\'s Ant <a target="_blank" href="https://en.wikipedia.org/wiki/Langton%27s_ant">CLICK HERE</a>'
      });
    }
  }
}
</script>
