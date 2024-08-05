import './style.css';
import { addFolder, loadButtons, deleteFolder } from './addFolder.js';
import { hideModal, showModal } from './modal.js';
import { addTodo } from './addTodo.js'

const homeBtn = document.getElementById('home');
const folderBtn = document.querySelector('.folderBtn');
const projectModal = document.querySelector('.projectModal');
const submitBtn = document.getElementById('submitName');
const close = document.getElementsByClassName('close');
const todoModal = document.querySelector('.todoModal');
const addListBtn = document.querySelector('.addListBtn');
const createTodoBtn = document.getElementById('createTodo');
const projectBtn = document.querySelectorAll('.projectBtn');

folderBtn.addEventListener('click', () => {
    showModal(projectModal);
})

submitBtn.addEventListener('click', () => {
    addFolder();
})

addListBtn.addEventListener('click', () => {
    showModal(todoModal);
})

createTodoBtn.addEventListener('click', () => {
    addTodo();
})


for(let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        const modal = close[i].closest('.modal');
        hideModal(modal);
    };
}

window.onclick = function(event) {
    if (event.target == projectModal) {
        hideModal(projectModal);
    }
    else if (event.target == todoModal) {
        hideModal(todoModal);
    }
}



function initializeEventListeners() {
    document.querySelectorAll('.deleteFolder').forEach(button => {
        button.addEventListener('click', () => {
            const FolderID = event.target.classList[0];
            deleteFolder(FolderID);
        });
    });

    projectBtn.forEach(btn => {
        projectBtn.forEach(button => button.classList.remove('active'));

        btn.classList.add('active')
    })
}



document.addEventListener('DOMContentLoaded', () => {
    loadButtons();
    initializeEventListeners();
})