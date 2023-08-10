const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoListContainer = document.getElementById('todoList');
const MAX_ITEMS = 10;
let todoList = [];
addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task === '') {
        alert('Please enter a valid task!');
        return;
    }

    if (todoList.length >= MAX_ITEMS) {
        alert('You have reached the maximum number of items!');
        return;
    }

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const todoItem = { name: task, time: time };
    todoList.push(todoItem);
    renderTodoList();
    todoInput.value = '';
});

function deleteTodoItem(index) {
    todoList.splice(index, 1);
    renderTodoList();
}
function renderTodoList() {
    todoListContainer.innerHTML = '';

    todoList.forEach((todoItem, index) => {
        const todoItemElement = document.createElement('div');
        todoItemElement.classList.add('todo-item');
        todoItemElement.innerHTML = `
            <span>${todoItem.name}</span>
            <span>${todoItem.time}</span>
            <span class="delete-icon" onclick="deleteTodoItem(${index})">&#10006;</span>
        `;
        todoListContainer.appendChild(todoItemElement);
    });
}

renderTodoList();