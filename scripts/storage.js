'use strict';
//*------------------------------------------------*/
function saveUserDataToStorage() {
  localStorage.setItem('userArr_ls', JSON.stringify(userArr));
}

//*------------------------------------------------*/
function saveCurrentUserDataToStorage() {
  localStorage.setItem('currentUserArr_ls', JSON.stringify(currentUser));
}

//*------------------------------------------------*/
function getUserDataFromStorage() {
  userArr = JSON.parse(localStorage.getItem('userArr_ls'));
}

//*------------------------------------------------*/
function saveTodoDataToStorage() {
  localStorage.setItem('todoArr_ls', JSON.stringify(todoArr));
}
