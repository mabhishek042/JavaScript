function stringHandsOn() {
  var givenString = `  Hey you are doing good, keep it up  `;
  console.log(
    `------------------------- Step 1 ------------------------------------`
  );
  console.log(`Given String is : ${givenString}`);
  console.log(`------------------------------------------------------------`);
  console.log(`Length of given String is : ${givenString.length}`);
  console.log(`------------------------------------------------------------`);
  var trimResult = givenString.trim();
  console.log(`after trim Given String is : ${givenString}`);
  console.log(`Length of given String after trim is : ${trimResult.length}`);
  console.log(`------------------------------------------------------------`);
  var extraSpaces = givenString.length - trimResult.length;
  console.log(`Removed Extraspaces from String is : ${extraSpaces}`);
  console.log(`------------------------------------------------------------`);
  console.log(
    `First Character on String is ${trimResult.charAt(
      0
    )}, Last Character on String is ${trimResult.charAt(trimResult.length - 1)}`
  );

  console.log(`------------------------------------------------------------`);

  var totalWords = trimResult.split(" ");
  var wordsL = totalWords.length;
  console.log(` total words in string is : ${wordsL}`);

  console.log(`------------------------------------------------------------`);
  console.log(`Index of word "Good" is : ${trimResult.indexOf("good")}`);
  console.log(`------------------------------------------------------------`);
  var result = givenString.slice(22);
  var result1 = givenString.substring(22);
  console.log(`The Substring is Starting from Index 22 is : ${result}`);
  console.log(`using Substring -> ${result1}`);
  console.log(`using Slice -> ${result}`);
  console.log(`------------------------------------------------------------`);
  console.log(`is string ends with word "up" : ${trimResult.endsWith(`up`)}`);
  console.log(
    `is string start with word "Hey" : ${trimResult.startsWith(`Hey`)}`
  );
}
stringHandsOn();
