// import {
//     ctx
// } from './main';
import bloodSrc from '../img/blood/blood.png';

let blood = new Image();
blood.src = bloodSrc;

class Blood {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        
    }

    drawBlood(canvasElement) {
        canvasElement.drawImage(blood, this.x-(blood.width*0.1/2), this.y-(blood.height*0.1/2), blood.width*0.1, blood.height*0.1);
    }

    setX(value){
        return this.x = value;
    }

    setY(value){
        return this.y = value;
    }

}

export default Blood;