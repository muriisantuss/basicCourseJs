let tasks = []

function addTask() {
  const taskHere = document.getElementById("taskHere");
  let task = taskHere.value.trim()

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

    tasks.push(task)

    renderTasks()
  }
  // clean input
  taskHere.value = ""
}

function renderTasks() {
  const taskList = document.getElementById("list");
  taskList.innerHTML = ''
  for (let i = 0; i < tasks.length; i++) {
    let newTask = document.createElement("li")
    newTask.textContent = tasks[i]
    taskList.appendChild(newTask)
  }
}


