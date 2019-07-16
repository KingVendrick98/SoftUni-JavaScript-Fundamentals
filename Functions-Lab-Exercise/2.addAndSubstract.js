function solve(a, b, c) {
    let sum = (firstNum, secondNum) => firstNum + secondNum;
    let subtract = (result, thirdNum) => result - thirdNum;

    let result = sum(a, b);
    console.log(subtract(result, c));
}