const bodyRef = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorPlaceHolder = document.querySelector('.color')

changeColorBtn.addEventListener('click', onBgColorChange);

function onBgColorChange() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorPlaceHolder.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

