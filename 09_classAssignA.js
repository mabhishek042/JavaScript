console.log(`============================================ Step 1 ==================================================================`);
console.log(``);
class Vehicle{
    constructor(Name, Colour, Type, FuelType, Price){
        this.Name = Name;
        this.Colour = Colour;
        this.Type = Type;
        this.FuelType = FuelType;
        this.Price = Price;
       

    }
    getDetails(){
        console.log(`Vehicle Name: ${this.Name}, Vehicle Colour: ${this.Colour}, Vehicle Type: ${this.Type}, Fuel Type : ${this.FuelType}, Vehicle Price : ${this.Price} `);
    }

    
}
const R15 = new Vehicle("Yamaha R15", "White", "Bike", "Petrol", 182856);
const Revolt = new Vehicle("Revolt RV400", "Black", "Bike", "Electronic",131569);
const Ola = new Vehicle("Ola S1 Pro", "White", "Scooter", "Electronic",139569);
const Creta = new Vehicle("Hyundai Creta", "Black", "Car", "Petrol",1131569);
const Corolla = new Vehicle("Toyota Corolla Cross", "Black", "Car", "Electronic",2323935);


console.log(` Traversing Array using "ForOf"`);
console.log(``);
const arrayOfVehicle = [R15,Revolt,Ola,Creta,Corolla];
for (const iterator of arrayOfVehicle) {
    iterator.getDetails();
}
console.log(``);
console.log(`============================================ Step 2 ==================================================================`);
console.log(``);
class College {
    constructor(Name, Department,  Fees, Location  ){
        this.Name = Name; 
        this.Department = Department;
        
        this.Fees = Fees;
        this.Location = Location;


    }
    display(){
        console.log(`College Name : ${this.Name}, Department : ${this.Department},  College Fees : ${this.Fees}, College Location : ${this.Location}`);
    }

   
}
const ldce = new College("LD College of Engineering","Computer Science",  19456, "Ahmedabad");
const coep = new College("College of Engineering Pune", "IT", 10369, "Pune");
const bjmc = new College("BJ Medical College", "MBBS", 10369,"Ahmedabad");
const vpmc = new College("Vasantrao Pawar Medical College", "MBBS", 120369,"Nashik");
ldce.display();
coep.display();
bjmc.display();
vpmc.display();
console.log(``);
console.log(`============================================ Step 3 ==================================================================`);
console.log(``);
let traverseObject = function (arg) {
   
    for (const key in arg) {
        if (Object.hasOwnProperty.call(arg, key)) {
            const element = arg[key];
            console.log(`Key ==> ${key}, Value ==> ${element}`);
        }
    }
}
traverseObject(ldce);
traverseObject(coep);
traverseObject(bjmc);
traverseObject(vpmc);
console.log(``);
console.log(`============================================ End ==================================================================`);

