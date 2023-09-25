let tasks = document.querySelector(".tasks");
let add = document.querySelector(".add");
let toDoList = document.querySelector(".toDoList");

add.onclick = function(){
  if(tasks.value.trim() === ''){
    alert('Введите значение')
  } else {
  let task = tasks.value;
  let newTask = document.createElement("div");
  newTask.classList.add("task");

  let taskText = document.createElement("li");
  taskText.classList.add("task-text");
  taskText.innerHTML = task;
  taskText.ondblclick = () => {
    taskText.style.textDecoration = "line-through" 
  }

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Из листа";
  deleteButton.classList.add("delBut");
  deleteButton.onclick = () => {
    toDoList.removeChild(newTask);
  };

  newTask.appendChild(taskText);
  newTask.appendChild(deleteButton);
  toDoList.appendChild(newTask);
}


    // toDoList.innerHTML += tasks.value + '<br>'
    tasks.value = '';
  }
