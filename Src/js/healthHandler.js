class Health {
    constructor (health){
        this.health = health;
    }

    

    healthReload(){
        return this.health = 100;
    }

    
    decreaseHealth(){
        const healthBar = document.getElementById('health-level');
        healthBar.style.width = `${this.health}%`;
        if (this.health >35){
            healthBar.style.backgroundColor = `#02e30e`;
        } else {
            healthBar.style.backgroundColor = `#f0051c`;
        }
        return this.health = (this.health-5);
    }

}

export default Health;