export const canvas = document.querySelector('#draw');
export const ctx = canvas.getContext('2d');
export const cw = canvas.width = window.innerWidth - 5;
export const ch = canvas.height = window.innerHeight - 55;

import Candy from './drawCandy';
import Bug from './drawBugs';
import Points from './pointsControl';
import Levels from './levelHandler';
import Health from './healthHandler';
import * as menu from './menu';

console.log(cw);
console.log(ch);

const candy = new Candy(cw / 2, ch / 2);
const points = new Points(0);
const levels = new Levels(0, 0, false);
const health = new Health(100);

let speedReduceX;
let speedReduceY;
let timeCount;
let bugsCreate;
let index = 0;
let bugsArray = [];

const levelsArray = levels.generateLevels();
console.table(levelsArray);


function createArmyOfBugs() {
  let amount = 1;
  bugsCreate = setInterval(() => {
    for (let i = 0; i < amount; i++) {
      let bug = new Bug(0, 0);
      bug.setPosition();
      bug.setVelocityVector(candy.x, candy.y, speedReduceX, speedReduceY);
      bugsArray.push(bug)
    }
  }, 1200);
  console.log(bugsArray);
  if (levels.ready === false) {
    return;
  }
}

//Continuous game play
function gameLoop() {
  ctx.clearRect(0, 0, cw, ch);
  candy.drawCandy();
  drawBugs();
  collisionBug();
  infobarDataUpdate();
  if (levels.levelNumber === 0 && levels.ready === false) {
    levels.setLevelTime(levelsArray[index].time);
    levels.setLevelNumber(levelsArray[index].levelNumber);
    speedReduceX = 1200 / (levels.levelNumber * 10);
    speedReduceY = 1200 / (levels.levelNumber * 10);
    console.log(levels.levelNumber);
    console.log(levels.time);
    console.log(levels.ready);
    return;
  }
  if (levels.time <= 0 && levels.ready === true) {
    levels.setLevelReady(false);
    clearInterval(timeCount);
    clearInterval(bugsCreate);
    bugsArray = [];
    index = index + 1;
    console.log("dsadasdsadaas" + index);
    levels.setLevelTime(levelsArray[index].time);
    levels.setLevelNumber(levelsArray[index].levelNumber);
    console.log(levels.levelNumber);
    console.log(levels.time);
    console.log(levels.ready);
    menu.showMiddleLevel();
    return;
  }

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
    bug.moveOfBug();
    
  });
}

function nextLevel() {
  ctx.clearRect(0, 0, cw, ch);
  candy.drawCandy();
  createArmyOfBugs();
  countLevelTime();
  console.log('works');
  requestAnimationFrame(gameLoop);
};



function infobarDataUpdate() {
  document.getElementById('level-number').innerHTML = `${levels.levelNumber}`;
  document.getElementById('health').innerHTML = `${health.health}`;
  document.getElementById('points').innerHTML = `${points.points}`;
  document.getElementById('time-to-level-end').innerHTML = `${levels.time}`;
}

function countLevelTime() {
  timeCount = setInterval(() => {
    levels.setLevelTime(--levels.time);
    console.log(levels.time);
  }, 1000);
}

const button = document.getElementById('next-level');
const startButton = document.getElementById('start');
canvas.addEventListener('mousedown', catchBug);
button.addEventListener('mousedown', () => {
  levels.setLevelReady(true); {
    if (levels.ready === true) {
      nextLevel();
    } else {
      return;
    }
  }
});
startButton.addEventListener('mousedown', () => {
  levels.setLevelReady(true); {
    if (levels.ready === true) {
      nextLevel();
    } else {
      return;
    }
  }
});

if(menu.ready===false){
menu.startGame();
menu.nextLevel();
menu.setReady(true);}

requestAnimationFrame(gameLoop);