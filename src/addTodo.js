import { getTodoItems } from "./todoModal";

const mainContainer = document.querySelector('.mainContainer');
const addListBtn = document.querySelector('.addListBtn');
const todoListName = document.getElementById('todoName');

function addTodoList(folderID) {
    const listName = todoListName.value.trim();
    const todoCard = createTodoCard(listName, folderID);
    const todoItemsArray = getTodoItems();
    const cardIdentifier = todoCard.classList[1];
    
    for(let i = 0; i < todoItemsArray.length; i++)
    {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add(cardIdentifier);

        const itemCheckbox = document.createElement('input');
        itemCheckbox.type = 'checkbox';
        itemCheckbox.id = 'todo' + (i + 1);

        const itemLabel = document.createElement('label');
        itemLabel.setAttribute('for', itemCheckbox.id);
        itemLabel.textContent = todoItemsArray[i];

        itemDiv.appendChild(itemCheckbox);
        itemDiv.appendChild(itemLabel);

        storeItems(itemDiv);
        todoCard.querySelector('.listItems').appendChild(itemDiv);
    }
    
    mainContainer.insertBefore(todoCard, addListBtn);
}

function createTodoCard(listName, folderID) {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todoCard', Date.now());
    todoCard.id = folderID;

    const listTitle = document.createElement('h2');
    listTitle.classList.add('cardTitle');
    listTitle.textContent = listName;
    todoCard.appendChild(listTitle);

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('listItems');
    todoCard.appendChild(inputDiv);

    storeTodoCard(todoCard);
    return todoCard;
}

function storeTodoCard(card) {
    const cardID = card.id.toString();
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push({
        id: cardID,
        cardIdentifier: card.classList[1],
        cardName: card.querySelector('.cardTitle').textContent,
    })
    localStorage.setItem('cards', JSON.stringify(cards));
}

function storeItems(item) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({
        itemIdentifier: item.className,
        itemContent: item.getElementsByTagName('label')[0].textContent,
    })
    localStorage.setItem('items', JSON.stringify(items));
}

export { addTodoList };

/*      
    loadItems and loadCard next
    maybe can do this in one function or 2
*/