export const canvas = document.querySelector('#draw');
export const ctx = canvas.getContext('2d');
export const cw = canvas.width = window.innerWidth-5;
export const ch = canvas.height = window.innerHeight-5;

import Candy from './drawCandy';
import Bug from './drawBugs';

console.log(cw);
console.log(ch);

const candy = new Candy(cw/2, ch/2);

let bugsArray = [];

function createArmyOfBugs(){
  let amount = 10;
  
  for(let i=0; i<amount; i++){
    let bug = new Bug(0,0);
    bug.setPosition();
    bug.setVelocityVector(candy.x, candy.y);
    bugsArray.push(bug)
  }
  
  console.log(bugsArray);
}

function gameLoop(){
    ctx.clearRect(0,0, cw, ch);
    candy.drawCandy();
    bugsArray.forEach(bug => {
      bug.drawBug();
      bug.moveOfBug(candy.x,candy.y,candy.radius);
    });
    if (bugsArray.length === 0){
      console.log('Game over');
    }
    requestAnimationFrame(gameLoop);

}

function catchBug(e) {
  bugsArray.forEach(bug => {
    bug.deleteBug(e.offsetX, e.offsetY, 15);
  });
    bugsArray.forEach(bug =>{
      
    if(bug.radius === 0){
      bugsArray.splice(bugsArray.indexOf(bug), 1)}});
      console.log(e);
  console.log(bugsArray);
  console.log('works');
}

canvas.addEventListener('mousedown', catchBug);



createArmyOfBugs();
requestAnimationFrame(gameLoop);