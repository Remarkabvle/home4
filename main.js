// class BankAccount {
//     private balance: number;
//     private accountNumber: string;
//     constructor(accountNumber: string, initialBalance: number) {
//         this.accountNumber = accountNumber;
//         this.balance = initialBalance;
//     }
//     public deposit(amount: number): void {
//         if (amount > 0) {
//             this.balance += amount;
//         }
//     }
//     public withdraw(amount: number): void {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//         }
//     }
//     public getBalance(): number {
//         return this.balance;
//     }
// }
// class Student {
//     private name: string;
//     private age: number;
//     private grades: number[];
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         this.grades = [];
//     }
//     public addGrade(grade: number): void {
//         this.grades.push(grade);
//     }
//     public getAverageGrade(): number {
//         const total = this.grades.reduce((acc, grade) => acc + grade, 0);
//         return total / this.grades.length;
//     }
//     public getName(): string {
//         return this.name;
//     }
// }
// class Car {
//     private make: string;
//     private model: string;
//     private fuelLevel: number;
//     constructor(make: string, model: string, initialFuelLevel: number) {
//         this.make = make;
//         this.model = model;
//         this.fuelLevel = initialFuelLevel;
//     }
//     public drive(distance: number): void {
//         const fuelConsumed = distance / 10;
//         if (this.fuelLevel >= fuelConsumed) {
//             this.fuelLevel -= fuelConsumed;
//         }
//     }
//     public refuel(amount: number): void {
//         this.fuelLevel += amount;
//     }
//     public getFuelLevel(): number {
//         return this.fuelLevel;
//     }
// }
// class CoffeeMachine {
//     private waterLevel: number;
//     private coffeeBeans: number;
//     constructor() {
//         this.waterLevel = 0;
//         this.coffeeBeans = 0;
//     }
//     public addWater(amount: number): void {
//         this.waterLevel += amount;
//     }
//     public addCoffeeBeans(amount: number): void {
//         this.coffeeBeans += amount;
//     }
//     public makeCoffee(): string {
//         if (this.waterLevel > 0 && this.coffeeBeans > 0) {
//             this.waterLevel--;
//             this.coffeeBeans--;
//             return "Here is your coffee!";
//         } else {
//             return "Please add water and coffee beans.";
//         }
//     }
// }
// class Printer {
//     private paperLevel: number;
//     private inkLevel: number;
//     constructor() {
//         this.paperLevel = 0;
//         this.inkLevel = 0;
//     }
//     public addPaper(amount: number): void {
//         this.paperLevel += amount;
//     }
//     public addInk(amount: number): void {
//         this.inkLevel += amount;
//     }
//     public print(document: string): string {
//         if (this.paperLevel > 0 && this.inkLevel > 0) {
//             this.paperLevel--;
//             this.inkLevel--;
//             return `Printing: ${document}`;
//         } else {
//             return "Please add paper and ink.";
//         }
//     }
// }
// class MusicPlayer {
//     private volume: number;
//     private playlist: string[];
//     constructor() {
//         this.volume = 50;
//         this.playlist = [];
//     }
//     public addToPlaylist(song: string): void {
//         this.playlist.push(song);
//     }
//     public play(): string {
//         if (this.playlist.length > 0) {
//             return `Playing: ${this.playlist[0]}`;
//         } else {
//             return "Playlist is empty.";
//         }
//     }
//     public setVolume(volume: number): void {
//         if (volume >= 0 && volume <= 100) {
//             this.volume = volume;
//         }
//     }
//     public getVolume(): number {
//         return this.volume;
//     }
// }
// class Vehicle {
//     protected make: string;
//     protected model: string;
//     constructor(make: string, model: string) {
//         this.make = make;
//         this.model = model;
//     }
//     public start(): void {
//         console.log("Vehicle started");
//     }
//     public stop(): void {
//         console.log("Vehicle stopped");
//     }
// }
// class Car extends Vehicle {
//     private doors: number;
//     constructor(make: string, model: string, doors: number) {
//         super(make, model);
//         this.doors = doors;
//     }
//     public honk(): void {
//         console.log("Car honking");
//     }
// }
// class Person {
//     protected name: string;
//     protected age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     public introduce(): void {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// }
// class Employee extends Person {
//     private employeeId: number;
//     constructor(name: string, age: number, employeeId: number) {
//         super(name, age);
//         this.employeeId = employeeId;
//     }
//     public work(): void {
//         console.log(`${this.name} is working`);
//     }
// }
// class Animal {
//     protected species: string;
//     constructor(species: string) {
//         this.species = species;
//     }
//     public eat(): void {
//         console.log("Animal is eating");
//     }
//     public sleep(): void {
//         console.log("Animal is sleeping");
//     }
// }
// class Dog extends Animal {
//     private breed: string;
//     constructor(species: string, breed: string) {
//         super(species);
//         this.breed = breed;
//     }
//     public bark(): void {
//         console.log("Dog is barking");
//     }
// }
// class Shape {
//     public draw(): void {
//         console.log("Drawing a shape");
//     }
// }
// class Circle extends Shape {
//     public draw(): void {
//         console.log("Drawing a circle");
//     }
// }
// class Square extends Shape {
//     public draw(): void {
//         console.log("Drawing a square");
//     }
// }
// class Triangle extends Shape {
//     public draw(): void {
//         console.log("Drawing a triangle");
//     }
// }
// const shapes: Shape[] = [new Circle(), new Square(), new Triangle()];
// shapes.forEach(shape => shape.draw());
// class Employee {
//     public work(): void {
//         console.log("Employee is working");
//     }
// }
// class Manager extends Employee {
//     public work(): void {
//         console.log("Manager is managing");
//     }
// }
// class Developer extends Employee {
//     public work(): void {
//         console.log("Developer is coding");
//     }
// }
// class Designer extends Employee {
//     public work(): void {
//         console.log("Designer is designing");
//     }
// }
// const employees: Employee[] = [new Manager(), new Developer(), new Designer()];
// employees.forEach(employee => employee.work());
// class Instrument {
//     public play(): void {
//         console.log("Playing an instrument");
//     }
// }
// class Guitar extends Instrument {
//     public play(): void {
//         console.log("Playing a guitar");
//     }
// }
// class Piano extends Instrument {
//     public play(): void {
//         console.log("Playing a piano");
//     }
// }
// class Drum extends Instrument {
//     public play(): void {
//         console.log("Playing a drum");
//     }
// }
// const instruments: Instrument[] = [new Guitar(), new Piano(), new Drum()];
// instruments.forEach(instrument => instrument.play());
