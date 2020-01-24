export const canvas = document.querySelector('#draw');
export const ctx = canvas.getContext('2d');
export const cw = canvas.width = window.innerWidth;
export const ch = canvas.height = window.innerHeight;

import Candy from './drawCandy';
import Bug from './drawBugs';

console.log(cw);
console.log(ch);

const candy = new Candy(cw/2, ch/2);
const bug = new Bug(0,0);
bug.setVectorOfVelocity();

function gameLoop(e){
    ctx.clearRect(0,0, cw, ch);
    candy.drawCandy();
    bug.drawBug();
    bug.x += bug.vx;
    bug.y += bug.vy;
    if (bug.y + bug.vy > canvas.height || bug.y + bug.vy < 0) {
        bug.vy = -bug.vy;
      }
      if (bug.x + bug.vx > canvas.width || bug.x + bug.vx < 0) {
        bug.vx = -bug.vx;
      }
    requestAnimationFrame(gameLoop);

}

function catchBug(e){
    // e.preventDefault();
    console.log(e);
    const candy2 = new Candy(e.offsetX, e.offsetY);
    candy2.drawCandy();
    console.log('works');
}

canvas.addEventListener('mousedown', catchBug);


requestAnimationFrame(gameLoop);