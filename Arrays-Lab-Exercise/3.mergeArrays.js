function solve(firstArr, secondArr) {
    let thirdAarr = [];
    let length = firstArr.length;

    for (let i = 0; i < length; i++) {
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