import bloodSrc from '../img/blood/blood.png';

let blood = new Image();
blood.src = bloodSrc;

class Blood {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        
    }

    drawBlood(canvasElement, canvasElementWidth, canvasElementHeight) {
        if(canvasElementWidth <= 480 || canvasElementHeight <= 480){
        canvasElement.drawImage(blood, this.x-(blood.width*0.07/2), this.y-(blood.height*0.07/2), blood.width*0.07, blood.height*0.07);}
        else {canvasElement.drawImage(blood, this.x-(blood.width*0.1/2), this.y-(blood.height*0.1/2), blood.width*0.1, blood.height*0.1);}
    }

    setX(value){
        return this.x = value;
    }

    setY(value){
        return this.y = value;
    }

}

export default Blood;