import {
    cw,
    ch,
    ctx
} from './main';
import bugSrc from '../img/insects/ant_2.png';

let bug = new Image();
bug.src = bugSrc;

class Bug {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.vx = 0;
        this.vy = 0;
        this.angle = 0;
        this.color = `hsl(${this.getRandomNumber(0,360)}, 100%, 50%)`;
    }

    drawBug() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.setRotationAngle());
        ctx.translate(-this.x, -this.y);
        ctx.drawImage(bug, this.x-(bug.width*0.1/2), this.y-(bug.height*0.1/2), bug.width*0.1, bug.height*0.1);
        ctx.restore();
        
    }

    getRandomXBugPosition(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return this.x = Math.floor(Math.random() * (max - min)) + min;
    }
    getRandomYBugPosition(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return this.y = Math.floor(Math.random() * (max - min)) + min;
    }

    getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    setPosition() {
        if (this.getRandomNumber(0, 10000) % 5 === 0 || this.getRandomNumber(0, 10000) % 3 === 0 || this.getRandomNumber(0, 10000) % 4 === 0 || this.getRandomNumber(0, 10000) % 2 === 0 || this.getRandomNumber(0, 10000) % 8 === 0) {
            if (this.getRandomNumber(0, 10000) % 2 === 0) {
                this.getRandomXBugPosition(0, cw);
            }
            if (this.getRandomNumber(0, 10000) % 2 !== 0) {
                this.y = ch;
                this.getRandomXBugPosition(0, cw);
            }
        }
        if (this.getRandomNumber(0, 10000) % 7 > 2 && this.getRandomNumber(0, 10000) % 7 !== 0) {
            this.x = 0;
            this.getRandomYBugPosition(0, ch);
        }
        if (this.getRandomNumber(0, 10000) % 7 <= 2 && this.getRandomNumber(0, 10000) % 7 !== 0) {
            this.x = cw;
            this.getRandomYBugPosition(0, ch);
        }


    }

    moveOfBug() {
        this.x += (this.vx);
        this.y += this.vy;

    }

    deleteBug(x, y, r) {
        if (Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= (this.radius + r)) {
            this.radius = 0;
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