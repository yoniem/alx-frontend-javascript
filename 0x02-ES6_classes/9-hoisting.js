// Assuming the original code needs corrections:

// Fix indentation and remove unused variables
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullStudentDescription() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const listOfStudents = [
  new Student('John', 'Doe'),
  new Student('Jane', 'Doe')
];

export { Student, listOfStudents };
