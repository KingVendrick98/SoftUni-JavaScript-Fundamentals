function solve(grade) {
    let gradeKind = '';

    if (grade >= 2.00 && 2.99 >= grade) {
        gradeKind = 'Fail';
    } else if (grade >= 3.00 && 3.49 >= grade) {
        gradeKind = 'Poor'
    } else if (grade >= 3.50 && 4.49 >= grade) {
        gradeKind = 'Good'
    } else if (grade >= 4.50 && 5.49 >= grade) {
        gradeKind = 'Very good'
    } else if (grade >= 5.50 && 6.00 >= grade) {
        gradeKind = 'Excellent'
    } 
    console.log(gradeKind)
}
solve(3.33)