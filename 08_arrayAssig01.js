console.log(
  `--------------------------------- Step 1 ------------------------------------------------------------------`
);

let fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`First Element of array is : ${fruits_seasonal[0]}`);
console.log(
  `Last Element of array is : ${fruits_seasonal[fruits_seasonal.length - 1]}`
);

console.log(
  `--------------------------------- Step 2 ------------------------------------------------------------------`
);

console.log(`Original Array is : ${fruits_seasonal} `);
fruits_seasonal.unshift("Papaya");
console.log(`after add new element before "banana" is : ${fruits_seasonal}`);

console.log(
  `--------------------------------- Step 3 ------------------------------------------------------------------`
);

console.log(`Original Array is : ${fruits_seasonal} `);
fruits_seasonal.splice(4, 1);
console.log(`after Remove ‘Mango’ from the array is : ${fruits_seasonal}`);

console.log(
  `--------------------------------- Step 4 ------------------------------------------------------------------`
);

console.log(`Original Array is : ${fruits_seasonal} `);
fruits_seasonal.push("Pineapple");
console.log(
  `Add Element Pineapple at the last position in array is : ${fruits_seasonal} `
);

console.log(
  `--------------------------------- Step 5 ------------------------------------------------------------------`
);

console.log(`Original Array is : ${fruits_seasonal} `);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(
  `Add Element Dragon Fruit before Water Malone position in array is : ${fruits_seasonal} `
);

console.log(
  `--------------------------------- Step 6 ------------------------------------------------------------------`
);

console.log(`Original Array is : ${fruits_seasonal} `);
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(
  `Replace an element "Orange" with "Kiwi" is in array :-  ${fruits_seasonal}`
);

console.log(
  `--------------------------------- Step 7 ------------------------------------------------------------------`
);

var element = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Water Melon",
  "Pineapple",
];
console.log(`Original Array is : ${element} `);
var element1 = element.slice(1, 5);
console.log(`elements starting from index 1 to 4 is : ${element1}`);

console.log(
  `--------------------------------- Step 8 ------------------------------------------------------------------`
);

var element = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Water Melon",
  "Pineapple",
];
console.log(`Original Array is : ${element} `);
var element1 = element.slice(element.length - 3);
console.log(`Last 3 elements of array is: ${element1}`);

console.log(
  `--------------------------------- End ------------------------------------------------------------------`
);
