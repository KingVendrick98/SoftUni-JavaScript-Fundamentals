function solve(input) {

    let daysOfPlunder = +input[0];
    let daillyPlunder = +input[1];
    let expectedPlunder = +input[2];

    let counter = 1;

    let gatheredPlunder = 0;
    let percentege = 0;

    while (counter <= daysOfPlunder) {
        if (counter % 3 == 0 && counter % 5 == 0) {
            gatheredPlunder += daillyPlunder;            
            gatheredPlunder += (daillyPlunder * 0.5);
            gatheredPlunder -= 0.3 * gatheredPlunder
        } else if (counter % 3 == 0 ){
            gatheredPlunder += daillyPlunder;
            gatheredPlunder += 0.5 * daillyPlunder;
        } else if (counter % 5 == 0) {
            gatheredPlunder += daillyPlunder;
            gatheredPlunder -= 0.3 * gatheredPlunder;
        } else {
            gatheredPlunder += daillyPlunder;
        }
        counter++
    }
    if (gatheredPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${gatheredPlunder.toFixed(2)} plunder gained.`)
    } else {
        percentege = gatheredPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentege.toFixed(2)}% of the plunder.`)
    }
}
solve([ '5', '40', '100' ]
)