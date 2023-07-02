function Task(description) {
  this.description = description;
};

function ToDo() {
  this.tasks = {};
  this.currentId = 0;
};

ToDo.prototype.assignId = function () {
  this.currentId += 1;
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

  for (const taskObject in this.tasks) {
    console.log(`ID: ${this.tasks[taskObject].id} `);
    console.log(`Description: ${this.tasks[taskObject].description}`);
  }

  //write into an ordered list stored inside a div
};