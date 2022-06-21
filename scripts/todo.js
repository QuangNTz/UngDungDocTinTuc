'use strict';

//! De co data cua todo tren man hinh thi Mentor co the thuc hien dang nhap voi 4 tk co san
// username : am , password : 1111
// username : ah , password : 2222
// username : ab , password : 3333

const todo_container = document.getElementById('todo-container');
const input_task = document.getElementById('input-task');
const todo_list = document.getElementById('todo-list');
const btn_add = document.getElementById('btn-add');
const close = document.querySelector('close');

//*------------------------------------------------*/
//!Doc du lieu userArr tu localStorage
const todoArr_temp = JSON.parse(localStorage.getItem('todoArr_ls'));
let todoArr = [];
let todoArr_user = [];
//! Neu chua ton tai data thi tao va luu xuong localStorage tu User.js
if (todoArr_temp == undefined) {
  createTodoList();
} else {
  todoArr = todoArr_temp.map((todo) => parseTask(todo));
}

let currentUser = JSON.parse(localStorage.getItem('currentUserArr_ls'));

//*------------------------------------------------*/
//render du lieu todoArr
const renderTODOLIST = function (arr) {
  todo_list.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const type = arr[i].isDone ? 'class="checked"' : '';

    const row = `    
            <li ${type} id="${arr[i].taskId}">
              ${arr[i].task}<span class="close" id="${arr[i].taskId}">×</span>
            </li>
            `;
    todo_list.insertAdjacentHTML('beforeend', row);
  }
};

//*------------------------------------------------*/
// Tao du lieu taskId de sau nay co the edit, delete todo list tren giao dien cua currentUser
todoArr.forEach((user, i) => {
  user.taskId = i;
});
// Tao mang chua todo data cua currentUser
if (currentUser !== null) {
  todoArr_user = todoArr.filter((user) => user.owner === currentUser.userName);
}

//*------------------------------------------------*/
// render giao dien todo
renderTODOLIST(todoArr_user);

//*------------------------------------------------*/
//! xoa du lieu task trong todoListArr va refresh bang du lieu
function deleteTask(taskNum) {
  if (confirm(`Delete task : ${todoArr[taskNum].task}. Are you sure?`)) {
    todoArr.splice(taskNum, 1);
  }
  // refresh giao dien va luu xuong localStorage
  window.location.reload();
  renderTODOLIST(todoArr_user);
  saveTodoDataToStorage();
}

//*------------------------------------------------*/
todo_list.addEventListener('click', function (e) {
  // console.log(e.target);
  // console.log(e.currentTarget);

  if (e.target.outerHTML.includes('li', 'span')) {
    // change trang thai isDone
    todoArr[e.target.id].isDone = !todoArr[e.target.id].isDone;
    renderTODOLIST(todoArr_user);
    saveTodoDataToStorage();
  } else {
    // delete task
    deleteTask(e.target.id);
  }
});

//*------------------------------------------------*/
//! su kien nut add todo
btn_add.addEventListener('click', function () {
  // lay data tu man hinh
  const task_new = new Task(input_task.value, currentUser.userName, false);
  // add vao mang data todolist
  todoArr.push(task_new);
  // refresh giao dien va luu xuong localStorage
  saveTodoDataToStorage();
  window.location.reload();
  renderTODOLIST(todoArr_user);
});
