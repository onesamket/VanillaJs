//array spread operator
const num1 = [1, 2, 3, 4];
const num2 = [6, 7, 8, 9];
const combined = [...num1, ...num2];
console.log(combined);
// aray detructuring
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest);

const Person = {
  name: "Onesamket",
  age: 34,
  email: "onesamket@gmail.com",
  school: {
    location: "Ethiopia",
    name: "haranmaya",
    region: "Oromia"
  }
};

const { name, age, email } = Person;
console.log(email);
