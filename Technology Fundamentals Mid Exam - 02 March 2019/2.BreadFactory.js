function solve(arr) {
    let events = arr[0].split('|');
    let energy = 100;
    let coins = 100;
    let currEnergy;
    for (let i = 0; i < events.length; i++) {
        let splited = events[i].split('-');
        let command = splited[0];
        let number = +splited[1];
  
        switch (command) {
            case 'rest':
                currEnergy = energy;
                energy += number;
                if (energy < 100) {
                    console.log(`You gained ${number} energy.`);
                    console.log(`Current energy: ${energy}.`);
  
                }
                else {
  
                    console.log(`You gained ${100 - currEnergy} energy.`);
                    console.log(`Current energy: 100.`);
                    energy = 100;
                }
                break;
            case 'order':
                if (energy >= 30) {
                    console.log(`You earned ${number} coins.`);
                    coins += number;
                    energy -= 30;
  
                }
                else {
                    energy += 50;
                    console.log(`You had to rest!`);
                }
                break;
            default:
                if (coins - number > 0) {
                    console.log(`You bought ${command}.`);
                    coins -= number;
                }
                else {
                    console.log(`Closed! Cannot afford ${command}.`);
                    return;
                }
                break;
        }
    }
    console.log(`Day completed!`);
    console.log(`Coins: ${coins}`);
    console.log(`Energy: ${energy}`);
  }
solve([ 'rest-2|order-10|eggs-100|rest-10' ]
)