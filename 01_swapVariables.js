console.log(
  "----------------------------- Step 1 --------------------------------------------"
);
var sweety = "Sweety";
var cutie = "Cutie";
console.log("Before swap");
console.log("Value of Sweety is :", sweety);
console.log("Value of Cutie is :", cutie);
console.log("\n");

var temp = sweety;
sweety = cutie;
cutie = temp;

console.log("after swap");
console.log("Value of Sweety is :", sweety);
console.log("Value of Cutie is :", cutie);

console.log(
  "----------------------------- Step 2 --------------------------------------------"
);

var num1 = 100;
var num2 = 200;
var num3 = 300;

console.log("before swap value is");
console.log("value of num1 is : ", num1);
console.log("value of num2 is : ", num2);
console.log("value of num3 is : ", num3);
console.log("\n");

var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;

console.log("after swap value is");
console.log("value of num1 is : ", num1);
console.log("value of num2 is : ", num2);
console.log("value of num3 is : ", num3);
