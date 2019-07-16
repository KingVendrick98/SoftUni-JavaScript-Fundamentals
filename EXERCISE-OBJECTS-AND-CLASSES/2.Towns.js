function solve(arr) {
    let town = {}
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(' | ')
        let city = element[0];
        let lat = Number(element[1]).toFixed(2);
        let long = Number(element[2]).toFixed(2);

        town.town = city;
        town.latitude = lat;
        town.longitude = long;
        console.log(town)
        
    }
    }
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)