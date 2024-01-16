console.log(
  `=================================== Step 1 ===========================================`
);
let bankSbi = {
  BankName: "SBI",
  PersonName: "Alex",
  AccountNo: 90235,
  AccountType: "Saving Account",
  BranchName: "University Area",
};

let bankLocation = {
  Street: "Pune Vidhyapith",
  city: "PUNE",
  pin: 411007,
};
console.log(``);
const cloningBankDetails = Object.assign({}, bankSbi, bankLocation);
console.log(`Bank Sbi Details : `, bankSbi);
console.log(`Bank Location Details : `, bankLocation);
console.log(``);
console.log(
  `=================================== Step 2 ===========================================`
);
console.log(``);
console.log(`After Cloning Bank Sbi Details with Bank Location Details :- `);
console.table(cloningBankDetails);
console.log(``);
console.log(
  `=================================== Step 3 ===========================================`
);
console.log(``);
let rateOfInterest = {
  HomeLoanInterest: 8.9,
  personalLoanInterest: 13,
  dualInterest: 16,
};
console.log(`Bank Loan Interest Details :- `);
Object.assign(rateOfInterest);
console.log(rateOfInterest);
console.log(``);
console.log(
  `=================================== Step 4 ===========================================`
);
console.log(``);
console.log(`Total Bank Details :- `);
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);
console.log(``);
console.log(
  `=================================== Step 5 ===========================================`
);
console.log(``);
console.log(`Traversing all Bank Details using Loop :- `);

for (const key in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];
    console.log(`Key ==> ${key}, Value ==> ${element}`);
  }
}
console.log(``);
console.log(
  `===================================   End  ===========================================`
);
