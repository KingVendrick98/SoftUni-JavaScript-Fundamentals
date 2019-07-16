function solve(input) {
    let kidsList = input[0].split(`&`);
    for (let i = 1; i < input.length; i++) {
        let element = input[i].split(' ');
        let command = element[0];
        let name = element[1];

        if (command === 'Finished!') {
            break;
        }
        if (command === 'Bad' && !kidsList.includes(name)) {
            kidsList.unshift(name);
        }
        if (command === 'Good' && kidsList.includes(name)) {
            let nameIndex = kidsList.indexOf(name);
            kidsList.splice(nameIndex, 1);
        }
        if (command === 'Rename') {
            let newName = element[2];
            if (kidsList.includes(name)) {
                let oldNameIndex = kidsList.indexOf(name);
                kidsList.splice(oldNameIndex, 1, newName);
            }
        }
        if (command === 'Rearrange') {
            let nameIndex = kidsList.indexOf(name);
            let nameToAdd = kidsList.splice (nameIndex, 1);
            kidsList.push(...nameToAdd);
        }
        
    }
    console.log(kidsList.join(', '))
    
}
solve([ 'Peter&George&Mike',
 'Bad Joshua',
  'Good Peter',
   'Finished!' ])