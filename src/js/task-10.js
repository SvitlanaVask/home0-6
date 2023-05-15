function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

boxesRef.style.display = 'flex';
boxesRef.style.flexWrap = 'wrap';
boxesRef.style.gap = '10px';

createBtn.addEventListener('click', () => {
  if (inputRef.value > 0 && inputRef.value < 101) {
    destroyBoxes();
    createBoxes(parseInt(inputRef.value));
  } else {
    return alert('Введіть число від 1 до 100')
  }
});

function createBoxes(amount) {
  let boxesArr = [];
  const step = 10;

  for (let i = 0; i < amount; i += 1) {
    boxesArr[i] = `<div style="width: ${30 + i * step}px; height: ${30 + i * step}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  
  boxesArr = boxesArr.join('');
  boxesRef.insertAdjacentHTML('afterbegin', boxesArr);
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesRef.innerHTML = '';
}







