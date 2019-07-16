function solve(input) {
    let party = +input[0];
    let days = +input[1];
    let coins = 0;
    

    for (let i = 1; i <= +days; i++) {
        if (i % 10 === 0) {
            party -= 2;
        }

        if (i % 15 === 0) {
            party += 5;
        }
        coins += (50 - (2 * party));

        if (i % 3 === 0) {
            coins -= (3 * party)
        }

        if (i % 5 === 0) {
            coins += (20 * party); 
        }
        if (i % 3 === 0 && i % 5 === 0) {
            coins -= (party * 2);
        }
        
    }
    let totalCoins = Math.floor(coins / party);
    console.log(`${+party} companions received ${+totalCoins} coins each.`);
}
solve(3, 5)