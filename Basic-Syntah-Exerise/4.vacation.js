function solve(people, kind, day) {
    let tax = 0;
    if (kind === 'Students') {
        switch (day) {
           case 'Friday':
           tax = 8.45;
           break;  
           case 'Saturday':
           tax = 9.80;
           break;
           case 'Sunday':
           tax = 10.46;
           break;
          }
          alltax = tax * people;
          if (people >= 30) {
              alltax -= alltax * 0.15
          }
          console.log(`Total price: ${alltax.toFixed(2)}`)

    } else if (kind === 'Business') {
        switch (day) {
           case 'Friday':
           tax = 10.90;
           break;  
           case 'Saturday':
           tax = 15.60;
           break;
           case 'Sunday':
           tax = 16;
           break;
          }
          alltax = tax * people;
          if (people >= 100) {
              alltax = alltax - people * 10;
              
          }
          console.log(`Total price: ${alltax.toFixed(2)}`)
    } else if (kind === 'Regular') {
        switch (day) {
           case 'Friday':
           tax = 15;
           break;  
           case 'Saturday':
           tax = 20;
           break;
           case 'Sunday':
           tax = 22.50;
           break;
          }
          alltax = tax * people;
          
          console.log(`Total price: ${alltax.toFixed(2)}`)

    }
     
}
solve (40, "Regular", `Saturday`)