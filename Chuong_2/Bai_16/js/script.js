const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoCounter = document.getElementById('todo-counter');

function updateCounter() {
    const allItems = todoList.querySelectorAll('.todo-item');
    const completedItems = todoList.querySelectorAll('.todo-item.completed');
    const activeCount = allItems.length - completedItems.length;
    todoCounter.innerText = `Còn ${activeCount} việc chưa hoàn thành`;
}

function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.className = 'todo-item';

    li.innerHTML = `
        <div class="todo-left" onclick="toggleTodo(this)">
            <div class="checkbox"></div>
            <span class="todo-text">${text}</span>
        </div>
        <button class="delete-btn" onclick="deleteTodo(this)">Xoá</button>
    `;

    todoList.appendChild(li);
    todoInput.value = '';
    updateCounter();
}

todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function toggleTodo(element) {
    const item = element.parentElement;
    item.classList.toggle('completed');
    updateCounter();
}

function deleteTodo(element) {
    const item = element.parentElement;
    item.remove();
    updateCounter();
}

updateCounter();
