/* 
   Filename: SophisticatedCode.js
   Content: A sophisticated and elaborate JavaScript code that demonstrates various advanced concepts and techniques.
*/

// Class for creating a Person
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   // Method to display person's name and age
   displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
   }
}

// Class for creating a Student that extends Person
class Student extends Person {
   constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
   }

   // Method to display student's grade
   displayGrade() {
      console.log(`Grade: ${this.grade}`);
   }
}

// Function to calculate the factorial of a number
function factorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   }
   return n * factorial(n - 1);
}

// Array of colors
const colors = ["red", "green", "blue", "yellow"];

// Function to check if a number is prime
function isPrime(num) {
   if (num < 2) {
      return false;
   }
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}

// Function to shuffle an array
function shuffleArray(array) {
   let currentIndex = array.length;
   let temporaryValue, randomIndex;

   while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
   }

   return array;
}

// Usage examples

const person1 = new Person("John", 25);
person1.displayInfo(); // Output: Name: John, Age: 25

const student1 = new Student("Alice", 20, "A");
student1.displayInfo(); // Output: Name: Alice, Age: 20
student1.displayGrade(); // Output: Grade: A

const factorialValue = factorial(5);
console.log(factorialValue); // Output: 120

const isPrimeNumber = isPrime(7);
console.log(isPrimeNumber); // Output: true

const shuffledColors = shuffleArray(colors);
console.log(shuffledColors); // Output: [ "blue", "yellow", "green", "red" ]

// ... Continue writing more sophisticated code below
...