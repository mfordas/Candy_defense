const infobar = document.getElementById('infobar');
const infobar2 = document.getElementById('infobar2');
const container = document.getElementById('container');
const buttonsCont = document.getElementById('buttons-container');
const buttonsContMiddleLevel = document.getElementById('buttons-container-middle-level');
const settingsCont = document.getElementById('settings-container');
const creditsCont = document.getElementById('credits-container');
const gameoverCont = document.getElementById('gameover-container');
const finishCont = document.getElementById('finish-container');
let ready = false;
let settingsReady = false;
let numberOfLevels = 10;
let playerName = 'Player';

function startGame() {
    document.getElementById('start').addEventListener('mousedown', () => {
        infobar.classList.remove('hide');
        infobar2.classList.remove('hide');
        container.classList.remove('hide');
        buttonsCont.classList.add('hide');
        setSettingsReady(true);
        setReady(true);
    });
}

function showMiddleLevel() {
        container.classList.add('hide');
        buttonsContMiddleLevel.classList.remove('hide');
        ready = false
}


function nextLevel() {
    document.getElementById('next-level').addEventListener('mousedown', () => {
        container.classList.remove('hide');
        buttonsContMiddleLevel.classList.add('hide');
        ready = true
    });
}

function settings() {
    document.getElementById('settings').addEventListener('mousedown', () => {
        settingsCont.classList.remove('hide');
        buttonsCont.classList.add('hide');
        setSettingsReady(false);
    });
}

function saveSettings() {
    document.getElementById('save-settings').addEventListener('mousedown', () => {
        playerName = document.getElementById('player-name').value;
        numberOfLevels = document.getElementById('number-of-levels').value;
        setSettingsReady(true);
        settingsCont.classList.add('hide');
        buttonsCont.classList.remove('hide');
    });
}

function credits() {
    document.getElementById('credits').addEventListener('mousedown', () => {
        buttonsCont.classList.add('hide');
        creditsCont.classList.remove('hide');
    });
}

function gameover() {
        container.classList.add('hide');
        gameoverCont.classList.remove('hide');
}

function finish() {
        container.classList.add('hide');
        finishCont.classList.remove('hide');
}

function tryAgain() {
    const tryAgainButtonsCollection = document.getElementsByClassName('try-again');
    for (let tryAgainButton of tryAgainButtonsCollection){
        tryAgainButton.addEventListener('mousedown', () => {
        container.classList.remove('hide');
        gameoverCont.classList.add('hide');
    });}
}


function backToMainMenu() {
    const backButtonsCollection = document.getElementsByClassName('back-to-main-menu')
    for (let backButton of backButtonsCollection){
    backButton.addEventListener('mousedown', () => {
        infobar.classList.add('hide');
        infobar2.classList.add('hide');
        buttonsCont.classList.remove('hide');
        creditsCont.classList.add('hide');
        gameoverCont.classList.add('hide');
    })}
};


function setReady(value) {
    return ready = value;
}
function setSettingsReady(value) {
    return settingsReady = value;
}

function getSettingsReady (){
    return settingsReady;
}
function getReady (){
    return ready;
}
export {
    startGame,
    setReady,
    ready,
    nextLevel,
    showMiddleLevel,
    settings,
    saveSettings,
    credits,
    backToMainMenu,
    settingsReady,
    numberOfLevels,
    setSettingsReady,
    gameover,
    tryAgain,
    getSettingsReady,
    getReady,
    finish
};