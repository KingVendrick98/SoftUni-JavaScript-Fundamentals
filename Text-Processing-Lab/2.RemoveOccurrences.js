function solve(word, text) {
      let old;
      while (old !== text) {
          old = text;
          text = old.replace(word, '') 
      }
    
    console.log(text)
}
solve('ice',
    'kicegiciceeb'
    )