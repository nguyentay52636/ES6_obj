import { $a, $all } from './shortElement.js';
import { handleModal } from './handleChange.js';
import addPerson from './addPerson.js';
import ListPerson from '../models/ListPerson.js';
import deletePerson from './deletePerson.js';
import { handleRender } from './handleRender.js';
import { getLocalStorage, setLocalStorage } from './localStorage.js';
import { getTypePerson } from './getTypePerson.js';
// import {
//   validatePerson,
//   validateStudent,
//   ValidateEmployee,
//   validateCustomer,
// } from './Validator.js';
const listPerson = new ListPerson();
$a('#typePersonModal').addEventListener('change', handleModal);
$a('#btnAddPerson').addEventListener('click', () => {
  addPerson(listPerson);
  $a('#btnDong').click();
  Swal.fire({
    icon: 'success',
    title: ' Add Susscess!',
  });
  resetForm();
});

if (getLocalStorage() === null) {
  setLocalStorage(listPerson.persons);
}

listPerson.persons = getLocalStorage();

handleRender(listPerson.persons);
$a('#tableDanhSach').addEventListener('click', (event) => {
  const idEle = event.target.id;
  // console.log(event.target);
  switch (idEle) {
    case 'deleteBtn':
      const personID = event.target.getAttribute('keyPerson');
      deletePerson(listPerson, personID);
      handleRender(listPerson.persons);
      setLocalStorage(listPerson.persons);
      Swal.fire({
        icon: 'success',
        title: 'Delete Susscess!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    case 'btnView':
      const id = event.target.getAttribute('keyPerson');
      const person = listPerson.persons.find((person) => {
        return person.ma === id;
      });

      // $a('#btnAddPerson').style.display = ' none';

      const typePerson = getTypePerson(person);
      let typePersonModal = $a('#typePersonModal');
      const { ma, name, email, address } = person;
      $a('#ID').value = ma;
      $a('#name').value = name;
      $a('#email').value = email;
      $a('#address').value = address;
      switch (typePerson) {
        case 'Student':
          autoSelectTypePerson('Student');
          handleModal();
          const { toan, ly, hoa } = person;
          $a('#diemToan').value = toan;
          $a('#diemLy').value = ly;
          $a('#diemHoa').value = hoa;

          break;
        case 'Employee':
          autoSelectTypePerson('Employee');
          handleModal();
          const { workingDays, salaryDay } = person;
          $a('#workingDays').value = workingDays;
          $a('#salaryDay').value = salaryDay;
          break;
        case 'Customer':
          autoSelectTypePerson('Customer');
          handleModal();
          const { companyName, valuation, review } = person;
          $a('#companyName').value = companyName;
          $a('#valuation').value = valuation;
          $a('#review').value = review;
          break;
      }
  }
});
//cap nhap
// $a('#btnCapNhat').style.display = 'block';
$a('#btnCapNhat').addEventListener('click', (event) => {
  const id = $a('#ID').value;
  const name = $a('#name').value;
  const email = $a('#email').value;
  const address = $a('#address').value;
  const type = $a('#typePersonModal').value;

  let updatedPerson;

  switch (type) {
    case 'Student':
      const toan = $a('#diemToan').value;
      const ly = $a('#diemLy').value;
      const hoa = $a('#diemHoa').value;
      updatedPerson = {
        ma: id,
        name: name,
        email: email,
        address: address,
        type: type,
        toan: toan,
        ly: ly,
        hoa: hoa,
      };
      break;
    case 'Employee':
      const workingDays = $a('#workingDays').value;
      const salaryDay = $a('#salaryDay').value;
      updatedPerson = {
        ma: id,
        name: name,
        email: email,
        address: address,
        type: type,
        workingDays: workingDays,
        salaryDay: salaryDay,
      };
      break;
    case 'Customer':
      const companyName = $a('#companyName').value;
      const valuation = $a('#valuation').value;
      const review = $a('#review').value;
      updatedPerson = {
        ma: id,
        name: name,
        email: email,
        address: address,
        type: type,
        companyName: companyName,
        valuation: valuation,
        review: review,
      };
      break;
  }

  const index = listPerson.persons.findIndex((person) => {
    return person.ma === id;
  });
  if (index !== -1) {
    listPerson.persons[index] = updatedPerson;
    handleRender(listPerson.persons);
    $a('#btnDong').click();
    resetForm();
    Swal.fire({
      icon: 'success',
      title: 'Update Success!',
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Update faild!',
      text: 'Person not found!',
    });
  }
});

function autoSelectTypePerson(type) {
  for (let i = 0; i < typePersonModal.options.length; i++) {
    if (typePersonModal.options[i].value === type) {
      typePersonModal.options[i].selected = true;
    }
  }
}

function resetForm() {
  const resetInput = $all('#resetForm input');
  const arrInput = [...resetInput];
  arrInput.map((input) => {
    input.value = '';
  });
}
// $a('#btnThem').addEventListener('click', () => {
//   $a('#btnCapNhat').style.display = 'none';
// });
// f
