function solve(age) {
    let kind = '';
    if (age <= 2) {
        kind = 'baby';
    } else if (age >= 3 && age <= 13) {
        kind = 'child';
    } else if (age >= 14 && age <= 19) {
        kind = 'teenager';
    } else if (age >= 20 && age <= 65) {
        kind = 'adult';
    } else {
        kind = 'elder';
    }
    console.log(kind)
    
}
solve(20)