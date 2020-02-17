import candySrc from '../img/candy/candy.png';
import { canvas } from './main';

let candy = new Image();
candy.src = candySrc;

class Candy {
    constructor (x,y){
        this.x = x;
        this.y = y;
        this.radius = 50;
    }

    drawCandy(canvasElement, canvasElementWidth, canvasElementHeight){
        if(canvasElementWidth <= 480 || canvasElementHeight <= 480){
        canvasElement.drawImage(candy, this.x-(candy.width*0.18/2), this.y-(candy.height*0.18/2), candy.width*0.18, candy.height*0.18);}
        else {canvasElement.drawImage(candy, this.x-(candy.width*0.25/2), this.y-(candy.height*0.25/2), candy.width*0.25, candy.height*0.25);}
    }


}

export default Candy;