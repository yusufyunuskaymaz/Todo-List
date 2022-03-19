const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos")

eventListener();

function eventListener(){ //Tüm eventlistenerler
 form.addEventListener("submit", addTodo)
}

function addTodo(e){

    const newTodo = todoInput.value.trim();

    addTodoToUI(newTodo)


    e.preventDefault()
}

function addTodoToUI(newTodo){

    const listItem = document.createElement("li");

    const link = document.createElement("a");

    link.href= "#"
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link)

    todoList.appendChild(listItem)


}

