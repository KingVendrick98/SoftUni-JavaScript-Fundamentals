function solve(num, array) {
    let arr = [];
    let output = '';

    for (let i = 0; i < num; i++) {
        
        arr.push(array[i]);
        
    }
    
    for (let j = arr.length - 1; j >= 0; j--) {
         arr.reverse(array[j])
         output = arr + "  ";
    }
    console.log(arr.join(' '));

}
solve(3, [10, 20, 30, 40, 50])