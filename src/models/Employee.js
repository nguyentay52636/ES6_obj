import Person from './Person.js';

export default class Employee extends Person {
  //
  constructor(name, email, ma, address, workingDays, salaryDay) {
    super(name, email, ma, address);
    this.workingDays = workingDays;
    this.salaryDay = salaryDay;
  }
  sumSalary() {
    let sumSalary = Number(this.salaryDay) * Number(this.workingDays);
    return sumSalary.toLocaleString();
  }
}
