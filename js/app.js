function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
    label.className = 'title';
    label.innerText = title;

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.innerText = 'Изменить';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'Удалить';

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkbox); 
    listItem.appendChild(label); 
    listItem.appendChild(editInput);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    bindEvents(listItem);

    return listItem;
}

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const editBtn = todoItem.querySelector('button.edit');
    const deleteBtn = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change', toggleEvetn);
    editBtn.addEventListener('click', editTodoItem);
    deleteBtn.addEventListener('click', deleteTodoItem);
}

function addTodoItem(e) {
    e.preventDefault();

    if (!addInput.value) return alert('Необходимо ввести название задачи');

    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem);

// const deleteBtns = document.querySelectorAll('.delete');

// function deleteItem() {
//     deleteBtns.forEach(el => el.parentNode.parentNode.removeChild(listItem))
// }

// deleteBtns.addEventListener('click', deleteItem)

