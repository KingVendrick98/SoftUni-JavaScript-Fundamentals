function solve() {
    let array = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            array.push(i)
        }    
    }
    console.log(array)
}
solve()