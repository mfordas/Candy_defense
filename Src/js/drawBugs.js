import bugSrc from '../img/insects/ant_2.png';

let bug = new Image();
bug.src = bugSrc;

class Bug {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 25;
        this.vx = 0;
        this.vy = 0;
        this.angle = 0;
    }

    setX(value){
        return this.x = value;
    }

    setY(value){
        return this.y = value;
    }

    setVX(value){
        return this.vx = value;
    }

    setVY(value){
        return this.vy = value;
    }

    setAngle(value){
        return this.angle = value;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
    getVX(){
        return this.vx;
    }

    getVY(){
        return this.vy;
    }
    getAngle(){
        return this.angle;
    }

    drawBug(canvasElement, canvasElementWidth, canvasElementHeight) {
        canvasElement.save();
        canvasElement.translate(this.x, this.y);
        canvasElement.rotate(this.setRotationAngle());
        canvasElement.translate(-this.x, -this.y);
        if(canvasElementWidth <= 480 || canvasElementHeight <= 480){
        canvasElement.drawImage(bug, this.x-(bug.width*0.07/2), this.y-(bug.height*0.07/2), bug.width*0.07, bug.height*0.07);}
        else {canvasElement.drawImage(bug, this.x-(bug.width*0.1/2), this.y-(bug.height*0.1/2), bug.width*0.1, bug.height*0.1);}
        canvasElement.restore();
    }

    getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    setPosition(canvasElementHeight, canvasElementWidth) {
        if (this.getRandomNumber(0, 100000) % 5 === 0 || this.getRandomNumber(0, 100000) % 3 === 0 || this.getRandomNumber(0, 100000) % 4 === 0 || this.getRandomNumber(0, 100000) % 2 === 0 || this.getRandomNumber(0, 100000) % 8 === 0) {
            if (this.getRandomNumber(0, 100000) % 2 === 0) {
                this.setX(this.getRandomNumber(0, canvasElementWidth));
            }
            if (this.getRandomNumber(0, 100000) % 2 !== 0) {
                this.y = canvasElementHeight;
                this.setX(this.getRandomNumber(0, canvasElementWidth));
            }
        }
        if (this.getRandomNumber(0, 100000) % 7 > 2 && this.getRandomNumber(0, 100000) % 7 !== 0) {
            this.x = 0;
            this.setY(this.getRandomNumber(0, canvasElementHeight));
        }
        if (this.getRandomNumber(0, 100000) % 7 <= 2 && this.getRandomNumber(0, 100000) % 7 !== 0) {
            this.x = canvasElementWidth;
            this.setY(this.getRandomNumber(0, canvasElementHeight));
        }


    }

    moveOfBug() {
        this.setX(this.x += this.vx);
        this.setY(this.y += this.vy);
    }

    deleteBug(x, y, r) {
        if (Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= (this.radius + r)) {
            return this.radius = 0;
        }
    }

    setVelocityVector(x, y) {
        let valueOfVelocity = 3.5;

        // Basic values of X speed and Y speed
        let basicYVelocity = (y - this.y);
        let basicXVelocity = (x - this.x);

        let multiplier = Math.abs(basicXVelocity/basicYVelocity);

        this.vy = valueOfVelocity/Math.sqrt((multiplier**2)+1);
        this.vx = this.vy*multiplier;

        basicXVelocity > 0 ? this.vx=this.vx : this.vx=-this.vx;
        basicYVelocity > 0 ? this.vy=this.vy : this.vy=-this.vy;

    }

    setRotationAngle(){
        
        if (this.vx > 0 && this.vy > 0){
            this.angle = (180*Math.PI/180)-(Math.atan((Math.abs(this.vx/this.vy))));
    }
        if (this.vx > 0 && this.vy < 0){
            this.angle = (90*Math.PI/180)-(Math.abs(Math.atan((this.vy/this.vx))));
    }
        if (this.vx < 0 && this.vy > 0){
            this.angle = (270*Math.PI/180)+(Math.atan((this.vy/this.vx)));
    }
        if (this.vx < 0 && this.vy < 0){
            this.angle = (270*Math.PI/180)+(Math.abs(Math.atan((this.vy/this.vx))));
    }

    return this.angle;
}


}

export default Bug;