function solve(input) {

    let last = input.pop();
    let animals = {};
    let regions = {};

    input.forEach(elem => {
        let [command, animal, ammount, region] = elem.split(':');

        if (command == 'Add') {
            ammount = Number(ammount);

            if (!regions.hasOwnProperty(region)) {
                regions[region] = 1;
            } else if (regions.hasOwnProperty(region) && !animals.hasOwnProperty(animal)) {
                regions[region]++;
            }
            if (!animals.hasOwnProperty(animal)) {
                animals[animal] = ammount;
            } else {
                animals[animal] += ammount;
            }
        } else {
            if (animals.hasOwnProperty(animal)) {
                animals[animal] -= ammount;
            } 
            if (animals[animal] <= 0) {
                delete animals[animal];
                console.log(`${animal} was successfully fed`);
                regions[region] -= 1;
                if (regions[region] === 0) {
                    delete regions[region];
                }
            }
        }
    });
    let finalAnimals = Object.entries(animals).sort((a, b) => b[1] - a[1]);
    console.log(`Animals:`);
    finalAnimals.forEach(e => console.log(`${e[0]} -> ${e[1]}g`));
    let finalArea = Object.entries(regions).sort((a, b) => b[1] - a[1]);
    console.log(`Areas with hungry animals:`);
    finalArea.forEach(e => console.log(`${e[0]} : ${e[1]}`));
}
solve([ 'Add:Maya:7600:WaterfallArea',
'Add:Bobbie:6570:DeepWoodsArea',
'Add:Adam:4500:ByTheCreek',
'Add:Jamie:1290:RiverArea',
'Add:Gem:8730:WaterfallArea',
'Add:Maya:1230:WaterfallArea',
'Add:Jamie:560:RiverArea',
'Feed:Bobbie:6300:DeepWoodsArea',
'Feed:Adam:4650:ByTheCreek',
'Feed:Jamie:2000:RiverArea',
'Last Info' ]
)



// function solve(input) {
 
//     let last = input.pop();
//     let animals = {};
//     let regions = {};
 
//     input.forEach(elem => {
//         let [command, name, amount, region] = elem.split(':');
//         if (command === 'Add') {
//             amount = Number(amount)
 
//             if (!regions.hasOwnProperty(region)) {
//                 regions[region] = 1
//             } else if (regions.hasOwnProperty(region) && !animals.hasOwnProperty(name)) {
//                 regions[region]++
//             }
//             !animals.hasOwnProperty(name) ? animals[name] = amount : animals[name] += amount;
//         } else {
//             !animals.hasOwnProperty(name) ? void (0) : animals[name] -= amount;
//             if (animals[name] <= 0) {
//                 delete animals[name];
//                 console.log(`${name} was successfully fed`);
//                 regions[region] -= 1;
//                 if (regions[region] === 0) {
//                     delete regions[region]
//                 }
//             }
//         }
//     });
//     let finalAnimals = Object.entries(animals).sort().sort((a, b) => b[1] - a[1])
//     console.log(`Animals:`)
//     finalAnimals.forEach(e => console.log(`${e[0]} -> ${e[1]}g`))
//     let finalArea = Object.entries(regions).sort((a, b) => b[1] - a[1])
//     console.log(`Areas with hungry animals:`)
//     finalArea.forEach(e => console.log(`${e[0]} : ${e[1]}`))
 
// }