function solve(input) {

    let text = input.shift();
    let codedEmojis = input[0].split(':').map(Number);
    let nameOfEmojis = codedEmojis.map(x => String.fromCharCode(x)).join('');
    let emojis = [];
    let totalPower = 0;
    let result;
    let pattern = /\s[:]([a-z]{4,})[:](?=(\s|[,.!?]))/g

    while (result = pattern.exec(text)) {
        emojis.push(result[1]);
    }

    let powerEmojiArr = emojis.join('').split('').map(x => x.charCodeAt(0));

    if (powerEmojiArr.length > 0) {
        totalPower = powerEmojiArr.reduce((a, b) => a + b);
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