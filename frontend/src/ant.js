export default class Dot {

    constructor( ctx, size, x, y, turn)
    {
        this.x = x;
        this.y =  y;
        this.size = size;
        this.ctx = ctx;
        this.turn = turn;
    }

    draw( ){
        this.ctx.fillStyle = "green";
        this.ctx.fillRect( this.x, this.y, this.size, this.size );
    }

    move(el){
       
            this.draw();

            if( el.color === "#000000" )
           {
            this.turn += 90;
           }           
           else if(el.color === "#ffe6f0"){
            this.turn -= 90;
           }
           if( this.turn > 360 )this.turn = 90;
           else if(this.turn < 0)this.turn = 270;
            switch( this.turn )
            {
                 case 0:
                     this.x -= this.size;
                     break;
                 case 90: 
                     this.y -= this.size;
                     break;
                 case 180:
                     this.x += this.size;
                     break;
                 case 270:
                     this.y += this.size;
                     break;
                 case 360:
                     this.x -= this.size;
                     break;
            }
        

    }


}