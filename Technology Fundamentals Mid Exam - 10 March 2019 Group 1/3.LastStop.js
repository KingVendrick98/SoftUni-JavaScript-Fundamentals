function solve(input) {
     let numberOfPaintings = input.shift().split(' ').map(Number);
     
     for (let i = 0; i < input.length; i++) {
         let splited = input[i].split(' ');
         let command = splited[0];
         
         switch (command) {
             case 'Change': //-	Change {paintingNumber} {changedNumber} – find the painting with the first number in
                             // the collection (if it exists) and change its number with the second number – {changedNumber}.
                            
                 let paintingNumber = +splited[1];
                 let indexOfPaintedNum = numberOfPaintings.indexOf(paintingNumber);
                 let changedNumber = +splited[2];
                 if (numberOfPaintings.includes(paintingNumber)){
                     numberOfPaintings.splice(indexOfPaintedNum, 1, changedNumber);
                 }
                 break;
            case 'Hide': // -	Hide {paintingNumber} – find the painting with this value and if it exists and hide it (remove it).
                let paintingNumber1 = +splited[1];
                let indexOfPaintedNum1 = numberOfPaintings.indexOf(paintingNumber1);
                if (numberOfPaintings.includes(paintingNumber1)) {
                    numberOfPaintings.splice(indexOfPaintedNum1, 1);
                }
                break;
            case 'Switch': //-	Switch {paintingNumber} {paintingNumber2} – find the given paintings in the collections if
                           //   they exist and switch their places.
                let paintingNumber11 = +splited[1]
                let paintingNumber2 = +splited[2];
                let indexOfPaintedNum11 = numberOfPaintings.indexOf(paintingNumber11);
                let indexOfPaintedNum2 = numberOfPaintings.indexOf(paintingNumber2);
                if (numberOfPaintings.includes(paintingNumber11) && numberOfPaintings.includes(paintingNumber2)) {
                    numberOfPaintings.splice(indexOfPaintedNum11, 1, paintingNumber2);
                    numberOfPaintings.splice(indexOfPaintedNum2, 1, paintingNumber11);
                }
                break;
            case 'Insert'://-	Insert {place} {paintingNumber} – insert the painting (paintingNumber) on the next place after the given one, if it exists.
                let indexPlaceChange = +splited[1];
                let paintNum = +splited[2];
                if (numberOfPaintings.length >= indexPlaceChange) {
                    numberOfPaintings.splice(indexPlaceChange + 1, 0, paintNum);
                }
                break;
            case 'Reverse': //-	Reverse – you must reverse the order of the paintings.
                numberOfPaintings.reverse();
                break;
            case 'END':
                console.log(numberOfPaintings.join(' '));
                break;

         }
         
     }
}
solve([ '115 115 101 114 73 111 116 75',
'Insert 5 114',
'Switch 116 73',
'Hide 75',
'Reverse ',
'Change 73 70',
'Insert 10 85',
'END' ])