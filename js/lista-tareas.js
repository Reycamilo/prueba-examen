console.log('Lista de Tareas');

const taskInput = document.getElementById("taskInput")
const agregar = document.querySelector("button#add")
const lista = document.getElementById("taskList")

agregar>addEventListener("click",() => {
    if(taskInput.value.trim() != "") {
        // guardamos el valor en una variable
        let nuevaTarea = document.createElement("li")
        nuevaTarea.innerText = taskInput.value;
        
        lista.appendChild(nuevaTarea)
        taskInput.value = ""
    }    
})