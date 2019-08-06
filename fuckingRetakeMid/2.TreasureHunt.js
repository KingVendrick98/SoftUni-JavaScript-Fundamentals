function solve(input) {

    let items = input.shift().split('|');

    for (let line of input) {
        let splitted = line.split(' ');
        let command = splitted.shift();
        let predmeti = splitted

        if (command == 'Yohoho!') {
            break;
        }
         if (command == 'Loot') {
            predmeti.forEach(e => {
                  if (!items.includes(e)) {
                      items.splice(0, 0, e)
                  }   
            });
        } 
        if (command == 'Drop') {
            let index = +splitted[0];
            if (index >= 0 && index <= items.length) {
                let removedItem = items.splice(index, 1)
                items.push(removedItem.join(''));
            } else {
                void(0)
            }
        }
        if (command == 'Steal') {
            let count = +splitted[0];
            if (count > items.length) {
                 let stealedItems = items.splice(items, count);
                 console.log(stealedItems.join(', '))
            } else {
                let stealedItems = items.splice(items.length - count, count);
                console.log(stealedItems.join(', '))
            }
        }
    }
    let itemsAscii = items.join('').split('').map(x => x.charCodeAt(0));
    let sum = 0;
    let finallSum = 0;
    for (let word of items) {
        let abc = word.split('')
        sum += abc.length
    }
    finallSum = sum / items.length

    if (items.length > 0) {
        console.log(`Average treasure gain: ${finallSum.toFixed(2)} pirate credits.`)        
    } else {
        console.log(`Failed treasure hunt.`)
        
    }
}
solve(['Gold|Silver|Bronze|Medallion|Cup',
'Loot Wood Gold Coins',
'Loot Silver Pistol',
'Drop 3',
'Steal 3',
'Yohoho!' ]
)