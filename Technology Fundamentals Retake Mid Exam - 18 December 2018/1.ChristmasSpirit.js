function solve(input) {
    let quantity = +input[0];
    let days = +input[1];
    let money = 0;
    let spirit = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 11 == 0) {
            quantity += 2;
        }
        if (i % 2 == 0) {
           money += 2 * quantity;
           spirit += 5
        }
        if (i % 3 == 0) {
            money += (5 * quantity) + (3 * quantity);
            spirit += 13;
        }
        if (i % 5 == 0) {
            money += 15 * quantity;
            spirit += 17;
            if (i % 3 == 0) {
                spirit += 30;
            }
        }
        if (i % 10 == 0) {
            spirit -= 20;
            money += (5 + 3 + 15); //* quantity
        }
        if (i % 10 == 0 && i == days) {
            spirit -= 30;
        }
        
    }
    console.log(`Total cost: ${money}`);
    console.log(`Total spirit: ${spirit}`);
}
solve([`1`, `7`])


// •	Ornament Set – 2$ a piece
// •	Tree Skirt – 5$ a piece
// •	Tree Garlands – 3$ a piece
// •	Tree Lights – 15$ a piece
