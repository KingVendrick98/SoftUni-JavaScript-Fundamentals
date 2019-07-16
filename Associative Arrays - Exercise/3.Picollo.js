function solve(input) {
    let cars = [];

    for (let carDetails of input) {
        let [direction, number] = carDetails.split(', ');
        if (direction === 'IN') {
            if (!cars.includes(number)) {
                cars.push(number);
            }
        } else if (direction === 'OUT') {
            if (cars.includes(number)) {
                let index = cars.indexOf(number);
                cars.splice(index, 1);
            }
        }
    }

    if (cars.length > 0) {
        let sorted = cars.sort((a, b) => a.localeCompare(b));
        for (let carNum of sorted) {
            console.log(carNum);
        }
    } else {
        console.log('Parking Lot is Empty')
    }
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)