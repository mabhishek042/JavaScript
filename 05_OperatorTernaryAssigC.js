console.log(
  `----------------------------- Step 1 ----------------------------------------`
);
console.log(` `);
function maleMarriageEligibility(gender, age, boyName) {
  gender =
    "Male" && age >= 21
      ? console.log(`Hey ${boyName} you are eligible for Marriage`)
      : console.log(`Sorry, ${boyName} you're not Eligible for Marriage`);
}
maleMarriageEligibility("Male", 25, "Bill Gates");
maleMarriageEligibility("Male", 17, "Steve Jobs");
console.log(` `);
console.log(
  `----------------------------- Step 2 ----------------------------------------`
);
console.log(` `);
function femaleMarriageEligibility(gender, age, girlName) {
  gender =
    "Female" && age >= 21
      ? console.log(`Hey ${girlName} you are eligible for Marriage`)
      : console.log(`Sorry, ${girlName} you're not Eligible for Marriage`);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Melinda Gates");
console.log(``);
console.log(
  `--------------------------------- End ---------------------------------------`
);
