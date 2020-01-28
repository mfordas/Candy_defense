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
const levels = new Levels(0,0);
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
}

//Continouse game play

function gameLoop() {
  ctx.clearRect(0, 0, cw, ch);
  candy.drawCandy();
  drawBugs();
  collisionBug();
  infobarDataUpdate();
  if (levels.time < 0) {

    ++index;
    start = false;
    levels.setLevelTime(levelsArray[index].time);
    levels.setLevelNumber(levelsArray[index].levelNumber);
    ctx.clearRect(0, 0, cw, ch);
    candy.drawCandy();
    drawBugs();
    collisionBug();
    infobarDataUpdate();
    requestAnimationFrame(gameLoop);
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

function infobarDataUpdate() {
  document.getElementById('level-number').innerHTML = `${levels.levelNumber}`;
  document.getElementById('health').innerHTML = `${health.health}`;
  document.getElementById('points').innerHTML = `${points.points}`;
  document.getElementById('time-to-level-end').innerHTML = `${levels.time}`;
}

// function setLevelTime(time) {
//   console.log(`Level ${index+1}`)
//   time = levelsArray[index].time;
//   console.log(`Level time ${time}`);
// }


function countLevelTime() {
  setInterval(() => {
    levels.setLevelTime(--levels.time);
    console.log(levels.time);
  }, 1000);

}


// function levelChanger(time) {
//   if (time = 0 && start === false) {
//     return setLevelTime(time);
//   };
//   if (levels.time > 0 && start === true) {
//     createArmyOfBugs();
//   };
//   if (time < 0 && start === true) {
//     return start = false;
//   }

// }

const button = document.getElementById('button')
canvas.addEventListener('mousedown', catchBug);
button.addEventListener('mousedown', () => {
  levels.setLevelTime(levelsArray[index].time);
  levels.setLevelNumber(levelsArray[index].levelNumber);
  start = true;
  console.log('changed');
  console.log(levels);
  countLevelTime();
  createArmyOfBugs();
});


requestAnimationFrame(gameLoop);