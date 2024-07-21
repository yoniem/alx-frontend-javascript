// 9-hoisting.js

// Variable declaration with var hoisting
var listOfStudents = ['John', 'Jane', 'Jim'];

// Function hoisting
function initialization() {
  var a = 'Hello';
  var b = 'World';
  return `${a} ${b}`;
}

// Function to return full student description
function fullStudentDescription(name, age) {
  return `${name} is ${age} years old.`;
}
