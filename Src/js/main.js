export const canvas = document.querySelector('#draw');
export const ctx = canvas.getContext('2d');
export const cw = canvas.width = window.innerWidth - 5;
export const ch = canvas.height = window.innerHeight - 55;

import Candy from './drawCandy';
import Bug from './drawBugs';
import Points from './pointsControl';
import Levels from './levelHandler';
import Health from './healthHandler';

console.log(cw);
console.log(ch);

const candy = new Candy(cw / 2, ch / 2);
const points = new Points(0);
const levels = new Levels(0, 0, false);
const health = new Health(100);

let start = false;
let index = 0;
let bugsArray = [];
const levelsArray = levels.generateLevels();
console.table(levelsArray);


function createArmyOfBugs() {
  let amount = 2;
  setInterval(() => {
    for (let i = 0; i < amount; i++) {
      let bug = new Bug(0, 0);
      bug.setPosition();
      bug.setVelocityVector(candy.x, candy.y);
      bugsArray.push(bug)
    }
  }, 3000);
  console.log(bugsArray);
  if(levels.ready === false){
    return;
  }
}

//Continiuose game play

function gameLoop() {
  ctx.clearRect(0, 0, cw, ch);
  candy.drawCandy();
  drawBugs();
  collisionBug();
  infobarDataUpdate();
  if (levels.levelNumber === 0 && levels.ready === false) {
    levels.setLevelTime(levelsArray[index].time);
    levels.setLevelNumber(levelsArray[index].levelNumber);
    console.log(levels.levelNumber);
    console.log(levels.time);
    console.log(levels.ready);
    levels.screenNextLevel();
    return;
  }
  if (levels.time <= 0 && levels.ready === true) {
    levels.setLevelReady(false);
    index = index + 1;
    console.log("dsadasdsadaas" + index);
    levels.setLevelTime(levelsArray[index].time);
    levels.setLevelNumber(levelsArray[index].levelNumber);
    console.log(levels.levelNumber);
    console.log(levels.time);
    console.log(levels.ready);
    levels.screenNextLevel();
    return;
  }
  // if (levels.ready === true && levels.time > 0){
  //   nextLevel();
  //   return;
  // };
  requestAnimationFrame(gameLoop);
}

// Function for catching bugs
function catchBug(e) {
  bugsArray.forEach(bug => {
    bug.deleteBug(e.offsetX, e.offsetY, 15);
  });
  bugsArray.forEach(bug => {
    if (bug.radius === 0) {
      bugsArray.splice(bugsArray.indexOf(bug), 1);
      points.countPoints();
    }
  });
  console.log(e);
  console.log(bugsArray);
  console.log('works');
  console.log(index);
}

// Function for bugs collision
function collisionBug() {
  bugsArray.forEach(bug => {
    bug.deleteBug(candy.x, candy.y, candy.radius);
  });
  bugsArray.forEach(bug => {
    if (bug.radius === 0) {
      bugsArray.splice(bugsArray.indexOf(bug), 1);
      health.decreaseHealth();
    }
  });
}

function drawBugs() {
  bugsArray.forEach(bug => {
    bug.drawBug();
    bug.moveOfBug(candy.x, candy.y, candy.radius);
  });
}

function nextLevel() {
  if(levels.ready === true){
  ctx.clearRect(0, 0, cw, ch);
  createArmyOfBugs();
  countLevelTime();
  console.log('works');
  requestAnimationFrame(gameLoop);};
  if(levels.ready === false){
    console.log('stop');
    return;
  }
  
}


function infobarDataUpdate() {
  document.getElementById('level-number').innerHTML = `${levels.levelNumber}`;
  document.getElementById('health').innerHTML = `${health.health}`;
  document.getElementById('points').innerHTML = `${points.points}`;
  document.getElementById('time-to-level-end').innerHTML = `${levels.time}`;
}

function countLevelTime() {
  if(levels.ready === true){
  setInterval(() => {
    levels.setLevelTime(--levels.time);
    console.log(levels.time);
  }, 1000);} else {
    return;
  }
}

const button = document.getElementById('button')
canvas.addEventListener('mousedown', catchBug);
button.addEventListener('mousedown', () => levels.setLevelReady(true));


canvas.addEventListener('mousedown', () =>  {if (levels.ready === true){
  nextLevel();} else {return;}
});


requestAnimationFrame(gameLoop);