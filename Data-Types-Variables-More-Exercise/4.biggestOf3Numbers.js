function solve(n1, n2, n3) {
    if (n1 > n2 && n3 < n1) {
        console.log(n1);
    } else if (n2 > n1 && n3 < n2) {
        console.log(n2)
    } else {
        console.log(n3)
    }
}
solve(5, -2, 7)