function solve(input) {
    let output = '';

    for (let line of input) {
        let [command, arg] = line.split(' ');

        if (command == `End`) {
            break;
        } else if (command == 'Add') {
            output += arg;
        } else if (command == 'Upgrade') {
            let changedArg = String.fromCharCode(arg.charCodeAt(0) + 1);
            let regex = new RegExp(`${arg}`, `g`);
            output = output.replace(regex, changedArg);
        } else if (command == 'Print') {
            console.log(output);
        } else if (command == 'Index') {
            let firstOccur = output.indexOf(arg);
            if (firstOccur === -1) {
                console.log(`None`);
            } else {
                let indieces = [];
                for (let idx in output) {
                    if (output[idx] === arg) {
                        indieces.push(idx)
                    }
                }
                console.log(indieces.join(' '));
            }
        } else if (command == 'Remove') {
            let regex = new RegExp(`${arg}`,'g');
            output = output.replace(regex, '')
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