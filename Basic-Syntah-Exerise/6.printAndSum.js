function solve(a, b) {
    let allsum = 0;
    let vsichki = ' ';
    for (let i = a; i <= b; i++) {
        vsichki += i + ' ';
        
        allsum += i 
    }
    console.log(vsichki);
    console.log(`Sum: ${allsum}`)
}
solve(5, 10)