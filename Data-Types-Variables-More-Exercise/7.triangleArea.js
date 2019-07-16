function solve(a, b, c) {
    let s = 0;
    let totalArea = 0;

    s = (a + b + c) / 2;
    totalArea = Math.sqrt(s * (s -a) * (s - b) * (s - c));
    console.log(totalArea);
}
solve(2, 3.5, 4)