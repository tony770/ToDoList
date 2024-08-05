const sidebar = document.querySelector('.sidebar');
const homeBtn = document.getElementById('home');
const folderBtn = document.querySelector('.folderBtn');
let lastBtn = homeBtn;
const projectModal = document.querySelector('.projectModal');
const projectNameInput = document.getElementById('projectName');

const addFolder = () => {
    const projectName = projectNameInput.value;
    const newClassName = projectName.split(' ').map(word => word.charAt(0).toUpperCase()).join('') + Date.now();
    if(projectName) {
        const folderDiv = document.createElement('div');
        folderDiv.classList.add('folderBtnContainer');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add(newClassName, 'deleteFolder');
        deleteBtn.textContent = 'X';
        folderDiv.appendChild(deleteBtn);
    
        const newBtn = document.createElement('button');
        newBtn.classList.add('projectBtn');
        newBtn.id = newClassName;
        newBtn.textContent = projectName;
        folderDiv.appendChild(newBtn);

        storeButton(newBtn);
        
        lastBtn.parentNode.insertBefore(folderDiv, folderBtn);
        lastBtn = folderDiv;
        projectModal.style.display = 'none';
    }
} 

function storeButton(button) {
    const buttons = JSON.parse(localStorage.getItem('buttons')) || [];
    buttons.push({
        id: button.id,
        projectName: button.textContent,
    })
    localStorage.setItem('buttons', JSON.stringify(buttons));
}

function loadButtons() {
    const buttons = JSON.parse(localStorage.getItem('buttons')) || [];
    buttons.forEach(buttonData => {
        const folderDiv = document.createElement('div');
        folderDiv.classList.add('folderBtnContainer');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add(buttonData.id, 'deleteFolder');
        deleteBtn.textContent = 'X';
        folderDiv.appendChild(deleteBtn);

        const storedButton = document.createElement('button');
        storedButton.classList.add('projectBtn')
        storedButton.id = buttonData.id;
        storedButton.textContent = buttonData.projectName;
        folderDiv.appendChild(storedButton);

        lastBtn.parentNode.insertBefore(folderDiv, folderBtn);
        lastBtn = folderDiv;
    })
}

function deleteFolder(folderID) {
    let buttons = JSON.parse(localStorage.getItem('buttons')) || [];
    buttons = buttons.filter(button => button.id !== folderID);
    localStorage.setItem('buttons', JSON.stringify(buttons));

    const folderDiv = document.getElementById(folderID)?.parentElement;
    if(folderDiv) {
        folderDiv.remove();
    }
}

export { addFolder, loadButtons, deleteFolder };