let wrap = document.getElementsByClassName("Game")[0];

let dragonHealth = 10;
let userHealth = 5;

while(dragonHealth > 0 && userHealth > 0){
    let damage = window.prompt("Enter the number of hits to hit the dragon with, Max is 5");

    randDamage = Math.floor(Math.random() * damage) + 1;
    if(randDamage > 5){
        dragonHealth = dragonHealth - 1;
    }
    else{
        dragonHealth = dragonHealth - randDamage;
    }
    if(dragonHealth > 0){
        dragRandDamage = Math.floor(Math.random() * 2) + 1;
        userHealth = userHealth - dragRandDamage;
    }
    else{
        wrap.innerHTML = "You Win! " + "User Health = " + userHealth + ", Dragon Health = " + dragonHealth;
        break;
    }
    if(userHealth <= 0){
        wrap.innerHTML = "The Dragon Wins! " + "User Health = " + userHealth + ", Dragon Health = " + dragonHealth;
        break;
    }
}
