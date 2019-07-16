function solve(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        let currentEl = arr[i];
        if (currentEl == 'add') {
            newArr += arr[i];
        } else {
            newArr -= arr[i];
        }
        
    }
    console.log(newArr)
}
solve(['add', 'add', 'add', 'add'])