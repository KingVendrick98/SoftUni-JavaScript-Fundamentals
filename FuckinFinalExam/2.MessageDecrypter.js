function solve (input) {
    let counter = 0
    let rowcheta = Number(input.shift());

    for (let line of input) {
       
       
    let tokens = line.split(' ');
    let name = tokens[0];
    
    let group = tokens[1].split('|');
    let groupLength = group.length;
        
        
        if (group[3] === '') {
            groupLength = group.length - 1;
        }
        
        let regex = /^([$%])[A-Z][a-z]+\1:/g;
        
        if (regex.test(name) && groupLength === 3) {
           
            let pop = group.pop();
            let regxNumber = /\d+/g;
            let word = '';

            let firstNum = Number(group[0].match(regxNumber));
            let firstNumToChar = String.fromCharCode(firstNum);
            
        let secNumber = Number(group[1].match(regxNumber));
        let secNumToChar = String.fromCharCode(secNumber);

        let thirdNum = Number(group[2].match(regxNumber));
        let thirdNumToChar = String.fromCharCode(thirdNum);

        word = `${firstNumToChar}${secNumToChar}${thirdNumToChar}`;

        name = name.split('$').join('');
        name = name.split('%').join('');


            console.log(`${name} ${word}`);

        } else {
            console.log('Valid message not found!');
        }        
       
       
        counter++;
        if (counter === rowcheta) {
            break;
        }
    }

}

solve(
[ '4',
'$Request$: [73]|[115]|[105]|',
'%Taggy$: [73]|[73]|[73]|',
'%Taggy%: [118]|[97]|[108]|',
'$Request$: [73]|[115]|[105]|[32]|[75]|' ]

);