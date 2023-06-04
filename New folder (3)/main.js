// Get the required elements from the DOM
const todoList = document.getElementById("todo-list");
const addTodoForm = document.getElementById("add-todo-form");
const todoInput = document.getElementById("todo-input");
const deleteAllButton = document.getElementById("delete-all-button");

// Array to store the todos
let todos = [];

// Function to render the todo list
function renderTodoList() {
    todoList.innerHTML = ""; // Clear the existing list

    // Loop through the todos and create the list items dynamically
    todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        if (todo.completed) {
            todoItem.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked =