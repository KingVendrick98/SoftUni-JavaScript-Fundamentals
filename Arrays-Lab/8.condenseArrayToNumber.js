function solve(arr1) {
    let condensed = [];
    for (let i = 0; i < arr1.length - 1; i++) {
        condensed[i] = arr1[i] + arr1[i+1];
        arr1 = condensed
        
    }
    console.log(arr1)
}
solve([2,10,3])
