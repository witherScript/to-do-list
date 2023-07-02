function Task(description) {
  this.description = description;
};

function ToDo() {
  this.tasks = {};
  this.currentId = 0;
};

ToDo.prototype.assignId = function () {
  this.currentId += 1;
  console.log(this.currentId);
  return this.currentId;
};

ToDo.prototype.addItem = function (task) {
  task.id = this.assignId(); // this -> this.tasks -> look for task objects initialzied in ToDo
  this.tasks[task.id] = task;
  return this.currentId;
};

ToDo.prototype.completeItem = function (task) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};

ToDo.prototype.displayList = function () {
  this.tasks.forEach(function (keyValue) {
    console.log(keyValue);
  });
};