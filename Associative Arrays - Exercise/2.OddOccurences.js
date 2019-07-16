function solve(input) {
   
    let list = []
    
    for (let sentence in input) {
        let word = sentence.toLowerCase().split(' ');
        if (!list.includes(word)) {
            list.push(word)
        } else {
            break;
        }
    }

    console.log(list)
    


  
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')