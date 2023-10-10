function Scooter(year, color, model){
    this.year = year;
    this.color = color;
    this.model = model;
}
const myScooter = new Scooter(2015, "red", "swoosh");
console.log(myScooter.year);
console.log(myScooter.color);
console.log(myScooter.model);

function Driver(name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
}
const myDriver = new Driver("Bob", "17years", "2years");
console.log(myDriver.name);
console.log(myDriver.age);
console.log(myDriver.experience);

function PickupLocation(address, city){
    this.address = address;
    this.city = city;
}
const myPickupLocation = new PickupLocation("Tom Mboya", "Kenya");
console.log(myPickupLocation.address);
console.log(myPickupLocation.city);