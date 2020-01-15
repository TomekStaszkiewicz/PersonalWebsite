export default class Dot {

    constructor( ctx, width, height)
    {
        this.x = Math.floor( Math.random()*width );
        this.y = Math.floor( Math.random()*height );
        this.size = Math.floor(Math.random()*10+1);
        this.ctx = ctx;
        this.velX = Math.floor( Math.random()*5 +1) * (Math.random() < 0.5 ? -1 : 1 );
        this.velY = Math.floor( Math.random()*5 +1) * (Math.random() < 0.5 ? -1 : 1 );
    }

    draw( ){
        this.ctx.fillRect( this.x, this.y, this.size, this.size );
    }

    move(w, h){
        const nextX = this.x + this.velX;
        const nextY = this.y + this.velY;
        this.velX *= (  nextX > w ) || (nextX < 0 )  ? -1 : 1;
        this.velY *= (nextY > h ) || ( nextY < 0 ) ? -1 : 1;

        this.x += this.velX;
        this.y += this.velY;
    }


}