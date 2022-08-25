'use strict';

console.log('started.....');
const cardContainer = document.querySelector('.advice__card');
const adviceId = document.querySelector('.id--num');
const adviceText = document.querySelector('.advice--text');
const diceBtn = document.querySelector('.btn--dice');

const getAdviceAndDisplay = async() => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');

        const data = await res.json();

        const { id, advice } = data.slip;
        adviceId.textContent = `#${id}`;
        adviceText.textContent = advice;
    } catch (err) {
        console.log(err.message);
        adviceId.textContent = err.type;
        adviceText.textContent = err.message;
        throw err;
    }
};
window.addEventListener('load', () => {
    setTimeout(() => {
        cardContainer.classList.add('show');
        cardContainer.nextElementSibling.style.display = 'none';
    }, 2000);
});

diceBtn.addEventListener('click', getAdviceAndDisplay);
window.addEventListener('keydown', e => {
    console.log(e.key);
    e.key === 'Enter' && getAdviceAndDisplay();
});

getAdviceAndDisplay();