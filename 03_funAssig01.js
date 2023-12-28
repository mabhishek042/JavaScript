console.log(
  "----------------------------- Step 1 --------------------------------------------"
);

function hobbies() {
  console.log("My Hobbies are Playing Cricket, Listening Songs");
}
hobbies();

function programmingLanguage() {
  console.log("Most Powerful Programming Language is JavaScript");
}
programmingLanguage();

console.log(
  "----------------------------- Step 2 --------------------------------------------"
);
function personalDetails(firstName, lastName, collegeName) {
  console.log("First Name : ", firstName);
  console.log("Last Name : ", lastName);
  console.log("College Name : ", collegeName);
}
personalDetails("Abhishek", "More", "Pune_University");
console.log(
  "----------------------------- Step 3 --------------------------------------------"
);
function swapValues(value1, value2) {
  console.log("Before Swap Value : ");
  console.log("Value 1 is : ", value1);
  console.log("Value 2 is : ", value2);

  var temp = value1;
  value1 = value2;
  value2 = temp;

  console.log("After Swap Value : ");
  console.log("Value 1 is : ", value1);
  console.log("Value 2 is : ", value2);
  console.log("\n");
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log(
  "----------------------------- Step 4 --------------------------------------------"
);
function addThreeValues(num1, num2, num3) {
  console.log("Value 1 is : ", num1);
  console.log("Value 2 is : ", num2);
  console.log("Value 3 is : ", num3);

  var result = num1 + num2 + num3;
  console.log("addition of ", num1, "+", num2, "+", num3, "is : ", result);
  console.log("\n");
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
