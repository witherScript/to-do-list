
Describe: Task
Test: should hold a string describing what the task is
Code:
```javascript
const task = new Task('Take the dogs out');
console.log(task);
```
Expected output:
{
  description: 'Take the dogs out'
}

AddItem
Test: should create new instance of task and assign it an ID
code: 
const task = new Task('Take the dogs out');
const toDoList = new ToDo();
toDoList.addItem(task);
Expected output: 1

Completed Item


Describe: ToDo 
// 1. Accessors: how do we know whats in our tasks list
// 2. Mutators: how do we change that -> addTask, completeTask
Test: It holds the task in the



