const infobar = document.getElementById('infobar');
const infobar2 = document.getElementById('infobar2');
const container = document.getElementById('container');
const buttonsCont = document.getElementById('buttons-container');
const buttonsContMiddleLevel = document.getElementById('buttons-container-middle-level');
let ready = false;

function startGame() {
    document.getElementById('start').addEventListener('mousedown', () => {
        infobar.classList.remove('hide');
        infobar2.classList.remove('hide');
        container.classList.remove('hide');
        buttonsCont.style.display = 'none';
        ready = true
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

function setReady(value) {
    ready = value;
}
export {
    startGame,
    setReady,
    ready,
    nextLevel,
    showMiddleLevel
};