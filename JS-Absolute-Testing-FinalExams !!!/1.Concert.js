function solve(input) {

    let addMembers = {};
    let playTime = {};
    let bandToPrint = input.pop();

    let totalPlayTime = 0;
    
    for (let line of input) {
        if (line == 'start of concert') {
            console.log(`Total time: ${totalPlayTime}`)
        } else {
            let command = line[0];
            if (command == 'Add') {
                let namesToAdd = line[1]
            }
        }
    }
}
solve([ 'Play; The Beatles; 2584',
'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
'Play; Eagles; 1869',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
'Play; The Rolling Stones; 4239',
'start of concert',
'The Rolling Stones' ]
)