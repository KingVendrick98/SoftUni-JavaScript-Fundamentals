function sovle(input) {
     let budget = +input[0];
     let students = +input[1];
     let priceOfFloor = +input[2];
     let priceOfEgg = +input[3];
     let priceOfArpon = +input[4];
     
     let sum = priceOfArpon * (students + Math.ceil(students * 0.2)) + priceOfEgg * 10
           * students + priceOfFloor * (students - (Math.floor(students / 5)));

           if (sum <= budget) {
            console.log(`Items purchased for ${sum.toFixed(2)}$.`);
        } else {
            console.log(`${(sum - budget).toFixed(2)}$ more needed.`);
        }
}
sovle([ '50', '2', '1.0', '0.10', '10.00' ]
)
