function songEncription(input) {
    for (let couple of input) {
        if (couple === 'end') {
            break;
        }

        let pattern = /(^[A-Z][a-z\'\s]+):([A-Z\s]+$)/g;

        if (pattern.test(couple)) {
            let encryptedStr = '';
            let keyIndexOfSeparator = couple.indexOf(':');
            // console.log(indexOfSeparator)
                
            for (let i = 0; i < couple.length; i++) {
                if (couple[i] !== ':') {
                   let asciiCode = couple.charCodeAt(i);
                    // console.log(ascii);
                    if ((asciiCode >= 65 && asciiCode <= 90)) {
                        asciiCode += keyIndexOfSeparator;
                        if (asciiCode > 90) {
                            asciiCode -= 26;
                        }
                    }
           
                    if ((asciiCode >= 97 && asciiCode <= 122)) {
                        asciiCode += keyIndexOfSeparator;
                        if (asciiCode > 122) {
                            asciiCode -= 26;
                        }
                    }

                    let char = String.fromCharCode(asciiCode);

                    encryptedStr += char;
                } else {
                    encryptedStr += '@';
                }
            }
            
            console.log(`Successful encryption: ${encryptedStr}`);
        } else {
            console.log(`Invalid input!`);
        }
    }
}

songEncription(['Eminem:VENOM',
                'Linkin park:NUMB',
                'Drake:NONSTOP',
                'Adele:HELLO',
                'end'
]);