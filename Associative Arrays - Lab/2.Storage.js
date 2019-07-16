function solve(input) {
    let list = {}

    for (let products of input) {
        let tokens = products.split(' ');
        let name = tokens[0];
        let quantity = +tokens[1];

        if (list.hasOwnProperty(name)) {
            list[name] += quantity;
        } else {
            list[name] = quantity;

        }
    }
    // for (let key in list) {
    //     console.log(`${key} -> ${list[key]}`)
    // }
    let entries = Object.entries(list);

    for (let [key , value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)