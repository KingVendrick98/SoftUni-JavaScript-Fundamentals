function solve(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}
solve(2, 5, 3)