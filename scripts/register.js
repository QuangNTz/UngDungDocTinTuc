'use strict';

const input_firstname = document.getElementById('input-firstname');
const input_lastname = document.getElementById('input-lastname');
const input_username = document.getElementById('input-username');
const input_password = document.getElementById('input-password');
const input_passwordconfirm = document.getElementById('input-password-confirm');

const btn_submit = document.getElementById('btn-submit');

//*------------------------------------------------*/
//! Doc du lieu userArr tu localStorage
const userArr_temp = JSON.parse(localStorage.getItem('userArr_ls'));
let userArr = [];
//! Neu chua ton tai data thi tao va luu xuong localStorage
if (userArr_temp == undefined) {
  createUserData();
} else {
  userArr = userArr_temp.map((user) => parseUser(user));
}

//*------------------------------------------------*/
//! su kien nut Register
btn_submit.addEventListener('click', function (e) {
  e.preventDefault();
  // Du lieu nhap tu man hinh
  const dataEnter = {
    firstName: input_firstname.value,
    lastName: input_lastname.value,
    userName: input_username.value,
    password: input_password.value,
    passwordconfirm: input_passwordconfirm.value,
  };

  let fn = false,
    ln = false,
    un = false,
    pw = false;
  // Tao 1 mang chua username
  const userNameArr = userArr.map((u) => u.userName);

  //! Kiem tra du lieu nhap
  //Kiem tra input firstName
  dataEnter.firstName !== '' ? (fn = true) : alert('Please input First Name');
  //Kiem tra input lastName
  dataEnter.lastName !== '' ? (ln = true) : alert('Please input Last Name');
  //Kiem tra input userName
  if (userArr.length === 0) {
    input_username.value !== '' ? (un = true) : alert('Please input user Name.');
  } else if (input_username.value === '') {
    alert('Please input user Name.');
  } else if (userNameArr.includes(dataEnter.userName)) {
    alert('User name already exist. Please input another user Name.');
  } else {
    un = true;
  }
  //Kiem tra input password
  if (dataEnter.password.length <= 8) {
    alert('Please input password more than 8 character');
  } else if (dataEnter.password !== dataEnter.passwordconfirm) {
    alert('Password & Confirm password must be similar');
  } else {
    pw = true;
  }
  // Khi thoa tat ca dieu kien thi add user vao mang userArr
  if (fn && ln && un && pw) {
    const user = new User(
      dataEnter.firstName,
      dataEnter.lastName,
      dataEnter.userName,
      dataEnter.password
    );
    userArr.push(user);

    saveUserDataToStorage();

    //chuyen giao dien sang trang login
    // window.open('./login.html');
    window.location.href = './login.html';
  }
});
