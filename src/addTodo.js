import { getTodoItems } from "./todoModal";

const cardContainer = document.querySelector('.cardContainer');
const todoListName = document.getElementById('todoName');

function addTodoList(folderID) {
    const listName = todoListName.value.trim();
    const todoCard = createTodoCard(listName, folderID);
    storeTodoCard(todoCard);
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
    
    cardContainer.appendChild(todoCard);
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

function loadCards(folderID) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.forEach(card => {
        if(card.id === folderID)
        {
            const todoCard = createTodoCard(card.cardName, card.id);
            loadItems(todoCard, card.cardIdentifier);
            cardContainer.appendChild(todoCard);
        }
    });
}

function loadItems(todoCard, cardIdentifier) {
    let itemCount = 1;
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const matchedItems = items.filter(item => item.itemIdentifier === cardIdentifier);
    matchedItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add(item.itemIdentifier);

        const itemCheckbox = document.createElement('input');
        itemCheckbox.type = 'checkbox';
        itemCheckbox.id = 'todo' + itemCount;
        itemCount++;

        const itemLabel = document.createElement('label');
        itemLabel.setAttribute('for', itemCheckbox.id);
        itemLabel.textContent = item.itemContent;

        itemDiv.appendChild(itemCheckbox);
        itemDiv.appendChild(itemLabel);

        todoCard.querySelector('.listItems').appendChild(itemDiv);
    })
}

export { addTodoList, loadCards };

/*      
    add delete list function
*/