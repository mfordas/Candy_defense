class Health {
    constructor (health){
        this.health = health;
    }

    healthReload(){
        this.health = 100;
        const healthBar = document.getElementById('health-level');
        healthBar.style.width = `${this.health}%`;
        healthBar.style.backgroundColor = `#02e30e`;
        return this.health;
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