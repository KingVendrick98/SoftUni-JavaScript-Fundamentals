// function solve(input) {
//      let wordCount = {};

//      for (let word of input) {
//          if (!wordCount.hasOwnProperty(word)) {
//              wordCount[word] = 1;
//          } else if (wordCount.hasOwnProperty(word)) {
//              wordCount[word]++;
//          }
//      }
//      let sortedArr = [];

//      for (let word in wordCount) {
//          sortedArr.push([word, wordCount[word]]);
//      }

//      sortedArr.sort((a, b) => b[1] - a[1]);

//      for (let key in sortedArr) {
//         console.log(`${sortedArr[key][0]} -> ${sortedArr[key][1]} times`);
//      }  
// }
function solve(input) {
    let wordCount = {};
 
    for (let word of input) {
        if (!wordCount.hasOwnProperty(word)) {
            wordCount[word] = 1;
        } else if (wordCount.hasOwnProperty(word)) {
            wordCount[word]++;
        }
    }
    let sorted = Object.keys(wordCount)
        .sort((a, b) => wordCount[b] - wordCount[a])
 
    for (let key of sorted) {
        console.log(`${key} -> ${wordCount[key]} times`)
    }
}
solve(["Here",
 "is",
  "the",
   "first",
    "sentence",
     "Here",
      "is",
       "another",
        "sentence",
         "And",
          "finally",
           "the",
            "third",
             "sentence"])