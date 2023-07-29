class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const car1 = new Car("BMW", 2020);
const car2 = new Car("marcos", 2010);
const car3 = new Car("Lamborghini", 2018);

console.log(car1) // Output: {name: "BMW", year: 2020}
console.log(car2) // Output: {name: "marcos", year: 2010}
console.log(car3) // Output: {name: "Lamborghini", year: 2018}