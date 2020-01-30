import {
    cw,
    ch,
    ctx
} from './main';

class Levels {
    constructor (levelNumber, time, ready){
            this.levelNumber =levelNumber,
            this.time = time;
            this.ready = ready;
    }

    

    generateLevels(){
        let levelArray = [];
        for (let i=1; i<=10; i++){
            let newLevel = new Levels(i, i*10, false);
            levelArray.push(newLevel);
        }
        return levelArray;
    }

    setLevelTime(time){
        return this.time = time;
    }
    setLevelNumber(number){
        return this.levelNumber = number;
    }
    setLevelReady(value){
        console.log(value);
        return this.ready = value;
    }

    countLevelTime(){
        if(this.time > 0){
        setInterval(() => this.time = --this.time, 1000);
        console.log(this.time);
        return this.time;} else {return true}
    }

    screenNextLevel(){
        //Level 2
        ctx.clearRect(0, 0, cw, ch);
        let fontHeight = 50;
        ctx.font = 50 + 'px Visitor';
        let textGameOVer = `Level ${this.levelNumber}!`;
        let textGameOverSize = ctx.measureText(textGameOVer);
        ctx.fillText(textGameOVer, cw / 2 - textGameOverSize.width / 2, ch / 2);
        //Press Space to move to next level
        ctx.font = '20px Visitor';
        let textPressSpace = 'Press Space to start';
        let textPressSpaceSize = ctx.measureText(textPressSpace);
        ctx.fillText(textPressSpace, cw / 2 - textPressSpaceSize.width / 2, ch / 2 + fontHeight / 1.5);
      };

}

export default Levels;