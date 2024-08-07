import { getTodoItems } from "./todoModal";

const mainContainer = document.querySelector('.mainContainer');
const addListBtn = document.querySelector('.addListBtn');
const todoListName = document.getElementById('todoName');

function addTodoList(folderID) {
    const listName = todoListName.value;
    const todoCard = createTodoCard(listName);
    const todoItemsArray = getTodoItems();
}

function createTodoCard(listName) {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todoCard');

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