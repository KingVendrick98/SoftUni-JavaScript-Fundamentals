function solve(array, rotations) {
    while (rotations > 0) {
    
        let firstEl = array[0];

        for (let i = 0; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }

        array[array.length - 1] = firstEl;

        rotations--;
    }
    console.log(array.join(' '));
}
solve([2, 4, 15, 31], 5)