import { getTodoItems } from "./todoModal";

const mainContainer = document.querySelector('.mainContainer');
const addListBtn = document.querySelector('.addListBtn');
const todoListName = document.getElementById('todoName');

function addTodoList(folderID) {
    const listName = todoListName.value.trim();
    const todoCard = createTodoCard(listName, folderID);
    const todoItemsArray = getTodoItems();
    
    for(let i = 0; i < todoItemsArray.length; i++)
    {
        const itemDiv = document.createElement('div');

        const itemCheckbox = document.createElement('input');
        itemCheckbox.type = 'checkbox';
        itemCheckbox.id = 'todo' + (i + 1);

        const itemLabel = document.createElement('label');
        itemLabel.setAttribute('for', itemCheckbox.id);
        itemLabel.textContent = todoItemsArray[i];

        itemDiv.appendChild(itemCheckbox);
        itemDiv.appendChild(itemLabel);

        todoCard.querySelector('.listItems').appendChild(itemDiv);
    }
    mainContainer.insertBefore(todoCard, addListBtn);
}

function createTodoCard(listName, folderID) {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todoCard');
    todoCard.id = folderID;

    const listTitle = document.createElement('h2');
    listTitle.textContent = listName;
    todoCard.appendChild(listTitle);

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('listItems');
    todoCard.appendChild(inputDiv);

    return todoCard;
}

export { addTodoList };

/*  createTodo clicked -> addTodoList
    addTodoList -> createTodoCard
    then gets todoInputs from getTodoItems, returns array
    use for loop to display todoInputs 
    append list by -> mainContainer.insertBefore(newList, addListBtn)
*/