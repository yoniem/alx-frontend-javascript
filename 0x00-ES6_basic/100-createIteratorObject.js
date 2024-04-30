export default function createIteratorObject(report) {
  let employees = [];

  for (const key in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, key)) {
      employees = employees.concat(report.allEmployees[key]);
    }
  }

  let index = 0;
  return {
    next() {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      }
      return { done: true };
    },
  };
}
