function solve(input) {

    let pattern = /^(?<name>[A-Za-z0-9!@#$?]+)=(?<num>[\d]+)<<(?<code>[\w\W]+?)$/g;

    for (let line of input) {
        if (line == 'Last note') {
            break;
        } else {
            let result = pattern.exec(line)
            if (result !== null) {
                let key = Number(result.groups['num'])
                let code = result.groups['code']
                let name = result.groups['name']
                if (key === code.length) {
                    let pat = /[a-zA-Z0-9]+/g;
                    let arr = name.match(pat);
                    let finall = '';
                    if (arr === null) {
                        console.log(`Noting found!`);
                    } else {
                        for (let iterator of arr) {
                            finall += iterator;
                        }
                        console.log(`Coordinates found! ${finall} -> ${code}`);
                    }
                } else {
                    console.log(`Nothing found!`)
                }
            } else {
                console.log(`Nothing found!`)
            }
        }
    }
}
solve([ '!@Ma?na?sl!u@=7<<tv58ycb4845',
'E!ve?rest=.6<<tuvz26',
'!K@2.,##$=4<<tvnd',
'!Shiha@pan@gma##9<<tgfgegu67',
'!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
'Last note' ]
)