function solve(input) {
    let prime = true;
    for (let i = 2; i <= input; i++) {
        if (input % i == 0) {
            prime = false;
            console.log(prime)
            break;
        } 
    }
    return prime && (input > 1);
}
 
solve(7)