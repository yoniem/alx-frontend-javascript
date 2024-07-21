import HolbertonClass from './8-hbtn_class';

class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const listOfStudents = [
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 32,
    location: 'San Francisco',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York',
  },
];

function getFullStudentDescription(student) {
  return `${student.firstName} ${student.lastName} is ${student.age} years old and lives in ${student.location}`;
}

for (const student of listOfStudents) {
  console.log(getFullStudentDescription(student));
}
