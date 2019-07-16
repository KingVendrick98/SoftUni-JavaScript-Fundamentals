function solve(num) {
    let stringer = [];
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < num; i++) {
        stringer += num
        if (num % 2 == 0) {
            sumEven += num[i];
        } else {
            sumOdd += num[i];
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}
solve(1000435)