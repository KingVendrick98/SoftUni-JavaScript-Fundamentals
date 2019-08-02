function solve(input) {
    let result = '';
    for (let line of input) {
        let [command, str] = line.split(' ');
        if (command === 'End') {
            break;
        }
        if (command === 'Add') {
            result += str;
        } else if (command === 'Upgrade') {
            result = result.replace(new RegExp(str, 'g'), String.fromCharCode(str.charCodeAt() + 1))
        } else if (command === 'Print') {
            console.log(result);
        } else if (command === 'Index') {
            let indeces = result.split('').map((e, id) => {
                if (e === str) {
                    return id
                }
            }).filter(e => e == Number(e)).join(' ')
            console.log(indeces.length > 0? indeces : 'None');
        } else if (command === 'Remove') {
            result = result.replace(new RegExp(str, 'gi'), '')
        }
    }
}
solve(['Add abracadabra',
'Print',
'Upgrade a',
'Print',
'Index b',
'Remove bbrb',
'Print',
'End' ])