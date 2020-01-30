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
        this.x += this.vx;
        this.y += this.vy;

    }

    deleteBug(x, y, r) {
        if (Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= (this.radius + r)) {
            this.radius = 0;
        }
    }

    setVelocityVector(x, y, speedX, speedY) {
        this.vy = (y - this.y) / speedY;
        this.vx = (x - this.x) / speedX;
    }

    setRotationAngle(){
        if (this.vx >= 0 && this.vy >= 0){
        return (90*Math.PI/180)+(Math.atan(Math.tan(this.vy/this.vx)))
    }
        if (this.vx >= 0 && this.vy <= 0){
        return (90*Math.PI/180)+(Math.atan(Math.tan(this.vy/this.vx)))
    }
        if (this.vx <= 0 && this.vy >= 0){
        return (270*Math.PI/180)+(Math.atan(Math.tan(this.vy/this.vx)))
    }
        if (this.vx <= 0 && this.vy <= 0){
        return (270*Math.PI/180)+(Math.atan(Math.tan(this.vy/this.vx)))
    }
}


}

export default Bug;