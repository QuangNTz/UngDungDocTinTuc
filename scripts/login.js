'use strict';

const input_username = document.getElementById('input-username');
const input_password = document.getElementById('input-password');
const btn_submit = document.getElementById('btn-submit');

let currentUser;

//*------------------------------------------------*/
//Doc du lieu userArr tu localStorage
const userArr_temp = JSON.parse(localStorage.getItem('userArr_ls'));
let userArr = [];
// tao data cho User tu User.js
if (userArr_temp == undefined) {
  createUserData();
} else {
  userArr = userArr_temp.map((user) => parseUser(user));
}
//*------------------------------------------------*/
//! su kien nut Login
btn_submit.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(input_username.value, input_password.value);
  let us = false,
    pw = false;
  // Kiem tra da co nhap data chua
  input_username.value !== '' ? (us = true) : alert('Enter User Name!');
  input_password.value !== '' ? (pw = true) : alert('Enter password!');
  // Truong hop da nhap thi kiem tra voi du lieu User da co
  if (us && pw) {
    // Tim ten user name da ton tai hay chua
    currentUser = userArr.find((user) => user.userName === input_username.value);
    // Kiem tra password neu user name da ton tai
    if (currentUser?.passWord === input_password.value) {
      //Luu currentUser xuong
      saveCurrentUserDataToStorage();
      //Hien thi giao dien sang trang Home
      window.location.href = '../index.html';
    } else {
      // Bao loi khi data ko dung
      alert('User name or password not correct');
    }
  }
});
