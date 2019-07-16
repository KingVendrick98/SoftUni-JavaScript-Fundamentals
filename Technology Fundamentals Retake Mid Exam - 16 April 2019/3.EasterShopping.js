function solve(input) {
      let shops = input.shift().split(' ');
      let numberOfCommands = +input[1];

      for (let i = 0; i < input.length; i++) {
          let [ command, shop, index ] = input[i].split(' ');

          switch (command) {
              case 'Include': //o	Add the shop at the end of your list.
                  shops.push(shop);
                  break;
              case 'Visit': //o	Remove either the "first" or the "last" number of shops from your list, depending on the input. 
                            //If you have less shops on your list than the given number, skip this command.
                  index = +index;
                  if (shops.length < index) {
                      break;
                  }
                  if (shop == 'first') {
                      shops.splice(0, index)
                  } else if (shop == 'last') {
                      shops.splice(shops.length - index, index);
                  }
                  break;
              case 'Prefer': //o	If both of the shop indexes exist in your list, take the shops that are on them and change their places. 
                  index = +index;
                  shop = +shop;
                  let firstItem = shops[index];
                  let secondItem = shops[shop];
                  if ((index >= 0 && index < shops.length-1 )
                    && (shop >= 0 && shop < shops.length-1 )) {
                    shops.splice(shop, 1, firstItem);
                    shops.splice(index, 1, secondItem);
                }
                break;
              case 'Place': // o	Insert the shop after the given index, only if the resulted index exists.
                  index = +index + 1;
                  if (index >= 0 && index < shops.length + 1) {
                      shops.splice(index, 0, shop);
                  }
                  break;



          }
          
      }
      console.log(`Shops left:\n${shops.join(' ')}`);
}
solve([ 'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
'5',
'Include HM',
'Visit first 2',
'Visit last 1',
'Prefer 3 1',
'Place Library 2' ]
)