console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
console.log(``);
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    
   this.bankDetails = function()
    {
       console.log(`Bank Name is : ${this.bankName}, Bank Location is :${this.location}, Bank IFSC Code is : ${this.ifscCode}, Bank Branch Code is :${this.branchCode}`);
    }
}
const yesBank =new Bank('YES Bank','Pune','YESB0000008','411532002');
const sbiBank =new Bank('State Bank Of India ','Mumbai','SBIN0000300','000300');
const mahBank =new Bank('Bank Of Maharashtra','Solapur','MAHB0000549','000549');
const axisBank =new Bank('Axis Bank','Sangola','UTIB0003816','413211351');
yesBank.bankDetails();
sbiBank.bankDetails();
mahBank.bankDetails();
axisBank.bankDetails();
console.log(``);
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
console.log(``);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`Opening time of SBI Bank is : ${sbiBank.openTime} & Closing time of SBI Bank is : ${sbiBank.closeTime}`);
console.log(``);
console.log(`Opening time of  Bank Axis Bank is : ${axisBank.openTime} & Closing time of Axis Bank is : ${axisBank.closeTime}`);
console.log(``);
console.log(`Opening time of Yes Bank is : ${yesBank.openTime} & Closing time of Yes Bank is : ${yesBank.closeTime}`);
console.log(``);
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);