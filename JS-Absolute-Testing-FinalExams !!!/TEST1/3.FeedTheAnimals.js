function solve(input) {

    let regions = {};
    let animals = {};
    let last = input.pop();

    input.forEach(elem => {
        let [command, animal, ammount, region] = elem.split(':');
        ammount = +ammount;

        if (command == 'Add') {
            if (!regions.hasOwnProperty(region)) {
                regions[region] = 1;
            } else if (regions.hasOwnProperty(region) && !animals.hasOwnProperty(animal)) {
                regions[region]++;
            }
             if (!animals.hasOwnProperty(animal)) {
                animals[animal] = ammount;
            } else if (animals.hasOwnProperty(animal)) {
                animals[animal] += ammount;
            }
        } else {
            if (animals.hasOwnProperty(animal)) {
                animals[animal] -= ammount;
            }
            if (animals[animal] <= 0) {
                delete animals[animal];
                console.log(`${animal} was successfully fed`)
                regions[region] -= 1;
                if (regions[region] === 0) {
                    delete regions[region];
                }
            }
        }
    });

    let lastAnimals = Object.entries(animals).sort((a, b) => b[1] - a[1]);
    console.log(`Animals:`);
    lastAnimals.forEach(e => console.log(`${e[0]} -> ${e[1]}g`));
    let lastRegions = Object.entries(regions).sort((a, b) => b[1] - a[1]);
    console.log(`Areas with hungry animals:`);
    lastRegions.forEach(e => console.log(`${e[0]} : ${e[1]}`))

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