function solve(arr) {
    let gifts = arr.shift().split(' ');
    for (let i = 0; i < arr.length; i++) {
        let [command, gift, index] = arr[i].split(' ');

        switch (command) {
            case 'OutOfStock':
            for (let j = 0; j < gifts.length; j++) {
                if (gifts.includes(gift)) {
                    let indexOfValue = gifts.indexOf(gift);
                    gifts.splice(indexOfValue,1,'None');
                }
            }
                break;
            case 'Required':
            index = +index;
                if (index >= 0 && index < gifts.length -1) { //Important row
                    gifts.splice(index,1,gift)
                }
                break; 
            case 'JustInCase':
                gifts.splice(gifts.length-1,1,gift)
                break;
            default:
           for (let k = 0; k < gifts.length; k++) {
               if (gifts.includes('None')) {
                   let indexOfNone = gifts.indexOf("None")
                   gifts.splice(indexOfNone,1)
               }
           }
            console.log(gifts.join(' '));
                break;
        }
    }
}
solve([ 'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
'OutOfStock Eggs',
'Required Spoon 2',
'JustInCase ChocolateEgg',
'No Money' ]
)