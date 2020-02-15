import candySrc from '../img/candy/candy.png';

let candy = new Image();
candy.src = candySrc;

class Candy {
    constructor (x,y){
        this.x = x;
        this.y = y;
        this.radius = 50;
    }

    drawCandy(canvasElement){
        canvasElement.drawImage(candy, this.x-(candy.width*0.25/2), this.y-(candy.height*0.25/2), candy.width*0.25, candy.height*0.25);
    }


}

export default Candy;