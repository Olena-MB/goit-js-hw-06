const inputText = document.querySelector('#validation-input');
console.log(inputText);

const dataLengthElement = Number(inputText.dataset.length);
console.log(dataLengthElement);

inputText.addEventListener("blur", onInputBlur);

function onInputBlur () {
    let value = inputText.value.length;
    if (value !== dataLengthElement) {
        inputText.classList.add("invalid")
        inputText.classList.remove("valid")
        return;
    }
inputText.classList.add("valid");
inputText.classList.remove("invalid")
};