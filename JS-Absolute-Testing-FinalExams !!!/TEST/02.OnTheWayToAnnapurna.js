function solve(input) {

    let diary = {};
    let notes = {};

    for (let line of input) {
        let [command, store, items] = line.split('->');

       

        if (command == 'END') {
            break;
        } else if (command == 'Add') {
            if (!diary.hasOwnProperty(store)) {
                diary[store] = items;
            } else {
                diary[store] += items;
            }
        } else if (command == 'Remove') {
            if (diary.hasOwnProperty(store)) {
                delete diary[store];
            }
        }
       
    }
    let finalProducts = Object.entries(diary).sort((a, b) => b[1] - a[1]);
    let finalStores = Object.entries(diary).sort((a,b) => a[0] - b[0])
    finalProducts = finalProducts.map(e => e[1].split(','))
    finalStores = finalStores.map(e => `${e[0]}\n<<${e[1]}>>`)
    finalProducts = finalProducts.map(e => `<<${e[1]}>>`)
    console.log(`Stores list:`)
    console.log(finalStores.join('\n'))
    

}
solve([ 'Add->PeakSports->Map,Navigation,Compass',
'Add->Paragon->Sunscreen',
'Add->Groceries->Dried-fruit,Nuts',
'Add->Groceries->Nuts',
'Add->Paragon->Tent',
'Remove->Paragon',
'Add->Pharmacy->Pain-killers',
'END' ]
)