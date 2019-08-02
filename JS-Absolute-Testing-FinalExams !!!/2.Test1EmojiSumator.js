function solve([text, code]) {
    let pattern = /(?<=\s[:])[a-z]{4,}(?=(:[\s|,.!?]))/g
    let matched = text.match(pattern)
    let special = code.split(':').map(e => String.fromCharCode(e)).join('')
    let power = 0;
    let toPrint = text.match(/(?<=\s):[a-z]{4,}:(?=[\s|,.!?])/g)
    if (matched !== null) {
        matched.forEach(elem => {
            power += (elem.split('').map(e => e.charCodeAt()).reduce((a, b) => a + b))
        })
        if (matched.includes(special)) {
            power *= 2
        }
        console.log(`Emojis found: ${toPrint.join(', ')}`)
    }
 
    console.log(`Total Emoji Power: ${power}`);
}

solve([
    'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'
    ])