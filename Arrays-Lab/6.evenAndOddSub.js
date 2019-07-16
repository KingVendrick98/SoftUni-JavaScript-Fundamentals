function solve(arr) {
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < arr.length; i++) {   
        arr[i] = Number(arr[i]);     
    }
    for (let area of arr) {
        if (area % 2 === 0) {
            evenSum += area
        } else {
            oddSum += area
        }
        
    }
    console.log(evenSum - oddSum)
}
solve([1,2,3,4,5,6])