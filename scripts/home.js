'use strict';

//!!! Truong hop luc dau trang chua co data Mentor co the refresh de them data ben duoi localStorage app se chay binh thuong. E xin cam on

const row = document.querySelector('.row');
const btn_logout = document.getElementById('btn-logout');
const loginModal = document.getElementById('login-modal');
const labelWelcome = document.getElementById('welcome-message');
const labelLoginRegister = document.getElementById('login-register');

//*------------------------------------------------*/
//!Doc du lieu userArr tu localStorage
const userArr_temp = JSON.parse(localStorage.getItem('userArr_ls'));
let userArr = [];
//! Neu chua ton tai data thi tao va luu xuong localStorage
if (userArr_temp == undefined) {
  createUserData();
} else {
  userArr = userArr_temp.map((user) => parseUser(user));
}

//!Doc du lieu currentUser tu localStorage
let currentUser = JSON.parse(localStorage.getItem('currentUserArr_ls'));
//*------------------------------------------------*/
// Ghi loi chao welcome khi login thanh cong
if (currentUser !== null) {
  //hidden 2 nut login & register
  row.classList.add('hidden');
  //display welcome, va hidden (login or register)
  labelWelcome.innerText = `Welcome ${currentUser?.lastName} ${currentUser?.firstName}`;
  labelLoginRegister.classList.add('hidden');
}

//*------------------------------------------------*/
//! su kien nut Logout
if (currentUser !== null) {
  btn_logout.addEventListener('click', function () {
    //Set innerText welcome = rong
    labelWelcome.innerText = '';
    //display 2 nut login & register
    row.classList.remove('hidden');
    //delete currentUser
    localStorage.removeItem('currentUserArr_ls');
    currentUser = '';
    //chuyen giao dien sang trang login
    window.location.href = './pages/login.html';
    window.location.reload();
  });
}
