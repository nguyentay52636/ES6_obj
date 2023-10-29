import { $a, $all } from './shortElement.js';
import { handleModal } from './handleChange.js';
import addPerson from './addPerson.js';
import ListPerson from '../models/ListPerson.js';
import deletePerson from './deletePerson.js';
import { handleRender } from './handleRender.js';
// import { renderTable } from './renderTable.js';
import { getLocalStorage, setLocalStorage } from './localStorage.js';
import { getTypePerson } from './getTypePerson.js';
const listPerson = new ListPerson();

$a('#typePersonModal').addEventListener('change', handleModal);
$a('#btnAddPerson').addEventListener('click', () => {
  addPerson(listPerson);
});

if (getLocalStorage() === null) {
  setLocalStorage(listPerson.persons);
}

listPerson.persons = getLocalStorage();

handleRender(listPerson.persons);
$a('#tableDanhSach').addEventListener('click', (event) => {
  const idEle = event.target.id;
  switch (idEle) {
    case 'deleteBtn':
      const personID = event.target.getAttribute('keyPerson');
      deletePerson(listPerson, personID);
      handleRender(listPerson.persons);
    case 'btnView':
      const id = event.target.getAttribute('keyPerson');
      const person = listPerson.persons.find((person) => {
        return person.ma === id;
      });
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

function autoSelectTypePerson(type) {
  for (let i = 0; i < typePersonModal.options.length; i++) {
    if (typePersonModal.options[i].value === type) {
      typePersonModal.options[i].selected = true;
    }
  }
}
