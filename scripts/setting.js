'use strict';

const input_category = document.getElementById('input-category');
const input_page_size = document.getElementById('input-page-size');

const btn_submit = document.getElementById('btn-submit');

//!Doc du lieu userArr tu localStorage
let npp = localStorage.getItem('npp_ls');
let category = localStorage.getItem('category_ls');

//! Neu chua ton tai data thi tao va luu xuong localStorage
if (npp == undefined || category == undefined) {
  npp = 5;
  category = 'General';

  localStorage.setItem('npp_ls', JSON.stringify(npp));
  localStorage.setItem('category_ls', JSON.stringify(category));
}

input_page_size.value = npp;
// category = category.replace(/^"(.*)"$/, '$1');
category = category.slice(1, -1);
input_category.value = category;

//*------------------------------------------------*/
//! su kien nut Setting
btn_submit.addEventListener('click', function () {
  // Lay du lieu tu man hinh
  npp = Number(input_page_size.value);
  category = input_category.value;
  // Luu xuong localStorage
  localStorage.setItem('npp_ls', JSON.stringify(npp));
  localStorage.setItem('category_ls', JSON.stringify(input_category.value));
});
