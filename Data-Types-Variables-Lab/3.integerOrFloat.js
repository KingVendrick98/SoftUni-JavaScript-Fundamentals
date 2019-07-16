function solve(num1, num2, num3) {
    let result = 0;
    let kind = '';

    result = num1 + num2 + num3;

    if (result % 1 === 0) {
        kind = 'Integer'
    } else {
        kind = 'Float'
    }
    console.log(`${result} - ${kind}`)
}
solve(92, 10, 1.44)