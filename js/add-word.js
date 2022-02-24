const inputNewWord = document.querySelector("#newWordInput");
const textInfo = document.querySelector(".info-text");


function validateText(text) {
    let textIsValid = true;
    
    if (text.length < 3) {
        textInfo.innerText = "Min. 3 letras"
        textIsValid = false;
    }
    else if (!isValidWord(text)) {
        textInfo.innerText = "Sólo caractéres alfabéticos"
        textIsValid = false;
    }
    else if (wordsList.includes(text)) {
        textInfo.innerText = "La palabra ya está en la lista"
        textIsValid = false;
    }
    else if (text.length > 8) {
        textInfo.innerText = "Máx. de 8 letras"
        textIsValid = false;
    }
    else {
        textInfo.innerText = "Máx. de 8 letras"
    }
    
    if (!textIsValid) {
        inputNewWord.focus();
    }

    return textIsValid;
}

function addWordToList(wordsList) {
    const newWord = inputNewWord.value.trim().toUpperCase();
    
    if (validateText(newWord)) {
        wordsList.push(newWord);
        inputNewWord.value = "";
        return true;
    }

    return false;
}

inputNewWord.addEventListener("keyup", () => {
    validateText(inputNewWord.value.trim().toUpperCase());
});
