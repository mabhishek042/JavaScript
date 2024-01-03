console.log(
  `------------------------------ Step 1 --------------------------------------`
);
console.log(` `);
var checkEvenOdd = function (value) {
  if (value % 2 == 0) {
    console.log(`Given number ${value} is Even`);
  } else {
    console.log(`Given number ${value} is Odd`);
  }
};
checkEvenOdd(45);
checkEvenOdd(70);
checkEvenOdd(67);
checkEvenOdd(98);
console.log(` `);
console.log(
  `------------------------------ Step 2 --------------------------------------`
);
console.log(` `);
var eligibeForVote = function (age) {
  if (age >= 18) {
    console.log(`Congrats !, You are Eligible for Vote`);
  } else {
    console.log(`Sorry, You are not Eligible for Vote`);
  }
};
eligibeForVote(18);
eligibeForVote(20);
eligibeForVote(17);
eligibeForVote(40);
console.log(` `);
console.log(
  `------------------------------ Step 3 --------------------------------------`
);
console.log(` `);
var checkCharacter = function (char) {
  var length = char.length;
  if (length >= 10) {
    console.log(`This String Contaians more than 10 Character`);
  } else {
    console.log(`This String Contaians not more than 10 Character`);
  }
};
checkCharacter("JavaScript - ES6");
checkCharacter("Abhishek");
console.log(` `);

console.log(
  `------------------------------ Step 4 --------------------------------------`
);

console.log(` `);
var checkStartWith = function (name) {
  if (name.startsWith("Java")) {
    console.log(`Yes, String Starts With "Java"`);
  } else {
    console.log(`No, String not Starts With "Java"`);
  }
};
checkStartWith("JavaScript Language");
checkStartWith("UI Developer");
console.log(` `);

console.log(
  `------------------------------------------------------------------------------`
);
