console.log(
  `===================================== Step 1 =================================================================`
);
console.log(``);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given Array is :- ${arrayNumbers}`);
console.log(`Total Elements available in array is : ${arrayNumbers.length} `);
console.log(``);
console.log(
  `===================================== Step 2 =================================================================`
);
console.log(``);
console.log(`Given Array is :- ${arrayNumbers}`);
let FirstElement = arrayNumbers[0];
let LastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(`First Element in Array Number is :- ${FirstElement}`);
console.log(`Last Element in Array Number is :- ${LastElement}`);
console.log(``);
console.log(
  `===================================== Step 3 =================================================================`
);
console.log(``);
let array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given Array is :- ${array}`);
let Lastthird = array.length - 3;
let LastthirdNumber = array[Lastthird];
console.log(`Last third elements of array is : ${LastthirdNumber}`);
console.log(``);
console.log(
  `===================================== Step 4 =================================================================`
);
console.log(``);
console.log(`Given Array is :- ${array}`);
console.log(`Even Numbers in array are :- `);
for (const iterator of array) {
  if (iterator % 2 == 0) {
    console.log(iterator);
  }
}
console.log(``);
console.log(
  `===================================== Step 5 =================================================================`
);
console.log(``);
console.log(`Given Array is :- ${array}`);
console.log(`Odd Numbers in array are :- `);
for (const iterator1 of array) {
  if (iterator1 % 2 != 0) {
    console.log(iterator1);
  }
}
console.log(``);
console.log(
  `===================================== Step 6 =================================================================`
);
console.log(``);
console.log(`Given Array is :- ${array}`);
let sum = 0;
console.log(`Even Numbers in array are :- `);
for (const iterator of array) {
  if (iterator % 2 == 0) {
    console.log(iterator);
    sum = sum + iterator;
  }
}

console.log(`Sum of Even Number in Array is : ${sum}`);
console.log(``);
console.log(
  `===================================== Step 7 =================================================================`
);
console.log(``);
console.log(`Given array is :- ${array}`);
console.log(`odd Number in array is :- `);
let sum1 = 0;
for (const iterator of array) {
  if (iterator % 2 != 0) {
    console.log(iterator);
    sum1 = sum1 + iterator;
  }
}
console.log(`Sum of Odd Number in Array is : ${sum1}`);
console.log(``);
console.log(
  `===================================== Step 8 =================================================================`
);
console.log(``);
console.log(`Given array is :- ${array}`);
let sum2 = 0;
for (const iterator of array) {
  sum2 = sum2 + iterator;
}
console.log(`Sum of all elements from array is :- ${sum2}`);
console.log(``);
console.log(
  `===================================== Step 9 =================================================================`
);
console.log(``);
console.log(`Given array is :- ${array}`);
console.log(`numbers in array which are multiple of 5 is :- `);
for (const i of array) {
  if (i % 5 == 0) {
    console.log(i);
  }
}
console.log(``);
console.log(
  `===================================== Step 10 =================================================================`
);
console.log(``);
console.log(`Given array is :- ${array}`);
let result = array.includes(115);
console.log(`Is number 115 available in array ? :- ${result} `);
console.log(``);
console.log(
  `===================================== Step 11 =================================================================`
);
console.log(``);
console.log(`Given array is :- ${array}`);
let result1 = array.includes(23);
console.log(`Is number 23 available in array ? :- ${result1} `);
console.log(``);
console.log(
  `===================================== Step 12 =================================================================`
);
console.log(``);
const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is :- ${arrayNumber}`);
let result3 = arrayNumber.splice(3, 0, 55, 56);
console.log(
  `after insert "55 & 56" number at index 3, array is :- ${arrayNumber}`
);
console.log(``);
console.log(
  `===================================== Step 13 =================================================================`
);
console.log(``);
console.log(`Given array is :- ${array}`);
array.splice(4, 3);
console.log(
  `after Delete 3 elements starting from index 4, array is :- ${array}`
);
console.log(``);
console.log(
  `===================================== End =================================================================`
);
