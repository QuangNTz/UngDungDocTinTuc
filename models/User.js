'use strict';

class User {
  constructor(firstName, lastName, userName, passWord) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.passWord = passWord;
  }
}

class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}

//*------------------------------------------------*/
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.userName,
    userData.passWord
  );

  return user;
}

//*------------------------------------------------*/
function parseTask(taskData) {
  const task = new Task(taskData.task, taskData.owner, taskData.isDone);

  return task;
}

//*------------------------------------------------*/
function createUserData() {
  class User {
    constructor(firstName, lastName, userName, passWord) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.userName = userName;
      this.passWord = passWord;
    }
  }
  const userArr = [];
  userArr[0] = new User('Mot', 'Anh', 'am', '1111');
  userArr[1] = new User('Hai', 'Anh', 'ah', '2222');
  userArr[2] = new User('Ba', 'Anh', 'ab', '3333');

  localStorage.setItem('userArr_ls', JSON.stringify(userArr));
}

//*------------------------------------------------*/
function createTodoList() {
  class Task {
    constructor(task, owner, isDone) {
      this.task = task;
      this.owner = owner;
      this.isDone = isDone;
    }
  }
  const todoArr = [];
  todoArr[0] = new Task('Meet George', 'am', false);
  todoArr[1] = new Task('Organize office', 'ah', true);
  todoArr[2] = new Task('Buy eggs', 'am', true);
  todoArr[3] = new Task('Pay bills', 'ah', false);
  todoArr[4] = new Task('Buy eggs', 'ab', false);
  todoArr[5] = new Task('Read a book', 'am', false);
  todoArr[6] = new Task('Read a book', 'ab', true);
  todoArr[7] = new Task('Hit the gym', 'ab', true);
  todoArr[8] = new Task('Pay bills', 'am', false);
  todoArr[9] = new Task('Organize office', 'ah', false);
  todoArr[10] = new Task('Read a book', 'ah', false);
  todoArr[11] = new Task('Pay bills', 'ab', false);

  localStorage.setItem('todoArr_ls', JSON.stringify(todoArr));
}
