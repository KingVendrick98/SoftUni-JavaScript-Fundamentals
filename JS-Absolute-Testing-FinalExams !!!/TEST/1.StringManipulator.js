function solve(input) {

    let output = '';

    for (let line of input) {
        let [command, arg] = line.split(' ');

        if (command == 'Add') {
            output += arg;
        } else if (command == 'Upgrade') {
            let regex = new RegExp(`${arg}`,'g');
            let changedArr = String.fromCharCode(arg.charCodeAt(0) + 1);
            output = output.replace(regex, changedArr);
        } else if (command == 'Print') {
            console.log(output);
        } else if (command == 'Index') {
            let firstOccur = output.indexOf(arg);
            if (firstOccur === -1) {
                console.log(`None`);
            } else {
                let indieces = [];
                for (const idx in output) {
                    if (output[idx] === arg) {
                        indieces.push(idx)
                    }
                }
                console.log(indieces.join(' '))
            }
        } else if (command == 'Remove') {
            let regex = new RegExp(`${arg}`, 'g');
            output = output.replace(regex, '');
        }
    }
}
solve([ 'Add abracadabra',
'Print',
'Upgrade a',
'Print',
'Index b',
'Remove bbrb',
'Print',
'End' ]
)