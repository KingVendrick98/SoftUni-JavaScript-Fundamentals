function solve(input) {
     let places = input.shift().split(', ');

     let list = {};

     for (let info of input) {
         if (!list.hasOwnProperty(info)) {
             list[info] = 1; 
         } else if (list.hasOwnProperty(info)) {
             list[info]++;
         } else {
             
         }
     }

     let sorted = Object.keys(list)
     .sort((a, b) => list[a] - list[b]);

     for (let key of sorted) {
         console.log(`${key}: ${list[key]}`)
     }
}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)