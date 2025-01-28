let tasks = []
const message = document.getElementById("message")


function addTask() {
  const taskHere = document.getElementById("taskHere");
  let task = taskHere.value.trim()

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

    let editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.classList.add('edit')
    editButton.onclick = () => editTask(i)


    let removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    removeButton.classList.add('remove')
    removeButton.onclick = () => removeTask(i)

    newTask.appendChild(editButton)
    newTask.appendChild(removeButton)

    taskList.appendChild(newTask)
  }
}

function editTask(i) {
  let taskEdited = prompt("Edit Task: ")

  if (taskEdited.trim() !== "") {
    tasks[i] = taskEdited;
  }
  renderTasks()
}

function removeTask(i) {
  tasks.splice(i, 1)
  renderTasks()
}

function clean(i) {
  tasks.length = 0;
  renderTasks()
  message.classList.remove("messageError", "messageSuccess");
  message.classList.add('messageError')
  message.textContent = "Removed all tasks!"
}


