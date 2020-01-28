import {
    cw,
    ch,
    ctx
} from './main';

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
        ctx.fillStyle = this.color;
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

    moveOfBug(x, y, r) {
        this.x += this.vx;
        this.y += this.vy;
        this.velocityDirectionChange(x, y, r);

    }

    velocityDirectionChange(x, y, r) {
        if (this.y + this.vy > ch || this.y + this.vy < 0) {
            this.vy = -this.vy;
        }
        if (this.x + this.vx > cw || this.x + this.vx < 0) {
            this.vx = -this.vx;
        }

        if (Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= (this.radius + r)) {
            if (y - this.y >= 0 && x - this.x >= 0) {
                this.vy = -this.vy;
            }
            if (y - this.y >= 0 && x - this.x >= 0) {
                this.vx = -this.vx;
            }
            if (y - this.y < 0 && x - this.x >= 0) {
                this.vy = -this.vy;
            }
            if (y - this.y < 0 && x - this.x >= 0) {
                this.vx = -this.vx;
            }
            if (y - this.y >= 0 && x - this.x < 0) {
                this.vy = -this.vy;
            }
            if (y - this.y >= 0 && x - this.x < 0) {
                this.vx = -this.vx;
            }
            if (y - this.y < 0 && x - this.x < 0) {
                this.vy = -this.vy;
            }
            if (y - this.y < 0 && x - this.x < 0) {
                this.vx = -this.vx;
            }



        }
    }

    deleteBug(x, y, r) {
        if (Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= (this.radius + r)) {
            this.radius = 0;
        }
    }

    setVelocityVector(x, y) {
        this.vy = (y - this.y) / 100;
        this.vx = (x - this.x) / 100;
    }



}

export default Bug;