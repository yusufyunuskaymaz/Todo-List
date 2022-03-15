// Eventler

const header = document.querySelector(".card-header");

const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText)

function changeText(mesela){
    header.textContent = mesela.target.value
}