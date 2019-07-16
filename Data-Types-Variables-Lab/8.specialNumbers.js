function solve(n) {
    for (let i = 1; i <= n; i++) {
       let sum = 0;
       let num = i;
       for (let j = 0; j < i.toString().length; j++) {
           sum += num % 10;
           num /= 10;
           
       }
       if (sum == 5 || sum == 7 || sum == 11) {
           console.log(`${i} -> True`);
       } else {
           console.log(`${i} -> False`);
       }
    }
}
solve(15)