let tasks = document.querySelector(".tasks");
let add = document.querySelector(".add");
let toDoList = document.querySelector(".toDoList");

// имена классов нужно писать через дефис to-do-list
// эта нотация называется kebab-kase, как шашлык (kebab) на шампуре
// есть еще нотация camelCase, которая как раз используется в js
// и нотация PascalCase

// когда работаешь с dom и элементами, на которые нужно навесить события, лучше использовать идентификаторы
// идентификаторы как раз используются в нотации camelCase
// <input id="taskInput" />
// тогда в скрипте можно сразу писать taskList
// taskInput = window.taskInput = document.getElementById("taskInput")
// или можно сразу написать input.onclick = function () {...}
// только идентификаторы должны быть уникальны на всей странице


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

    // примитивы в js  - это простые значения (числа, строки, null, undefined)
    // все остальные сложные объекты (массивы, объекты и т.д.) хранятся в памяти по ссылке
    // это сделано для экономии памяти
    // это значит, что если у тебя есть объект x = { id: 1 }
    // и ты этот объект присвоишь второй переменной y = x
    // то при смене значения y.id = 2 в первой переменной x.id тоже будет = 2
    // потому что доступ к ним происходит по ссылке
    // подробнее здесь https://learn.javascript.ru/object-copy

    //  тоже самое и для массивов. У них есть методы, которые создают новый массив
    // не сохраняя ссылку на исходный, а есть методы, которые меняют исходный массив.
    // Array.from создаёт новый массив, который потом никак не связан с  document.querySelectorAll(".task")
    // Поэтому при изменении document.querySelectorAll(".task") не меняется массив x
    // и ничего не работает
    // подробнее про Array.from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    let x = Array.from(document.querySelectorAll(".task"));
    green.value = x.length + 1;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Из листа";
    deleteButton.classList.add("delBut");
    deleteButton.onclick = () => {
      toDoList.removeChild(newTask);
      // в данном случае, можно сразу взять длинну от document.querySelectorAll(".task")
      // document.querySelectorAll возвращает массивоподобный перечень элементов (коллекцию)
      // это значит, что у него нет стандартных методов массивов, но длинна есть
      green.value = document.querySelectorAll(".task").length;
    };

    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    toDoList.appendChild(newTask);
  }
  tasks.value = "";
};
