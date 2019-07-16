function solve(serchedWordsStr, text) {

    let words = serchedWordsStr.split(', ');
    
    words
    .forEach((word) => {
        text = text.replace('*'.repeat(word.length), word)
    });
     

console.log(text)
}
solve('great',
'softuni is ***** place for learning new programming languages'
)