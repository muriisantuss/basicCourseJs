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

    timeMessageTransition()
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
  const removeAllTasks = document.getElementById("removeAllTasks")

  taskList.innerHTML = ''

  for (let i = 0; i < tasks.length; i++) {
    let newTask = document.createElement("li")
    newTask.textContent = tasks[i]
    removeAllTasks.classList.remove('ocult')

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

  if (tasks.length == 0) {
    removeAllTasks.classList.add('ocult')
    console.log(tasks)
  }
  timeMessageTransition()
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
  messageRemoveTask()
}

function clean(i) {
  tasks.length = 0;
  renderTasks()
  messageRemoveAllTasks()
}

function messageRemoveAllTasks() {
  message.classList.remove("messageError", "messageSuccess");
  message.classList.add('messageError')
  message.textContent = "Removed all tasks!"
}

function messageRemoveTask() {
  message.classList.remove("messageError", "messageSuccess");
  message.classList.add('messageError')
  message.textContent = "Removed task!"
}

let timeoutId;
function timeMessageTransition() {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    message.textContent = ""
  }, 3000)
}

let canClick = true
document.addEventListener("keypress", function (e) {
  if (e.key == 'Enter' && canClick) {
    canClick = false
    addTask()
    console.log("Click!")

    setTimeout(() => {
      canClick = true
      console.log("1 Second!")
    }, 1000)
  }
})