function addTask() {
  // get task on html
  const taskHere = document.getElementById("taskHere");
  let task = taskHere.value.trim()

  const taskList = document.getElementById("list");
  let newTask = document.createElement("li")

  const message = document.getElementById("message")
  message.classList.remove("messageError", "messageSuccess");

  if (task == "") {
    let messageError = "Task is empty!"
    message.classList.add('messageError')
    message.textContent = messageError
  } else {
    let messageSuccess = "Task added with successfully!"
    message.classList.add('messageSuccess')
    message.textContent = messageSuccess

    newTask.textContent = task
    taskList.appendChild(newTask)
  }
  // clean input
  taskHere.value = ""
}

