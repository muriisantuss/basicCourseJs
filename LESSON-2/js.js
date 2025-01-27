function addTask() {
  let message = "Task is empty!";

  // get task on html
  let taskHere = document.getElementById("taskHere");
  let task = taskHere.value

  let taskList = document.getElementById("list");
  let newTask = document.createElement("li")

  if (!taskHere.value == "") {
    newTask.textContent = task
    taskList.appendChild(newTask)
    message = "Task added with successfully!"
    document.getElementById("message").textContent = message;
    // clean input
    taskHere.value = ""
  }
  
  document.getElementById("message").textContent = message;
}