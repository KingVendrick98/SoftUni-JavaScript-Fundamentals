// function solve (input) {
//     let quest = input.shift().split(', ');
 
//     for (let i = 0; i < input.length; i++) {
//         let command = input[i].split(' - ');
 
//         switch (command[0]) {
//             case 'Start':
//             start(command[1]);
//             break;
//             case 'Complete':
//             complete(command[1]);
//             break;
//             case 'Side Quest':
//             sideQuest(command[1]);
//             break;
//             case 'Renew':
//             renew(command[1]);
//             break;
//             case 'Retire!':
//             break;
//         }
//     }
 
   
//     function start (a) {
//         if (quest.indexOf(a) < 0) {
//             quest.push(a);
//         }
//     }
 
//     function complete (a) {
//         let indOf = quest.indexOf(a);
//         if (indOf >= 0) {
//             quest.splice(indOf, 1);
//         }
//     }
 
//     function renew (a) {
//         let indOf = quest.indexOf(a);
//         if (indOf >= 0) {
//             quest.splice(indOf, 1);
//             quest.push(a);
//         }
//     }
 
//     function sideQuest (a) {
//         let tempArr = a.split(':');
//         let tmpOne = tempArr[0];
//         let tmpTwo = tempArr[1];
//         if (quest.indexOf(a) >= 0) {
           
//         } else if (quest.indexOf(tmpOne) >= 0) {
//             quest.splice((quest.indexOf(tmpOne) +1), 0, tempArr[1]);
//         }
//     }
 
//     console.log(quest.join(', '));
   
 
// }

function solve(input) {

    let myJournal = input[0].split(', ');
    for (let i = 1; i < input.length; i++) {
      const element = input[i].split(' - ');
      if (element === 'Retire!') {
        break;
      }
      let command = element[0];
      let quest = element[1];
  
      if (command === 'Start' && !myJournal.includes(quest)) { //•	"Start - {quest}" – Receiving this command, you should add the given quest in your journal. 
                                                               //    If the quest already exists, you should skip this line.
        myJournal.push(quest);
      }
      if (command === 'Complete' && myJournal.includes(quest)) { //•	"Complete - {quest}" – You should remove the quest from your journal, if it exists.
        let index = myJournal.indexOf(quest);
        myJournal.splice(index, 1);
      }
      if (command === 'Side Quest') { //•	"Side Quest - {quest}:{sideQuest}" – You should check if the quest exists, if so, add the side quest after the quest.
                                      //     Note that you shouldn`t add the sideQuest if it already exists.
        //Side Quest - If else:Switch
        let questSplit = quest.split(':');
        let initialQuest = questSplit[0];
        let sideQuest = questSplit[1];
        if (myJournal.includes(initialQuest) && !myJournal.includes(sideQuest)) {
          let questIndex = myJournal.indexOf(initialQuest);
          myJournal.splice(questIndex + 1, 0, sideQuest);
        }
      }
  
      if (command === 'Renew' && myJournal.includes(quest)) { //•	"Renew – {quest}" – If the given quest exists, you should change its position and put it last in your journal.
        questIndex = myJournal.indexOf(quest);
        let changePosition = myJournal.splice(questIndex, 1);
        myJournal.push(changePosition);
      }
    }
    console.log(myJournal.join(', '));
  
  }
solve([ 'Hello World, For loop, If else',
'Start - While loop',
'Complete - For loop',
'Retire!' ])