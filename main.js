let tasks = document.querySelector(".tasks")
let add = document.querySelector(".add")
let toDoList = document.querySelector(".toDoList")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let firstTask = document.createElement("div")
  firstTask.classList.add("first-task")
  firstTask.innerHTML = 'Здесь появится твое первое дело'
  toDoList.appendChild(firstTask)

let lightButton = document.querySelector(".light")
let theme = localStorage.getItem("theme")
  if (theme == "light-theme") {
    document.body.classList.add("light-theme")
  } else {document.body.classList.add("body")
  }

lightButton.onclick = function () {
  document.body.classList.toggle("light-theme")
  lightButton.innerHTML === 'Dark' ? lightButton.innerHTML = 'Light' : lightButton.innerHTML = 'Dark' 
    if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light-theme")
    lightButton.innerHTML === 'Dark'
    } else { 
    localStorage.removeItem("theme")
    lightButton.innerHTML = 'Light'
    }
}
  
add.onclick = function () {
  if (tasks.value.trim() === '') {
    alert("Напиши дело, потом тапай!");
  } else {
    let newTask = document.createElement("div")
      newTask.classList.add("task")   
    let taskText = document.createElement("span")
      taskText.classList.add("task-text")
      taskText.innerHTML = tasks.value
        taskText.onclick = function () {
          taskText.setAttribute('contentEditable', 'true')
        }
       
    let deleteButton = document.createElement("button")
      deleteButton.innerHTML = "Удалить"
      deleteButton.classList.add("delBut")
        taskText.ondblclick = () => {                  
          taskText.classList.toggle("textDecor")
          red.innerHTML = document.querySelectorAll(".textDecor").length
        }

      deleteButton.onclick = () => {
        toDoList.removeChild(newTask)
        red.innerHTML = document.querySelectorAll(".textDecor").length
        green.innerHTML = document.querySelectorAll(".task").length
          if(document.querySelectorAll(".task").length == 0) {
            toDoList.appendChild(firstTask)
          }
      }

    newTask.appendChild(taskText)
    newTask.appendChild(deleteButton)
    toDoList.appendChild(newTask)
     
    green.innerHTML = document.querySelectorAll(".task").length
    tasks.value = ''
    toDoList.replaceChild(newTask, firstTask)
  }
}
