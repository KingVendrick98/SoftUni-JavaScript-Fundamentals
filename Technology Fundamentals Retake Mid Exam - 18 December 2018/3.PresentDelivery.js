function solve(input) {
     let houses = input.shift().split('@').map(Number);
     let santaIndex = 0;
     for (let arg of input) {
         let [command, timesToJump] = arg.split(' ');
         timesToJump = +timesToJump;
         if (command == 'Jump') {
             if (santaIndex + timesToJump >= houses.length) {
                 santaIndex = (santaIndex + timesToJump) % houses.length;
             } else {
                 santaIndex += timesToJump;
             }
         } else {
             break;
         }
         if (houses[santaIndex] == 0) {
            console.log(`House ${santaIndex} will have a Merry Christmas.`);
         } else {
             houses[santaIndex] -= 2;
         }
         
     }
     console.log(`Santa's last position was ${santaIndex}.`);

    let failedHouses = houses.filter(x => x != 0).length;

    if (failedHouses > 0) {
        console.log(`Santa has failed ${failedHouses} houses.`);

    }
    else {
        console.log(`Mission was successful.`);

    }
}
solve([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Merry Xmas!' ])