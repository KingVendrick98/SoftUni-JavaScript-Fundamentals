function solve(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'soap') {
            sum += 10;
        } else if (arr[i] === 'water') {
            sum += sum * 0.20;
        } else if (arr[i] === 'vacuum cleaner') {
            sum += sum *0.25;
        } else if (arr[i] === 'mud') {
            sum -= sum * 0.10;
        }
        
    }
    console.log(`The car is ${sum.toFixed(2)}% clean.`)
}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])