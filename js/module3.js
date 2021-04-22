// const getUsersWithEyeColor = ((users, color) => users.filter(user => {
// 	if(user.eyeColor === color) {
//     return user.name;
//     };
// }));
const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39
    }
];

// Question 44 module 6
// const getTotalBalanceByGender = (users, gender) => [... users].filter(user => user.gender === gender).reduce((total, user) => { return total + user.balance}, 0);


//  Question 43 module 6
// const getSortedFriends = users => [... users].flatMap(user => { return user.friends }, []).filter((friend, index, array) => array.indexOf(friend) === index).sort((user1, user2) => user1.localeCompare(user2));
// console.log(getSortedFriends(users));



// Question 22 module 6
// const getActiveUsers = (users) => (users.filter(user => user.isActive === true));



//  Question 21 module 6
// const getFriends = (users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index));



// const getUserNames = (users.map(user => user.name));
// console.log(getUserNames);

// Question 9 module 6
// function changeEven(numbers, value){
//     // Пиши код ниже этой строки
//   let changedEven = [];
//   numbers.forEach(number => {
//   	if (number % 2 === 0) {
//     	number = number + value;
//     } changedEven.push(number);
//   }) ;
//     console.log(changedEven);
//     // Пиши код выше этой строки
// };

// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);


// Question 6 module 6
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item);

//   return totalPrice;
// }



// Question 3 module 6
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//     firstArray.forEach((firstAr) => {
//       if (secondArray.includes(firstAr)) {
//       	commonElements.push(firstAr);
//       }
//     })
  
//     return commonElements;
//     // Пиши код выше этой строки
// }




// Question 19 module 5
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
//   blacklistedEmails;

//   constructor({ email, accessLevel, blacklistedEmails }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails = [];
//   }
//   blacklist (email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     if (!this.blacklistedEmails.includes(email)) {
//       return false;
//     } return true;
//   }
  
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 





// Question 18 modul 5
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   accessLevel;
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   constructor ({email, accessLevel}) {
//     super(email);
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser





// Question 17 module 5
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
//   static AccessLevel = {BASIC: 'basic', SUPERUSER: 'superuser'};
// }






// Question 16 module 5
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//   	if (price > Car.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.';
//     } return 'Всё хорошо, цена в порядке.';
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.




// Question 15 module 5
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (Car.MAX_PRICE >= newPrice) {
//     	this.#price = newPrice;
//     } 
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000





// Question 14 module 5
// class Car {
//   #model;
//   #price;
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }




// Question 13 module 5
// class StringBuilder {
//   #value;
//   constructor (value) {
//   	this.#value = value;
//   }
//   getValue () {
//   	return this.#value;
//   }
//   padEnd (str) {
//   	this.#value += str;
//   }
//   padStart (str) {
//   	this.#value = str + this.#value;
//   }
//   padBoth (str) {
//   	this.padStart(str);
//   	this.padEnd(str);
//   }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='




// Question 12 module 5
// class Storage {
//   #items;
//   constructor (items) {
//   	this.#items = items;
//   }
//   getItems() {
//   	return this.#items;
//   }
//   addItem (newItem) {
//   	this.#items.push(newItem);
//   }
//   removeItem (item) {
//   	const itemIndex = this.#items.indexOf(item);
//   	this.#items.splice(itemIndex, 1);
//   }
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]




// Question 11 module 5
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }


// Question 10 module 5
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice
//   }
// }




//  Question 7 module 5
// function StringBuilder(baseValue, value) {
//     this.value = value;
//     this.baseValue = baseValue;
// };
// StringBuilder.prototype.getValue = function () {
//     return this.baseValue;
// };
// StringBuilder.prototype.padStart = function (str) {
//     this.baseValue = str + this.baseValue;
// };
// StringBuilder.prototype.padEnd = function (str) {
//     this.baseValue = this.baseValue + str;
// };
// StringBuilder.prototype.padBoth = function (str) {
//     this.baseValue = str + this.baseValue + str;
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='





// Question 6 module 5
// function Storage(items) {
// 	this.items = items;
// };
// Storage.prototype.getItems = function() {
// 	return this.items;
// };
// Storage.prototype.addItem = function(newItem) {
// 	this.items.push(newItem);
// };
// Storage.prototype.removeItem = function(item) {
//  for(const ite of this.items){
//      const index = this.items.indexOf(item);
//         if (this.items.includes(item)){
//             this.items.splice(index, 1);
//         }
//     }console.log(this.items);
    
// };


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]



// Question 5 module 5
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// Car.prototype.getPrice = function() {
//   return this.price;
// };
// Car.prototype.changePrice = function(newPrice) {
//   this.price = newPrice;
// };



// Question 10 module 4
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']




// Question 7 Module 4
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
  
//  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position + 1}-й в очереди.`
// }

// const messages = orders.map(function (order, position) {
// return composeMessage.call(order, position);
// });

// console.log(messages);



//  Question 4 Module 4
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//   	const isOrderAccepted = this.pizzas.includes(pizzaName);
//     if (!isOrderAccepted) {
//        return onError(pizzaName);
//     } else {
//        return onSuccess(pizzaName);
//     };
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}.`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);



// Question number 41
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i <= this.potions.length; i += 1) {
//         if (this.potions[i].name === potionName) {
//             const potionIndex = this.potions.indexOf(this.potions[i]);
//             this.potions.splice(potionIndex, 1);
//             return this.potions;
//         };
//     };
//     // Або використовуэмо for of
//     //   for (const potion of this.potions) {
//     //     if (potion.name === potionName) {
//     //         const potionIndex = this.potions.indexOf(potion);
//     //         this.potions.splice(potionIndex, 1);
//     //         return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     // for (let i = 0; i <= this.potions.length; i += 1) {
    
//     //     if (this.potions[i].name === oldName) {
//     //         this.potions[i].name = newName;
           
//     //         return this.potions;
//     //     };
//     // };
//       for (const potion of this.potions) {
//          if (potion.name === oldName) {
//             potion.name = newName;
//             return this.potions;
//         }
//       }
//   },
//   // Пиши код выше этой строки
// };
// // atTheOldToad.getPotions();
// // atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// // atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
// // atTheOldToad.removePotion('Дыхание дракона');
// // atTheOldToad.removePotion('Зелье скорости');
// console.log(atTheOldToad.potions);
// // console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// // console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// // console.log(atTheOldToad.removePotion('Дыхание дракона'));
// // console.log(atTheOldToad.removePotion('Зелье скорости'));
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// // console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));


// Question number 40
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//  const potionIndex = this.potions.indexOf(oldName);
//  this.potions.splice(potionIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// Question number 39
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     // Пиши код выше этой строки
//   },
// };
// atTheOldToad.removePotion('Дыхание дракона');

// Question number 20
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//     for (let i = 0; i < products.length; i += 1) {
//         const productPrice = products[i].price;
//         const productQuantity = products[i].quantity;
//         if (products[i].name === productName) {
//             return productPrice * productQuantity;
//         };
//     };
//     return 0;
// };
// console.log(calculateTotalPrice('Радар'));




// Question number 19
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// // console.log(products[1].name);

// function getAllPropValues(propName) {
//     // Пиши код ниже этой строки
//     const names = [];
//     for (let i = 0; i < products.length; i += 1) {
       
//         if (products[i][propName]) {
//             names.push(products[i][propName]);
//             continue;
//         };
//     };
//     return names;
// };


// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));