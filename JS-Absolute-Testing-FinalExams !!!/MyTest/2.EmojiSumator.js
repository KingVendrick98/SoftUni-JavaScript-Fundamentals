function solve(input) {
    let pattern = /\s[:]([a-z]{4,})[:](?=(\s|[,.!?]))/g;
    let text = input.shift();
    let EmojiCodedNames = input[0].split(':').map(Number);

    let emojis = [];
    let namesOfEmojis = EmojiCodedNames.map(x => String.fromCharCode(x)).join('');

    let emojiPower = 0;
    let result;
    
    while(result = pattern.exec(text)) {
        emojis.push(result[1])
    }

    let emojiPowerArr = emojis.join('').split('').map(x => x.charCodeAt(0));

    if (emojiPowerArr.length > 0) {
        emojiPower = emojiPowerArr.reduce((a, b) => a + b);
    }

    if (emojis.includes(namesOfEmojis)) {
        emojiPower *= 2;
    }
    
    if (emojis.length > 0) {
        console.log(`Emojis found: ` + emojis.map(x => `:${x}:`).join(', '));
    } 
    console.log(`Total Emoji Power: ` + emojiPower)
}
solve([
    'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'
    ])