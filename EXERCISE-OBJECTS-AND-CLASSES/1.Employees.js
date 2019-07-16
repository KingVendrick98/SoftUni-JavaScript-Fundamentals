function solve(input) {
    let lengthOfName = 0;
    for (let names of input) {
        lengthOfName = names.length;
        console.log( `Name: ${names} -- Personal Number: ${lengthOfName}` )
         
    }

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )