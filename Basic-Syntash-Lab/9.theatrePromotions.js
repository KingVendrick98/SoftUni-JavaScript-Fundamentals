function solve(day, age) {
    let priceForTicket = 0;

    if (age >= 0 || age <= 18) || day == 'Weekday') {
        priceForTicket = 12;
    } else if (age >= 0 || age <= 18 || day == 'Weekend') {
        priceForTicket = 15;
    } else if (age >= 0 || age <= 18 || day == 'Holiday') {
        priceForTicket = 5;
    } else if (age > 18 || age <= 64 || day == 'Weekday') {
        priceForTicket = 18;
    } else if (age > 18 || age <= 64 || day == 'Weekend') {
        priceForTicket = 20;
    } else if (age > 18 || age <= 64 || day == 'Holiday') {
        priceForTicket = 12;
    } else if (age > 64 || age <= 122 || day == 'Weekday') {
        priceForTicket = 12;
    } else if (age > 64 || age <= 122 || day == 'Weekend') {
        priceForTicket = 15;
    } else if (age > 64 || age <= 122 || day == 'Holiday') {
        priceForTicket = 10;
    } else {
        priceForTicket = 'Error!'
    }
    console.log(priceForTicket)
}
solve('Weekday', 42)