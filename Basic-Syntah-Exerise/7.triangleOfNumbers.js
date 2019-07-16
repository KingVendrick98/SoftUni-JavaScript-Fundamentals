function solve(n) {
    let line = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            line += i + ' ';
            console.log(line);
                        
        }
        
    }
    
}
solve(6)