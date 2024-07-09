/* eslint-disable no-alert */
import checkLuhn from './luhnValidator';
import initializeImages from './images';
import getCardSystem from './cardSystemValidator';

initializeImages();
let timeoutId;

document.querySelector('.validate-button').addEventListener('click', (event) => {
  event.preventDefault();
  const cardNumberInput = document.getElementById('card-number');
  const cardNumber = cardNumberInput.value;
  const result = checkLuhn(cardNumber);
  if (result) {
    const cardSystem = getCardSystem(cardNumber);
    alert(`The card system is: ${cardSystem}`);
  } else {
    alert('Card System is unknown(');
  }
});

document.getElementById('card-number').addEventListener('input', (event) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    const cardNumber = event.target.value;
    const cardSystem = getCardSystem(cardNumber);
    document.querySelectorAll('.image-container img').forEach((img) => {
      img.classList.remove('active');
    });
    if (cardSystem !== 'Unknown') {
      const activeImage = document.querySelector(`.image-container img.${cardSystem.toLocaleLowerCase()}`);
      if (activeImage) {
        activeImage.classList.add('active');
      }
    }
  }, 500);
});
