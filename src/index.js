import './style.css';
import { addFolder, loadButtons } from './addFolder.js';

const homeBtn = document.querySelector('.home');
const folderBtn = document.querySelector('.folderBtn');
const projectModal = document.querySelector('.projectModal');
const submitBtn = document.getElementById('submitName');
const close = document.getElementsByClassName('close')[0];

folderBtn.addEventListener('click', () => {
    projectModal.style.display = 'flex';
})

close.onclick = function() {
    projectModal.style.display = 'none';
}

submitBtn.addEventListener('click', () => {
    addFolder();
})

window.onclick = function(event) {
    if (event.target == projectModal) {
        projectModal.style.display = 'none';
    }
}



document.addEventListener('DOMContentLoaded', () => {
    loadButtons();
})