function solve(num) {
    let centuries = num * 100;
    let days = Math.trunc(365.2422 * centuries);
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log(`${num} centuries = ${centuries} years = ${days} days = ${hours} hours = ${minutes} minutes`)

}
solve(5)