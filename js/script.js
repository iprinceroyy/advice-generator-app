'use strict';

console.log('started.....');
const adviceId = document.querySelector('.advice--id');
const adviceText = document.querySelector('.advice--text');

const getAdviceAndDisplay = async() => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();

        const { id, advice } = data.slip;
        adviceId.textContent = id;
        adviceText.textContent = advice;
    } catch (err) {
        adviceId.textContent = err;
        adviceText.textContent = err;
    }
};

getAdviceAndDisplay();