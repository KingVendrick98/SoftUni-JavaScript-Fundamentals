function solve(input) {

    let text = input.shift();
    let codedEmoji = input[0].split(':').map(Number);
    let nameOfEmojis = codedEmoji.map(x => String.fromCharCode(x)).join('');
    let totalPower = 0;
    let emojis = [];
    let pattern = /\s[:]([a-z]{4,})[:](?=(\s|[,.!?]))/g;
    let result;

    while (result = pattern.exec(text)) {
        emojis.push(result[1]);
    }

    let emojiPowerArr = emojis.join('').split('').map(x => x.charCodeAt(0));

    if (emojiPowerArr.length > 0) {
        totalPower = emojiPowerArr.reduce((a, b) => a + b);
    }

    if (emojis.includes(nameOfEmojis)) {
        totalPower *= 2
    }
    if (emojis.length > 0) {
        console.log(`Emojis found: ` + emojis.map(x => `:${x}:`).join(', '))
    }
    console.log(`Total Emoji Power: ${totalPower}`)
}
solve([ 'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
'115:101:118:101:110' ]
)