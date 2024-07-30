import './style.css';

const homeBtn = document.querySelector('.home');
const folderBtn = document.querySelector('.folderBtn');
let lastBtn = homeBtn;

folderBtn.addEventListener('click', () => {
    const newBtn = document.createElement('button');
    newBtn.classList.add('projectBtn');
    newBtn.textContent = 'new';
    lastBtn.parentNode.insertBefore(newBtn, folderBtn);
    lastBtn = newBtn;
})