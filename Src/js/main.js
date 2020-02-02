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

const candy = new Candy(cw / 2, ch / 2);
const points = new Points(0);
const levels = new Levels(0, 0, false);
const health = new Health(100);

let timeCount;
let bugsCreate;
let index = 0;
let bugsArray = [];
let levelsArray = [];

levelsArray = levels.generateLevels(menu.numberOfLevels);

function createArmyOfBugs() {
  let amount = 1;
  bugsCreate = setInterval(() => {
    for (let i = 0; i < amount; i++) {
      let bug = new Bug(0, 0);
      bug.setPosition();
      bug.setVelocityVector(candy.x, candy.y, levels.levelNumber);
      bugsArray.push(bug)
    }
  }, 1300-(levels.levelNumber*100));
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
    return;
  }
  if (levels.time <= 0 && levels.ready === true && health.health > 0) {
    levels.setLevelReady(false);
    clearInterval(timeCount);
    clearInterval(bugsCreate);
    bugsArray = [];
    index = index + 1;
    levels.setLevelTime(levelsArray[index].time);
    levels.setLevelNumber(levelsArray[index].levelNumber);
    menu.showMiddleLevel();
    return;
  }

  if(health.health <= 0 && levels.ready === true){
    clearInterval(timeCount);
    clearInterval(bugsCreate);
    bugsArray = [];
    index = 0;
    levels.setLevelTime(levelsArray[index].time);
    levels.setLevelNumber(levelsArray[index].levelNumber);
    menu.gameover();
    health.healthReload();
    levels.setLevelReady(false);
    menu.setReady(false);
    return;
  }

  requestAnimationFrame(gameLoop);
}

// Function for catching bugs
function catchBug(e) {
  bugsArray.forEach(bug => {
    bug.deleteBug(e.offsetX, e.offsetY, 50);
  });
  bugsArray.forEach(bug => {
    if (bug.radius === 0) {
      bugsArray.splice(bugsArray.indexOf(bug), 1);
      points.countPoints();
    }
  });
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
  }, 1000);
}

const button = document.getElementById('next-level');
const startButton = document.getElementById('start');
canvas.addEventListener('mousedown', catchBug);
canvas.addEventListener('click', catchBug);
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
menu.settings();
menu.credits();
menu.backToMainMenu();
menu.backToMainMenu2();
menu.saveSettings();
}

/*This function will load script and call the callback once the script has loaded*/
function loadScriptAsync(scriptSrc, callback) {
  if (typeof callback !== 'function') {
      throw new Error('Not a valid callback for async script load');
  }
  var script = document.createElement('script');
  script.onload = callback;
  script.src = scriptSrc;
  document.head.appendChild(script);
}

/* This is the part where you call the above defined function and "call back" your code which gets executed after the script has loaded */
loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=UA-149871373-1', function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-149871373-1');
})

requestAnimationFrame(gameLoop);