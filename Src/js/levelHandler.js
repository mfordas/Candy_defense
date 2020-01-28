

class Levels {
    constructor (levelNumber, time){
            this.levelNumber =levelNumber,
            this.time = time;
    }

    

    generateLevels(){
        let levelArray = [];
        for (let i=1; i<=10; i++){
            let newLevel = new Levels(i, i*10);
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

    countLevelTime(){
        if(this.time > 0){
        setInterval(() => this.time = --this.time, 1000);
        console.log(this.time);
        return this.time;} else {return true}
    }

}

export default Levels;