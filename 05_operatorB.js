console.log(
  `----------------------------- Step 1 ------------------------------------------------`
);
console.log(` `);
function greaterNumber(n1, n2) {
  var max = n1 > n2 ? n1 : n2;
  console.log(
    `Greater number between ${n1} and ${n2}  : ${max} is greater number`
  );
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log(` `);
console.log(
  `----------------------------- Step 2 ------------------------------------------------`
);
console.log(` `);
function isEvenOrOddNum(arg1) {
  var result =
    arg1 % 2 == 0
      ? console.log(`True, Given Number "${arg1}" is Even`)
      : console.log(`False, Given Number "${arg1}" is Odd`);
  return check;
}
var check = isEvenOrOddNum(10);
var check = isEvenOrOddNum(105);
var check = isEvenOrOddNum(88);
var check = isEvenOrOddNum(99);
console.log(` `);
console.log(
  `----------------------------- Step 3 ------------------------------------------------`
);
console.log(` `);
function wordLength(value) {
  var temp = value.length;
  console.log(`Given Word is "${value}" and it's word length is ${temp}`);
  var check =
    temp % 2 == 0
      ? console.log(`${value} word Length is "Even"`)
      : console.log(`${value} word Length is "Odd"`);
  console.log(` `);
  return check;
}
var check = wordLength(`JavaScript`);
var check = wordLength(`Developer`);
var check = wordLength(`Google`);
