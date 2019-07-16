function solve(arr1) {
    let newSum = 0;
    let originalSum = 0;
    for (let i = 0; i < arr1.length; i++) {
        originalSum += arr1[i];
        if (arr1[i] % 2 === 0) {
            arr1[i] += i;
        } else {
            arr1[i] -= i;
        }
        newSum += arr1[i];
       
    }
    console.log(arr1);
    console.log(originalSum);
    console.log(newSum);
    
}
solve([5, 15, 23, 56, 35])