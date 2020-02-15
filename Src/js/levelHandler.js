class Levels {
    constructor (levelNumber, time, ready){
            this.levelNumber =levelNumber,
            this.time = time;
            this.ready = ready;
            this.intervalCountLevelTime = null;
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

    countLevelTime() {
        this.intervalCountLevelTime = setInterval(() => {
          this.setLevelTime(--this.time);
        }, 1000);

        return this.time;
      }

      stopCountLevelTime (){
      clearInterval(this.intervalCountLevelTime);
    }

}

export default Levels;