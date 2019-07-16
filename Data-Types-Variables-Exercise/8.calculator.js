function solve(num1, operator, num2) {
    let converted = 0;
    if (operator === '+') {
        converted = num1 + num2
        console.log(converted.toFixed(2));   
     } else if (operator === '-') {
        converted = num1 - num2
        console.log(converted.toFixed(2));
     } else if (operator === '/') {
        converted = num1 / num2
        console.log(converted.toFixed(2));
     } else if (operator === '*') {
        converted = num1 * num2
        console.log(converted.toFixed(2));
     }
    
}
solve(5,
    '+',
    10
    )