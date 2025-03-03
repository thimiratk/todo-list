function addTodo() {
    let input = document.getElementById('todoInput');
    let todoText = input.value.trim();

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    let todoList = document.getElementById('todoList');
    let newTodo = document.createElement('li');
    newTodo.innerHTML = `${todoText} <button class="delete" onclick="deleteTodo(this)">Delete</button>`;

    todoList.appendChild(newTodo);
    input.value = ""; // Clear the input field
}

function deleteTodo(button) {
    button.parentElement.remove();
}
