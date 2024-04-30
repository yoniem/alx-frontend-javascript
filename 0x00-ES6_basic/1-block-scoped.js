export default function taskBlock(trueOrFalse) {
  let task = false; // Declare task with let instead of var
  let task2 = true; // Declare task2 with let instead of var

  if (trueOrFalse) {
    let task = true; // Declare task with let instead of var to ensure block scope
    let task2 = false; // Declare task2 with let instead of var to ensure block scope
  }

  return [task, task2];
}
