import {
    cw,
    ch,
    ctx
} from './main';

let timeCount;

class Levels {
    constructor (levelNumber, time, ready){
            this.levelNumber =levelNumber,
            this.time = time;
            this.ready = ready;
    }

    

    generateLevels(numberOfLevels){
        let levelArray = [];
        for (let i=1; i<=numberOfLevels; i++){
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
        return this.ready = value;
    }

    countLevelTime(){
        if(this.time > 0){
        setInterval(() => this.time = --this.time, 1000);
        return this.time;} else {return true}
    }

    countLevelTime() {
        timeCount = setInterval(() => {
          this.setLevelTime(--this.time);
        }, 1000);
      }

      stopCountLevelTime (){
      clearInterval(timeCount);
    }

}

export default Levels;