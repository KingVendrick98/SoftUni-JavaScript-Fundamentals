function solve(test) {
 
    let dungeon = test[0].split('|');
    let health = 100;
    let coins = 0;
 
    for (let i = 0; i < dungeon.length; i++) {
        let items = dungeon[i].split(' ');
        if (items[0] === 'potion') {
            items[1] = Number(items[1]);
            if (health + items[1] >= 100) {
                console.log(`You healed for ${100 - health} hp.`);
                console.log(`Current health: 100 hp.`);
                health = 100;
            } else {
                health+=items[1];
                console.log(`You healed for ${items[1]} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }
        if (items[0] === 'chest') {
            items[1] = Number(items[1]);
            coins += items[1];
            console.log(`You found ${items[1]} coins.`)
        }
        if (items[0] !== 'potion' && items[0] !== 'chest') {
            items[1]=Number(items[1]);
            health-=items[1];
            if (health>0){
                console.log(`You slayed ${items[0]}.`);
            } else{
                console.log(`You died! Killed by ${items[0]}.`)
                console.log(`Best room: ${i+1}`);
                break;
            }
        }
 
    }
    if (health>0){
        console.log(`You've made it!`);
       console.log(`Coins: ${coins}`);
       console.log(`Health: ${health}`);
   }
 
}
solve([ 'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000' ])