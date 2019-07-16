function solve(firstArr, secondArr) {
    let thirdAarr = [];

    for (let i = 0; i < firstArr.length; i++) {
        let firstEl = firstArr[i];
        let secondEl = secondArr[i];

        if (i % 2 === 0) {
            thirdAarr.push(Number(firstEl) + Number(secondEl));
        } else {
            thirdAarr.push(firstEl + secondEl);
        }
    }

    // let output = '';
    // for (let index in thirdAarr) {
    //     let i = Number(index);
    //     let num = thirdAarr[i];
    //     if (i !== thirdAarr.length - 1) {
    //         output += num;
    //     } else {
    //         output += num;
    //     }
    //     output =+ num + ` - `
    // }
      console.log(thirdAarr.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)