import {cw, ch, ctx} from './main';

class Candy {
    constructor (x,y){
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.vx = 5;
        this.vy = 10;
    }

    drawCandy(){
        
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();
    }


}

export default Candy;