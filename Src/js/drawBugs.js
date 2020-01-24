import {
    cw,
    ch,
    ctx
} from './main';

class Bug {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.vx = -(cw / 2) / 100;
        this.vy = (ch / 2) / 100;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    drawBug() {
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
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


    setVectorOfVelocity(){
        this.getRandomXBugPosition(0, cw);
        console.log(this.x);
        if (this.x===0 || this.x===cw){
        this.getRandomYBugPosition(0, ch);}
        else {this.y =0}

    }




}

export default Bug;