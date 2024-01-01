function stringBasics() {
  console.log(
    `------------------------- Step 1 ------------------------------------`
  );
  console.log(`My Dream Company is : "Microsoft"`);

  console.log(
    `------------------------- Step 2 ------------------------------------`
  );

  var hobbie1 = "Playing Badminton";
  var hobbie2 = "Reading";
  var hobbie3 = "Learn Programming";
  console.log(`My Hobbies are : ${hobbie1}, ${hobbie2}, ${hobbie3}`);

  var hobbieLength = hobbie1 + hobbie2 + hobbie3;
  var hobbieLengthResult = hobbieLength.length;
  console.log(
    `total number of characters in Hobbies are : ${hobbieLengthResult}`
  );
}
stringBasics();
