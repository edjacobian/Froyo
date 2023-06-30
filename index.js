//FROYO SURVEY
// 1. Create object labeled customer
const customer = {
  // 2. add key value pairs from chart
      firstName: `jake`,
      lastName: `smith`,
      email: `jaekSmih!aol.com`,
      phone: undefined,
      zipCode: `631`,
      favoriteFlavors: 32,
      cupSize: `medium`,
      favoriteStore: `Target`,
      firstVisit: false,
  }
  // 3. modify email
  customer.email = `Jak3Smith1992@email.com`;
  // 4. modify phone
  customer.phone = 3195551234;
  // 5. modify zipcode
  customer.zipCode = `63132`;
  // 6. modify falvoriteflavors
  customer.favoriteFlavors = [`coffee`, `strawberry`, `matcha`];
  // 7. delete zipcode, favoritestore
  delete customer.zipCode;
  delete customer.favoriteStore;
  // 8. add given keys and values using dot notation
  customer.toppings = [`chocolate sprinkles`, `wafer straws`, `gummy bears`];
  customer.futureFlavors = `mango`;
  customer.todaysPurchaseCost = 5.32;
  // 9. print all keys from survey in array
  console.log(Object.keys(customer))