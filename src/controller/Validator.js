import { $a, $all } from './shortElement.js';

const Valid_String = 'Thông tin không hợp lệ';
const Number_String = 'Chỉ được phép nhập số ở đây';
const NUMBER = /^[0-9]*$/;

export function validatePerson() {
  //

  let typePerson = $a('#typePersonModal').value;

  // Test user
  let flag = true;
  const regency = $a('#typeFromSelect').selectedIndex;
  if (regency === 0) {
    flag = false;
    $a('#tbTKNV').innerHTML = 'Vui lòng chọn người dùng!';
  } else {
    $a('#tbTKNV').innerHTML = '';
  }
  //Test Name
  let name = $a('#name').value;
  if (!name) {
    flag = false;
    $a('#tbName').innerHTML = Valid_String;
  } else {
    $a('#tbName').innerHTML = ' ';
  }

  //
  let address = $a('#address').value;
  if (!address) {
    flag = false;
    $a('#tbAddress').innerHTML = Valid_String;
  } else {
    $a('#tbAddress').innerHTML = '';
  }
  let email = $a('#email').value;

  //email
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email) {
    flag = false;
    $a('#tbEmail').innerHTML = Valid_String;
  } else if (!email.test(regexEmail)) {
    flag = false;
    $a('#tbEmail').innerHTML = 'Email không đúng định dạng !';
  } else {
    $a('#tbEmail').innerHTML = '';
  }
}
//

export function validateStudent() {
  let flag = true;
  const Score_valid = 'Điểm phải nằm trong phạm vi từ 0 - 10';
  let toan = $a('#diemToan').value;
  console.log(toan);
  if (!toan) {
    flag = false;
    $a('#tbdiemToan').innerHTML = Valid_String;
  } else if (Number(toan) > 10 || Number(toan) < 0) {
    flag = false;
    $a('#tbdiemToan').innerHTML = Score_valid;
  } else {
    $a('#tbdiemToan').innerHTML = '';
  }

  let ly = $a('#diemLy').value;
  if (!ly) {
    flag = false;
    $a('#tbdiemLy').innerHTML = Valid_String;
  } else if (Number(ly) > 10 || Number(ly) < 0) {
    $a('#tbdiemLy').innerHTML = Score_valid;
  } else {
    $a('#tbdiemLy').innerHTML = '';
  }

  let hoa = $a('#diemHoa').value;
  //
  if (!hoa) {
    //
    flag = false;
    $a('#tbdiemHoa').innerHTML = Valid_String;
  } else if (Number(hoa) > 10 || Number(hoa) < 0) {
    //
    flag = false;
    $a('#tbdiemHoa').innerHTML = Score_valid;
  } else {
    //N
    $a('#tbdiemHoa').innerHTML = '';
  }
  return flag;
}
export function ValidateEmployee() {
  let flag = true;
  let workingDays = $a('#workingDays').value;
  if (!workingDays) {
    flag = false;
    $a('#tbWorkingDays').innerHTML = Valid_String;
  } else {
    $a('#tbWorkingDays').innerHTML = '';
  }
  let salaryDay = $a('#salaryDay').value;
  if (!salaryDay.trim()) {
    //
    flag = false;
    $a('#tbSalaryDay').innerHTML = Valid_String;
  } else if (!salaryDay.match(NUMBER)) {
    flag = false;
    $a('#tbSalaryDay').innerHTML = Number_String;
  } else {
    $a('#tbSalaryDay').innerHTML = '';
  }
  return flag;
}
export function validateCustomer() {
  //
  let flag = true;
  let companyName = $a('#companyName').value;
  if (!companyName) {
    flag = false;
    $a('#tbCompanyName').innerHTML = Valid_String;
  } else {
    $a('#tbCompanyName').innerHTML = '';
  }
  let valuation = $a('#valuation').value;
  if (!valuation.trim()) {
    flag = false;
    $a('#tbValuation').innerHTML = Valid_String;
  } else if (!valuation.match(NUMBER)) {
    flag = false;
    $a('tbValuation').innerHTML = Number_String;
  } else {
    $a('tbValuation').innerHTML = '';
  }
  let review = $a('#review').value;
  if (!review) {
    flag = false;
    $a('#tbReview').innerHTML = Valid_String;
  } else {
    $a('#tbReview').innerHTML = '';
  }
  return flag;
}
// export { validatePerson, validateStudent, ValidateEmployee, validateCustomer };
