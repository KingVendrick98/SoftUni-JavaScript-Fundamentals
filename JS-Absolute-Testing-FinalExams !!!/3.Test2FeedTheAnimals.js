function feedTheAnimals(input) {
    let areas = new Map;
 
    for (const line of input) {
 
        if(line === 'Last Info') {
            let animals = [];
            let areasKeys = [];
            for (const areaKey of areas.keys()) {
                let ar = areas.get(areaKey);
                animals.push(...ar);
                areasKeys.push([areaKey, ar.size])
               
            }
            let sortedAnimals = animals.sort((a,b) =>{
                if(a[1] === b[1]) {
                    return  a[0].localeCompare(b[0])
                } else {
                    return  b[1] - a[1]
                }
            });
            console.log('Animals:');
            for (const an of sortedAnimals) {
                console.log(`${an[0]} -> ${an[1]}g`)
            }
           
            let sortedKeys = areasKeys.filter(a => a[1] !== 0).sort((a, b) => b[1] - a[1]);
            console.log('Areas with hungry animals:');
            for (const a of sortedKeys) {
                console.log(`${a[0]} : ${a[1]}`)
            }
            return;
        }
 
        let [command, animal, foodLimit, area] = line.split(':');
        foodLimit = +foodLimit;
 
        if(command === 'Add') {
            if(!areas.has(area)) {
                areas.set(area, new Map)
            }
            let searchedArea = areas.get(area)
            if(!searchedArea.has(animal)) {
                searchedArea.set(animal, foodLimit)
            } else {
                let animalFoodLimit = searchedArea.get(animal);
                animalFoodLimit += foodLimit;
                searchedArea.set(animal, animalFoodLimit)
            }
        }
 
        if(command === 'Feed') {
            if(areas.has(area)) {
                let searchedArea = areas.get(area)
                if(searchedArea.has(animal)) {
                    let animalFoodLimit = searchedArea.get(animal);
                    animalFoodLimit -= foodLimit;
                    searchedArea.set(animal, animalFoodLimit)
                    if(animalFoodLimit <= 0) {
                        searchedArea.delete(animal);
                        console.log(`${animal} was successfully fed`)
                    }
                }
            }
        }
    }
}
 
feedTheAnimals(['Add:Maya:7600:WaterfallArea',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8830:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Bobbie:6300:DeepWoodsArea',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Last Info' ]);