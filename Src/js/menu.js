const infobar = document.getElementById('infobar');
const infobar2 = document.getElementById('infobar2');
const container = document.getElementById('container');
const buttonsCont = document.getElementById('buttons-container');
const buttonsContMiddleLevel = document.getElementById('buttons-container-middle-level');
const settingsCont = document.getElementById('settings-container');
const creditsCont = document.getElementById('credits-container');
let ready = false;
let settingsReady = false;
let numberOfLevels = 10;
let playerName = 'Player';

function startGame() {
    document.getElementById('start').addEventListener('mousedown', () => {
        infobar.classList.remove('hide');
        infobar2.classList.remove('hide');
        container.classList.remove('hide');
        buttonsCont.style.display = 'none';
        setSettingsReady(true);
        setReady(true);
    });
}

function showMiddleLevel() {
        infobar.classList.add('hide');
        infobar2.classList.add('hide');
        container.classList.add('hide');
        buttonsContMiddleLevel.classList.remove('hide');
        ready = false
}


function nextLevel() {
    document.getElementById('next-level').addEventListener('mousedown', () => {
        infobar.classList.remove('hide');
        infobar2.classList.remove('hide');
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
        console.log(playerName);
        console.log(numberOfLevels);
        setSettingsReady(true);
        console.log(settingsReady);
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
function backToMainMenu() {
    document.getElementById('back-to-main-menu').addEventListener('mousedown', () => {
        buttonsCont.classList.remove('hide');
        creditsCont.classList.add('hide');
        
    });
}

function setReady(value) {
    return ready = value;
}
function setSettingsReady(value) {
    return settingsReady = value;
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
    setSettingsReady
};