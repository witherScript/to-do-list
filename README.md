
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
Test: The task should be removed from the to do list and return true to indicate it has been deleted.
Code: 
```javascript
const task = new Task("let the dogs out");
const myList =  new ToDo();
const taskObjId = myList.addItem(task);
console.log(myList.completeItem(taskObjId));
```
Output: true

Display
Test: should display all the tasks. -> console.log
Code: 
```javascript
const task2 = new Task("let the cats out");
const mySecondList =  new ToDo();
mySecondList.addItem(task2);
mySecondList.displayList();
```
Output: 
  For all tasks in mySecondList....
  `${task.id} ${task.description}`

  Task 1: "Take the dogs out"
  Task 2: "Take the trash out"




