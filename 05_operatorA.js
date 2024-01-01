console.log(
  `---------------------------- Step 1 ------------------------------------`
);
function squareOfWordLength(value) {
  var valueLength = value.length;
  5;
  var result = valueLength * valueLength;

  console.log(`Given String is : ${value}`);
  console.log(`Length of Given String is : ${valueLength} `);
  console.log(`Square of Given String is : ${result}`);
  console.log(` `);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(
  `---------------------------- Step 2 ------------------------------------`
);
function stringValue() {
  var givenString = "I am Angular Developer";
  var stringLength = givenString.length;
  var stringWord = givenString.split(" ");
  var wordLength = stringWord.length;
  var wordDivision = stringLength / wordLength;
  var wordMultiply = stringLength * wordLength;

  console.log(`Given String length is : ${stringLength}`);
  console.log(`total number of words are in given string is : ${wordLength}`);
  console.log(
    `String length divided by number of words in String is : ${wordDivision}`
  );
  console.log(``);
  console.log(`Given String length is : ${stringLength}`);
  console.log(`total number of words are in given string is : ${wordLength}`);
  console.log(
    `String length multiply by number of words in String is : ${wordMultiply}`
  );
}
stringValue();
