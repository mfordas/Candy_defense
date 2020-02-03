
class Points {
    constructor (points){
        this.points = 0;
    }

    countPoints(){
        return this.points++;
    }

    resetPoints(){
        return this.points = 0;
    }


}

export default Points;