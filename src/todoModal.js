function newInput() {
    const todoItems = document.querySelector('.todoItems');
    const newInputElement = document.createElement('input');
    newInputElement.type = 'text';
    newInputElement.classList.add('todoInput');
    todoItems.appendChild(newInputElement);

    newInputElement.focus();
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

function getTodoItems() {
    const todoInputs = document.querySelectorAll('.todoInput');
    const todos = [];

    todoInputs.forEach(input => {
        if(input.value.trim() !== '')
        {
            todos.push(input.value.trim());
        }
    })

    console.log('todo items: ', todos);
    return todos;
}

export { addTodoInput, getTodoItems };


