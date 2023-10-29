import { $a, $all } from './shortElement.js';
import Student from '../models/Student.js';
import Employee from '../models/Employee.js';
import Customer from '../models/Customer.js';
import { handleRender } from './handleRender.js';
import { setLocalStorage } from './localStorage.js';

export function getPerson() {
  const selecValue = $a('#typePersonModal');
  const id = $a('#ID').value;
  const name = $a('#name').value;
  const email = $a('#email').value;
  const address = $a('#address').value;
  switch (selecValue.value) {
    case 'Student':
      const diemToan = $a('#diemToan').value;
      const diemLy = $a('#diemLy').value;
      const diemHoa = $a('#diemHoa').value;
      const student = new Student(
        name,
        email,
        id,
        address,
        diemToan,
        diemLy,
        diemHoa
      );
      return student;
      break;
    case 'Employee':
      const workingDays = $a('#workingDays').value;
      const salaryDay = $a('#salaryDay').value;
      const employee = new Employee(
        name,
        email,
        id,
        address,
        workingDays,
        salaryDay
      );
      return employee;
      break;
    case 'Customer':
      const companyName = $a('#companyName').value;
      const valuation = $a('#valuation').value;
      const review = $a('#review').value;
      const customer = new Customer(
        name,
        email,
        id,
        address,
        companyName,
        valuation,
        review
      );
      return customer;
      break;
  }
}
export default function addPerson(listPerson) {
  let person = getPerson();
  listPerson.persons.push(person);
  console.log(listPerson.persons);
  handleRender(listPerson.persons);
  setLocalStorage(listPerson.persons);
}
