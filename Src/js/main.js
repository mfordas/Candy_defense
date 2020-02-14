export const canvas = document.querySelector('#draw');
export const ctx = canvas.getContext('2d');
export const cw = canvas.width = window.innerWidth - 5;
export const ch = canvas.height = window.innerHeight - 55;
import '../css/main.css';
import Candy from './drawCandy';
import Bug from './drawBugs';
import Blood from './drawBlood';
import Points from './pointsControl';
import Levels from './levelHandler';
import Health from './healthHandler';
import * as menu from './menu';
import * as google from './google_analytics';

const candy = new Candy(cw / 2, ch / 2);
const points = new Points(0);
const levels = new Levels(0, 0, false);
const health = new Health(100);
const blood = new Blood();

let bugsCreate;
let index = 0;
let bugsArray = [];
let levelsArray = [];

levelsArray = levels.generateLevels(menu.numberOfLevels);

//Continuous game play
function gameLoop() {
  ctx.clearRect(0, 0, cw, ch);
  candy.drawCandy(ctx);
  blood.drawBlood(ctx);
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
    levels.stopCountLevelTime();
    clearInterval(bugsCreate);
    bugsArray = [];
    blood.setY();
    blood.setX();
    index = index + 1;
    if (levelsArray.length > index) {
      levels.setLevelTime(levelsArray[index].time);
      levels.setLevelNumber(levelsArray[index].levelNumber);
      menu.showMiddleLevel();
    } else {
      levels.stopCountLevelTime();
      clearInterval(bugsCreate);
      bugsArray = [];
      index = 0;
      levels.setLevelTime(levelsArray[index].time);
      levels.setLevelNumber(levelsArray[index].levelNumber);
      health.healthReload();
      points.resetPoints();
      menu.finish();
    }
    return;
  }

  if (health.health <= 0 && levels.ready === true) {
    points.resetPoints();
    levels.stopCountLevelTime();
    clearInterval(bugsCreate);
    bugsArray = [];
    index = 0;
    levels.setLevelTime(levelsArray[index].time);
    levels.setLevelNumber(levelsArray[index].levelNumber);
    menu.gameover();
    health.healthReload();
    menu.tryAgain();
    return;
  }

  requestAnimationFrame(gameLoop);
}

// Create bugs
function createArmyOfBugs() {
  let amount = 1;
  bugsCreate = setInterval(() => {
    for (let i = 0; i < amount; i++) {
      let bug = new Bug(0, 0);
      bug.setPosition(ch, cw);
      bug.setVelocityVector(candy.x, candy.y);
      bugsArray.push(bug);
    }
  }, 1300 - (levels.levelNumber * 100));
}

// Function for catching bugs
function catchBug(e) {
  bugsArray.forEach(bug => {
    bug.deleteBug(e.offsetX, e.offsetY, 40);

  });
  bugsArray.forEach(bug => {
    if (bug.radius === 0) {
      bugsArray.splice(bugsArray.indexOf(bug), 1);
      points.countPoints();
      blood.setX(e.offsetX);
      blood.setY(e.offsetY);
    }
  });
}

//Bugs collision
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

// Draw bugs
function drawBugs() {
  bugsArray.forEach(bug => {
    bug.drawBug(ctx);
    bug.moveOfBug();
    blood.setY();
    blood.setX();
  });
}


function nextLevel() {
  ctx.clearRect(0, 0, cw, ch);
  candy.drawCandy(ctx);
  createArmyOfBugs();
  levels.countLevelTime();
  requestAnimationFrame(gameLoop);
};



function infobarDataUpdate() {
  document.getElementById('level-number').innerHTML = `${levels.levelNumber}`;
  document.getElementById('health').innerHTML = `${health.health}`;
  document.getElementById('points').innerHTML = `${points.points}`;
  document.getElementById('time-to-level-end').innerHTML = `${levels.time}`;
}

// Menu area
const button = document.getElementById('next-level');
const startButton = document.getElementById('start');
const tryAgain = document.getElementById('try-again');
const tryAgain2 = document.getElementById('try-again2');

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

tryAgain.addEventListener('mousedown', () => {
  levels.setLevelReady(true); {
    if (levels.ready === true) {
      nextLevel();
    } else {
      return;
    }
  }
});
tryAgain2.addEventListener('mousedown', () => {
  levels.setLevelReady(true); {
    if (levels.ready === true) {
      nextLevel();
    } else {
      return;
    }
  }
});

if (menu.ready === false) {
  menu.startGame();
  menu.nextLevel();
  menu.settings();
  menu.credits();
  menu.tryAgain();
  menu.tryAgain2();
  menu.backToMainMenu();
  menu.backToMainMenu2();
  menu.backToMainMenu3();
  menu.saveSettings();
}

document.getElementById('save-settings').addEventListener('mousedown', () => {
  if (menu.getSettingsReady() === true) {
    levelsArray = [...levels.generateLevels(menu.numberOfLevels)];
  }
});

export const sum = (a,b) => {
  return a+b;
}

google.loadScriptAsync();
requestAnimationFrame(gameLoop);