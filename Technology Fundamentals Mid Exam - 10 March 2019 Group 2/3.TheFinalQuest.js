// function solve(input) {
//      let words = input
//      .shift()
//      .split(' ');

//      for (let line of input) {
//          if (line === 'Stop') {
//              break;
//          }
//          let tokens = line.split(' ');
//          let command = tokens[0];

//          if (command === 'Delete') {
//              let deleteIndex = +tokens[1];
//              deleteWord(deleteIndex);
//          } else if (command === 'Swap') {
//              let first = tokens[1];
//              let second = tokens[2];

//              swap(first, second);
//          } else if (command === 'Put') {
//             let myWord = tokens[1];
//             let index = +tokens[2];

//             put(myWord, index);
//         } else if (command === 'Sort') {
//             words.sort(sortByDescending);
//         } else if (command === 'Replace') {
//             let first = tokens[1];
//             let second = tokens[2];
//             replace(first, second)
//         }

//      }
//      console.log(words.join(' '));
//      function deleteWord(index) {
//          if (index >= 0 && index < words.length) {
//               words.splice(index + 1, 1);
//          }
//      }
//      function swap(word1, word2) {
//          let indexOfFirst = words.indexOf(word1);
//          let indexOfSecond = words.indexOf(word2);
//          if (indexOfFirst !== -1 && indexOfSecond !== -1) {
//              words[indexOfFirst] = word2;
//              words[indexOfSecond] = word1;
//          }
//      }
//      function put(word, index) {
//          index--;
//          if (index >= 0 && index <= words.length) {
//              words.splice(index, 0, word);
//          }
//      }
//      function sortByDescending(a, b) {
//          return b.localCompare(a);
//      }
//      function replace(word1, word2) {
//          let indexOfWord = words.indexOf(word2);

//          if (indexOfWord >= 0 && indexOfWord < words.length) {
//              words[indexOfWord] = word1;
//          }
//      }
// } 

function solve(input) {
    let collectionOfWords = input.shift().split(' ');
  
    for (let i = 0; i < input.length; i++) {
        let splited = input[i].split(' ');
        let [command, value, anotherValue] = splited;
  
        switch (command) {
            case 'Delete': //-	Delete {index} – removes the word after the given index if it is valid.
                value = +value;
                if (value >= 0 && value < collectionOfWords.length - 1) {
                      collectionOfWords.splice(value + 1, 1);
                }
              
                break;
            case 'Swap': //-	Swap {word1} {word2} – find the given words in the collections if they exist and swap their places.
                let indexOfFirstValue = collectionOfWords.indexOf(value);
                let indexOfSecondValue = collectionOfWords.indexOf(anotherValue);
                if (collectionOfWords.includes(value)
                    && collectionOfWords.includes(anotherValue)) {
                    collectionOfWords.splice(indexOfFirstValue, 1, anotherValue)
                    collectionOfWords.splice(indexOfSecondValue, 1, value)
                }
                break;
            case 'Put': //-	Put {word} {index} – add a word at the previous place {index} before the 
                        //  given one, if it is valid. Note: putting at the last index simply appends the word to the end of the list.

                anotherValue = +anotherValue
                if (anotherValue > 0 && 
                    anotherValue <= collectionOfWords.length +1) {
                    collectionOfWords.splice(anotherValue - 1, 0, value)
                }
  
                break;
            case 'Replace': //-	Replace {word1} {word2} – find the second word {word2} in the collection (if it exists) and replace it with the first word – {word1}.
                let indexOfSecondWord = collectionOfWords.indexOf(anotherValue)
                if (collectionOfWords.includes(anotherValue)) {
                    collectionOfWords.splice(indexOfSecondWord, 1, value)
                }
                break;
                case 'Sort': //-	Sort – you must sort the words in descending order.
                collectionOfWords.sort((a,b) => b.localeCompare(a))
                break;
            case 'Stop':
                console.log(collectionOfWords.join(' '));
  
                break;
        }
    }
  }
solve([ 'Congratulations! You last also through the have challenge!',
'Swap have last',
'Replace made have',
'Delete 2',
'Put it 4',
'Stop',
'' ]
)