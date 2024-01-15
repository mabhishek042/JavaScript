console.log(
  `----------------------------- Step 1 ---------------------------------------`
);
var vovelCount = function () {
  let str = "I am very good IT Developer";
  let vovelsCount = 0;
  for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index).toLowerCase();

    if (
      char == "a" ||
      char == "e" ||
      char == "o" ||
      char == "i" ||
      char == "u"
    ) {
      vovelsCount = vovelsCount + 1;
    }
  }
  console.log(`vovel count is in string is : ${vovelsCount}`);
};
vovelCount();
console.log(
  `----------------------------- Step 2 ---------------------------------------`
);

let sumOfCube = function () {
  let sum = 0;
  for (let index = 1; index <= 5; index++) {
    sum = sum + index * index * index;
  }
  console.log(`first five numbers of cube of addition is : ${sum} `);
};
sumOfCube();
console.log(
  `----------------------------- Step 3 ---------------------------------------`
);
let oddPositiondChars = function name(param) {
  for (let index = 0; index < param.length; index++) {
    let char = param.charAt(index);
    if (index % 2 != 0 && char != " ") {
      console.log(char);
    }
  }
};
oddPositiondChars(`Hard Work Always pays back`);
oddPositiondChars(`Soon I will be UI IT Champ`);
console.log(
  `------------------------------- End ---------------------------------------`
);