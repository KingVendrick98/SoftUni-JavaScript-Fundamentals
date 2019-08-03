function solve(input) {

    let text = input[0]

    for (let line of input) {
        let [command, arg1, arg2] = line.split(' ');

        if (command == 'End') {
            break;
        } else if (command == 'Translate') {
            let regex = new RegExp(`${arg1}`, 'g');
            text = text.replace(regex, arg2);
            console.log(text)
        } else if (command == 'Includes') {
            if (text.includes(arg1)) {
                console.log(`True`);
            } else {
                console.log(`False`)
            }
        } else if (command == 'Start') {
            if (text.startsWith(arg1)) {
                console.log(`True`);
            } else {
                console.log(`False`)
            }
        } else if (command == 'Lowercase') {
            text = text.toLowerCase();
            console.log(text)
        } else if (command == 'FindIndex') {
            let lastIndex = text.lastIndexOf(arg1);
            console.log(lastIndex)
        } else if (command == 'Remove') {
            arg1 = +arg1;
            arg2 = +arg2;
           let slicedText = text.substr(arg1, arg2);
           let regexx = new RegExp(`${slicedText}`, 'g');
           text = text.replace(regexx, '')
            console.log(text)
        }
    }
}
solve([ '//Thi5 I5 MY 5trING!//',
'Translate 5 s',
'Includes string',
'Start //This',
'Lowercase',
'FindIndex i',
'Remove 0 10',
'End' ]
)