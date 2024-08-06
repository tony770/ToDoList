function newInput() {
    const todoItems = document.querySelector('.todoItems');
    const newInputElement = document.createElement('input');
    newInputElement.type = 'text';
    newInputElement.classList.add('todoInput');
    todoItems.appendChild(newInputElement);
};

function addTodoInput() {
    const currInput = document.querySelector('.todoInput:last-of-type');
    if(currInput && currInput.value.trim() !== '')
    {
        newInput();
    }
    else if (currInput)
    {
        alert('Please enter a todo before adding a new one.');
    }
    else {
        newInput();
    }
};

export { addTodoInput };