const fontSizeControlRef = document.querySelector('#font-size-control');
const textContentRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', onfontSizeControl)

function onfontSizeControl(event) { 
  textContentRef.style.fontSize = `${event.currentTarget.value}px`
}