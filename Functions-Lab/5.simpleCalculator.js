function solve(num1, num2, operator) {
    let sum = 0;
    if (operator === 'multiply') {
        sum = num1 * num2;
    } else if (operator === 'divide') {
        sum = num1 / num2;
    } else if (operator === 'add') {
        sum = num1 + num2;
    } else {
        sum = num1 - num2;
    }
    console.log(sum)
}
solve(5,
    5,
    'multiply'
    )