let tasks = document.querySelector(".tasks");
let add = document.querySelector(".add");
let toDoList = document.querySelector(".toDoList");

add.onclick = function () {
  if (tasks.value.trim() === "") {
    alert("Введите значение");
  } else {
    let task = tasks.value;
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    let taskText = document.createElement("input");
    taskText.classList.add("task-text");
    taskText.value = task;
    // taskText.innerHTML = task;
    taskText.ondblclick = () => {
      taskText.classList.toggle("textDecor");
    };

    let green = document.querySelector(".green");
    let x = Array.from(document.querySelectorAll(".task"));
    green.value = x.length + 1;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Из листа";
    deleteButton.classList.add("delBut");
    deleteButton.onclick = () => {
      toDoList.removeChild(newTask);
      green.value = x.length;
    };

    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    toDoList.appendChild(newTask);
  }
  tasks.value = "";
};
