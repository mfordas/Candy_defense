class Health {
    constructor (health){
        this.health = health;
    }

    

    healthReload(){
        return this.health = 100;
    }

    
    decreaseHealth(){
        return this.health = --this.health;
    }

}

export default Health;