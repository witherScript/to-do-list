function Task(description) {
  this.description = description;
};

function ToDo() {
  this.tasks = {}; //[]
  this.currentId = 0;
};

ToDo.prototype.assignId = function () {
  this.currentId += 1; //currentIndex
  return this.currentId;
};

ToDo.prototype.addItem = function (task) {
  task.id = this.assignId(); // this -> this.tasks -> look for task objects initialzied in ToDo
  this.tasks[task.id] = task;
  return this.currentId;
};

ToDo.prototype.completeItem = function (id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};

ToDo.prototype.displayList = function () {

  const listDivTitle = document.createElement('h2');
  listDivTitle.innerText = "To-Do List:\n";

  const listDiv = document.createElement('div');
  listDiv.prepend(listDivTitle);

  const list = document.createElement('ol');
  let listElement;
  for (const taskObject in this.tasks) {
    listElement = document.createElement('li');
    listElement.append(`${this.tasks[taskObject].description}`);
    list.append(listElement);
  }
  listDiv.appendChild(list);
  document.body.append(listDiv);
}