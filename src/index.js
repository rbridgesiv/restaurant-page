import { loadPageContent } from './page-content.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import './styles.css';

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
    clearContent();
    loadPageContent();
});

menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenu();
});

contactBtn.addEventListener('click', () => {
    clearContent();
    loadContact();
});

console.log("Hello Hello");
loadPageContent();
