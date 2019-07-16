function solve(text) {
    let output = text[0];

    for (let i = 1; i < text.length; i++) {
        let current = text[i];
        let previous = text[i - 1];

        if (current !== previous) {
            output += current;
        }
        
    }
    console.log(output)
}
solve('qqqwerqwecccwd')