function solve(input) {

    let statusOfPirateShip = input.shift().split('>').map(Number);
    let statusOfWarShip = input.shift().split('>').map(Number);
    let maximuHealth = +input.shift();

    for (let line of input) {
        let splitted = line.split(' ');
        let command = splitted[0];

        if (command == 'Retire') {
            break;
        } 
        if (command == 'Fire') {
            let index = +splitted[1];
            let damage = +splitted[2];
            if (index >= 0 && index <= statusOfWarShip.length) {
                statusOfWarShip[index] -= damage;
                for (let j = 0; j <= statusOfWarShip.length; j++) {
                    if (statusOfWarShip[j] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
                
            }
        } 
        if (command == 'Defend') {
            let startIndex = +splitted[1];
            let endIndex = +splitted[2];
            let damage = +splitted[3];
            if (startIndex >= 0 && startIndex <= statusOfPirateShip.length && endIndex >= 0 && endIndex <= statusOfPirateShip.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    statusOfPirateShip[i] -= damage
                }
                for (let z = 0; z <= statusOfPirateShip.length; z++) {
                    if (statusOfPirateShip[z] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
            }
        } else if (command == 'Repair') {
            let index = +splitted[1];
            let health = +splitted[2];
            if (index >= 0 && index <= statusOfPirateShip.length) {
                if (statusOfPirateShip[index] < maximuHealth && statusOfPirateShip[index] + health < maximuHealth) {
                        statusOfPirateShip[index] += health;                        
                }
            }
        } else if (command == 'Status') {
            let smetnatoJivot = maximuHealth - (maximuHealth * 0.8)
            let sumOfRepairs = 0
            for (let e = 0; e < statusOfPirateShip.length; e++) {
                if (statusOfPirateShip[e] < smetnatoJivot) {
                    sumOfRepairs++;
                }
            }
            console.log(`${sumOfRepairs} sections need repair.`)            
        }
    }

    let pirateShipStatus = 0;
    let warShipStatus = 0;
    for (let sum of statusOfPirateShip) {
        pirateShipStatus += sum;
    }
    console.log(`Pirate ship status: ${pirateShipStatus}`)
    for (let sum of statusOfWarShip) {
        warShipStatus += sum;
    }
    console.log(`Warship status: ${warShipStatus}`)
}
solve([ '12>13>11>20>66',
'12>22>33>44>55>32>18',
'70',
'Fire 2 11',
'Fire 8 100',
'Defend 3 6 11',
'Defend 0 3 5',
'Repair 1 33',
'Status',
'Retire' ]

)