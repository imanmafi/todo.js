var Task = function(description, complete) {
  this.description = description;
  this.complete = complete;
};

Task.prototype = new Task();

var toDoList = [];
var completed = [];

function addTask(description, array) {
  var task = new Task(description, false);
  array.push(task);
  return task;
}

function completeTask(id) {
  var task = toDoList[id];
  toDoList.splice(id, 1);
  task.complete = true;
  completed.push(task)
  listTasks()
  return task;
}

function listTasks() {
  $("ul#tasks").empty();
  $("ul#completed").empty();

  for (var i = 0; i < toDoList.length; i += 1) {
    var task = toDoList[i];
    $("ul#tasks").append("<li class='list-group-item'><input type='checkbox' onclick='completeTask(" + i + ")'> " + task.description + "</li>");
  }

  for (var i = 0; i < completed.length; i += 1) {
    var task = completed[i];
    $("ul#completed").append("<li class='list-group-item'>" + task.description + "</li>");
  }
}

$("form#task-form").submit(function(event) {
  var description = $("input#description").val();
  addTask(description, toDoList);

  listTasks();

  $("input#description").val("");

  event.preventDefault();
});
