import './style.css';

const sidebar = document.querySelector('.sidebar');
const homeBtn = document.querySelector('.home');
const folderBtn = document.querySelector('.folderBtn');
let lastBtn = homeBtn;
const projectModal = document.querySelector('.projectModal');
const submitBtn = document.getElementById('submitName');
const close = document.getElementsByClassName('close')[0];
const projectNameInput = document.getElementById('projectName');

folderBtn.addEventListener('click', () => {
    projectModal.style.display = 'flex';
})

close.onclick = function() {
    projectModal.style.display = 'none';
}

submitBtn.addEventListener('click', () => {
    const projectName = projectNameInput.value;
    if(projectName) {
        const newBtn = document.createElement('button');
        newBtn.classList.add('projectBtn', projectName);
        newBtn.textContent = projectName;
        newBtn.id = `project${sidebar.children.length + 1}`;
        storeButton(newBtn);
        lastBtn.parentNode.insertBefore(newBtn, folderBtn);
        lastBtn = newBtn;
        projectModal.style.display = 'none';
    }
})

window.onclick = function(event) {
    if (event.target == projectModal) {
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
        const storedButton = document.createElement('button');
        storedButton.classList.add('projectBtn', buttonData.projectName)
        storedButton.id = buttonData.id;
        storedButton.textContent = buttonData.projectName;
        lastBtn.parentNode.insertBefore(storedButton, folderBtn);
        lastBtn = storedButton;
    })
}

document.addEventListener('DOMContentLoaded', () => {
    loadButtons();
})