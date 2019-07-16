function solve(array) {
    let indexOfBiggestSeq = -1;
    let maxSeqLength = 0;

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        let currentSeqLenght = 1;

        for (let j = i + 1; j < array.length; j++) {
            let nextEl = array[j];

            if (currentEl !== nextEl) {
                break;
            }
            
            currentSeqLenght++;
        }

        if (currentSeqLenght > maxSeqLength) {
            maxSeqLength = currentSeqLenght;
            indexOfBiggestSeq = i;
        }
        
    }
    let element = array[indexOfBiggestSeq];
    console.log(`${element} `.repeat(maxSeqLength));
}