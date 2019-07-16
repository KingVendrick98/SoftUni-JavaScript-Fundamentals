function solve(arr1, arr2) {
    let areEqual = true;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);        
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            areEqual = true;
            sum = arr1[i] + arr2[i];
            
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
        
        
    }
    while (areEqual == true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
        break;
    }
}
solve(['10','20','30'], ['10','20','30'])