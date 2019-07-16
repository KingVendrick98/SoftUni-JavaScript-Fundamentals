function solve(country) {
    let spokes = '';
    if (country == 'USA' || 'England' == country) {
         spokes = 'English';
    } else if ( country == 'Spain' || country == 'Argentina' || country == 'Mexico') {
        spokes = 'Spanish';
    } else {
        spokes = 'unknown'
    }
    console.log(spokes) 
}
solve('USA')