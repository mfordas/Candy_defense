import {cw, ch, ctx} from './main';
import candySrc from '../img/candy/candy.png';

let candy = new Image();
candy.src = candySrc;

class Candy {
    constructor (x,y){
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.vx = 1;
        this.vy = 5;
    }

    drawCandy(){
        ctx.drawImage(candy, this.x-(candy.width*0.25/2), this.y-(candy.height*0.25/2), candy.width*0.25, candy.height*0.25);
    }


}

export default Candy;