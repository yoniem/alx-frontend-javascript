// 9-hoisting.js
import Student from './8-hbtn_class';

const listOfStudents = [
  new Student('Bob', 27, 'male'),
  new Student('Claire', 32, 'female'),
  new Student('Alice', 24, 'female')
];

export default function initializeStudents() {
  listOfStudents.forEach(student => {
    const studentDescription = fullStudentDescription(student);
    console.log(studentDescription);
  });
}
