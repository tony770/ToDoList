import './style.css';
import { addFolder, loadButtons, deleteFolder } from './addFolder.js';
import { hideModal, showModal } from './modal.js';

const homeBtn = document.querySelector('.home');
const folderBtn = document.querySelector('.folderBtn');
const projectModal = document.querySelector('.projectModal');
const submitBtn = document.getElementById('submitName');
const close = document.getElementsByClassName('close');
const todoModal = document.querySelector('.todoModal');
const addListBtn = document.querySelector('.addListBtn');
const createTodoBtn = document.querySelector('.createTodo');

folderBtn.addEventListener('click', () => {
    showModal(projectModal);
})

for(let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        const modal = close[i].closest('.modal');
        hideModal(modal);
    };
}

submitBtn.addEventListener('click', () => {
    addFolder();
})

window.onclick = function(event) {
    if (event.target == projectModal) {
        hideModal(projectModal);
    }
    else if (event.target == todoModal) {
        hideModal(todoModal);
    }
}

addListBtn.addEventListener('click', () => {
    showModal(todoModal);
})



function initializeEventListeners() {
    document.querySelectorAll('.deleteFolder').forEach(button => {
        button.addEventListener('click', () => {
            const FolderID = event.target.classList[0];
            deleteFolder(FolderID);
        });
    });
}



document.addEventListener('DOMContentLoaded', () => {
    loadButtons();
    initializeEventListeners();
})