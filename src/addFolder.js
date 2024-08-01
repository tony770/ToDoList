const sidebar = document.querySelector('.sidebar');
const homeBtn = document.querySelector('.home');
const folderBtn = document.querySelector('.folderBtn');
let lastBtn = homeBtn;
const projectModal = document.querySelector('.projectModal');
const projectNameInput = document.getElementById('projectName');

const addFolder = () => {
    const projectName = projectNameInput.value;
    const newClassName = projectName.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    if(projectName) {
        const newBtn = document.createElement('button');
        newBtn.classList.add('projectBtn', newClassName);
        newBtn.textContent = projectName;
        newBtn.id = `project${sidebar.children.length + 1}`;
        storeButton(newBtn);
        lastBtn.parentNode.insertBefore(newBtn, folderBtn);
        lastBtn = newBtn;
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


export { addFolder, loadButtons };