function solve(arr) {
    let budget = +arr[0];
    let flour = +arr[1];
    let counter = 0;
    let eggsCounter = 0;
    let eggs = (flour*0.75);
    let milk = (flour + (flour*0.25)) / 4
    let cozonacPrice = flour + eggs + milk;
    let eggsLose = 0;
    while (budget >= cozonacPrice) {
        counter++;
        eggsCounter += 3;
        if (counter%3 === 0) {
            eggsLose = counter - 2;
            eggsCounter-=eggsLose
        }
        budget-=cozonacPrice;
    }
    console.log(`You made ${counter} cozonacs! Now you have ${eggsCounter} eggs and ${budget.toFixed(2)}BGN left.`);
}
solve([ '20.50', '1.25' ])
