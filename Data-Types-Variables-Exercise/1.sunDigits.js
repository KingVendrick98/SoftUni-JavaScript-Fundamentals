function solve(num) {
    let numAsText = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsText.length; i++) {
        let digit = Number(numAsText.charAt(i));
        sum += digit;
    }

    console.log(sum);
}
solve(1634576)