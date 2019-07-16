function solve(band, album, song) {
   let rotations = (album.length * band.length) * song.length / 2; 
   let time = Math.ceil(rotations / 2.5);
    console.log(`The plate was rotated ${time} times.`)
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')