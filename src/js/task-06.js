const textInput = document.querySelector("#validation-input");

function verification(event) {
    const inputDataLength = Number(textInput.dataset.length);
    const inputValueLength = Number(textInput.ariaValueMax.trim().length);

    if (inputValueLength === inputDataLength) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
}

textInput.addEventListener("blur", verification);