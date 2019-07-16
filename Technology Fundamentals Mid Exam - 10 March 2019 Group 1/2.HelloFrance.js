function solve(input) {
     let data = input[0].split('|');
     let initialBudget = +input[1];
     let boughtItems = [];
     let budget = +initialBudget;

     for (let i = 0; i < data.length; i++) {
         let [type, cost] = data[i].split('->');
         cost = +cost;

         if (type === 'Clothes' && cost <= 50 && budget >= cost ) {
             boughtItems.push(cost);
             budget -= cost;
         }
         if (type === 'Shoes' && cost <= 35 && budget >= cost ) {
            boughtItems.push(cost);
            budget -= cost;
        }
        if (type === 'Accessories' && cost <= 20.50 && budget >= cost ) {
            boughtItems.push(cost);
            budget -= cost;
        }

     }
     boughtItems = boughtItems.map(item => item += item * 0.40);
     sum = boughtItems.reduce(function(a, b) { return a + b; }, 0);
     sum += budget;
     let profit = sum - initialBudget;
     let itemsToPrint = boughtItems.map(item => item.toFixed(2)).join(' ');
     console.log(itemsToPrint);
     console.log(`Profit: ${profit.toFixed(2)}`);
     if (sum >= 150) {
         console.log(`Hello, France!`);
     } else {
         console.log(`Time to go.`)
     }
}
solve([ 'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
'120' ])