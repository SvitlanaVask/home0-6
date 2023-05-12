let counterValue = 0;

const valueRef = document.querySelector('#value');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

decrementRef.addEventListener('click', decrementFn);
incrementRef.addEventListener('click', incrementFn);

function decrementFn () {
  counterValue -= 1;
  return valueRef.textContent = counterValue;
};

function incrementFn () {
  counterValue += 1;
  return valueRef.textContent = counterValue;
}