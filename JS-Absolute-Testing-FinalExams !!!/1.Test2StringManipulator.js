function stringManipulator(input) {
    output = '';
 
    for (const line of input) {
        let [command, arg] = line.split(' ');
 
        if(command === 'Add') {
            output += arg;
        }
 
        if(command === 'Upgrade') {
            let changedChar = String.fromCharCode(arg.charCodeAt(0) + 1);
            let rgx = new RegExp(`${arg}`, 'g')
           output = output.replace(rgx, changedChar)
        }
 
        if(command === 'Print') {
            console.log(output)
        }
 
        if(command === 'Index') {
            let firstOccur = output.indexOf(arg);
            if(firstOccur === -1) {
                console.log('None');
                return;
            } else {
                let indices = [];
                for (const idx in output) {
                    if(output[idx] === arg) {
                        indices.push(idx)
                    }
                }
                console.log(indices.join(' '))
            }
        }
 
        if(command === 'Remove') {
            let rgx = new RegExp(`${arg}`, 'g')
            output = output.replace(rgx, '')
        }
    }
}
 
stringManipulator(['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End' ]);