const inputRange = document.querySelector('#font-size-control');
console.log(inputRange);

const textTask7 = document.querySelector('#text');
console.log(textTask7);

inputRange.addEventListener('input', onInputRange);

function onInputRange (event) {
const inputElement = event.target.value;

textTask7.style.fontSize = `${inputElement}%`
};