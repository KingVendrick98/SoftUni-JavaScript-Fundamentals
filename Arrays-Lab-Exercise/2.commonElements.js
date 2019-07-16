function solve(arr1, arr2) {
    let first = '';
     for (let i = 0; i < arr1.length; i++) {
         
         for (let j = 0; j < arr2.length; j++) {
             if (arr1[i] === arr2[j]) {
                  first = arr1[i]
                  console.log(first)
             }
             
         }
     }
    
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)