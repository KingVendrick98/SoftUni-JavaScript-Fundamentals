function solve(input) {
    let daysVaccation = +input.shift();
    let budget = +input.shift();
    let groupOfPeople = +input.shift();
    let priceForFuelPerOneKm = +input.shift();
    let priceForFoodPerPerson = +input.shift();
    let priceForRoomPerPerson = +input.shift();
    let travelledDistance = 0;

    let receivedMoney = 0;
    let consumedFuel = 0;

    if (groupOfPeople > 10) {
        priceForRoomPerPerson *= 0.75;
    }
    let foodExpenses = priceForFoodPerPerson * groupOfPeople * daysVaccation;
    let hotelExpenses = priceForRoomPerPerson * groupOfPeople * daysVaccation;
    let totalExpenses = foodExpenses + hotelExpenses;
    
    for (let i = 1; i <= daysVaccation; i++) {
        travelledDistance = input[i - 1];
        consumedFuel = travelledDistance * priceForFuelPerOneKm;
        totalExpenses += consumedFuel

        if (i % 7 == 0) {
           receivedMoney = totalExpenses / groupOfPeople;
           totalExpenses -= receivedMoney;
        } else if (i % 5 == 0) {
           totalExpenses += totalExpenses * 0.4
        } else if (i % 3 == 0) {
            totalExpenses += totalExpenses * 0.4
         }
         if (totalExpenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${(totalExpenses - budget).toFixed(2)}$ more.`);
            return;
        }
    }
    console.log(`You have reached the destination. You have ${(budget-totalExpenses).toFixed(2)}$ budget left.`);
}
solve([ '7',
'12000',
'5',
'1.5',
'10',
'20',
'512',
'318',
'202',
'154',
'222',
'108',
'123' ])