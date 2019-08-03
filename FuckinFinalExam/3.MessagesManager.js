function solve (input) {

    let capacity = +input.shift();

    let usersCount = 0;
    let records = {};

    input.forEach(elem => {
        let [command, name, send, received] = elem.split('=');

        if (command == 'Add') {
            if (!records.hasOwnProperty(name)) {
                records[name] = [send, received]
                usersCount++;
            }
        } else if (command == 'Message') {
            if (records.hasOwnProperty(name) && records.hasOwnProperty(send)) {
                records[name][0]++;
                records[send][1]++;
                if (records[name] >= capacity) {
                    delete records[name];
                    usersCount--;
                    console.log(`${name} reached the capacity!`)
                } else {
                    if (records[send] >= capacity) {
                        delete records[send];
                        usersCount--;
                        console.log(`${send} reached the capacity!`)
                    }
                }
            }
        } else if (command == 'Empty') {
            if (records.hasOwnProperty(name)) {
                delete records
                delete records[name];
                usersCount--;
            } else if (name == 'All') {
                delete records;
                delete records[name]
                delete records[send]
                delete records[received]
                usersCount--
            }
        } else if (command == 'Statistics') {
            //records[name].reduce((a, b) => a + b)
            
            console.log(`Users count: ${usersCount}`)
             let finallRecords = Object.entries(records).sort((a, b) => b[1][1] - a[1][1] || b[0].localeCompare(a[0]));
            finallRecords.forEach(e => console.log(`${e[0]} - ${+e[1][0] + +e[1][1]}`));
        }
    });
}
solve([ `12`,
    `Add=Bonnie=3=5`,
    `Add=Johny=4=4`,
    `Empty=All`,
  `  Add=Bonnie=3=3`,
    `Statistics`]
)