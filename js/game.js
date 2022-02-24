const wordsList = ["ALMEJA", "AZULEJO", "COLONIA", "DEMENTE", "ESPUMA", "NARANJA", "HUMANO", "IDIOMA", "CAMION", "CALLE", "JIRAFA", "HORMIGA", "OXIDADO", "PULSERA", "SILENCIO"];
const hiddenInput = document.querySelector("#hiddenInput");
let chosenWord = "";
let placeholder = [];
let underscores = [];
let wrongChars = [];
let tries = 0;

function selectRandomWord(wordsList) {
    if (wordsList && wordsList.length > 0) {
        const randomIndex = Math.floor(Math.random() * wordsList.length);
    
        return wordsList[randomIndex];
    }
    return "";
}

function isValidWord(word) {
    // checkea si la palabra sólo contiene caracteres alfabeticos
    return /^[A-Za-z]{3,8}$/.test(word);
}

function isValidChar(char) {
    // checkea si el caracter es alfabetico
    return /^[A-Z]{1}$/.test(char);
}

function initializePlaceholder() {
    if (placeholder.length !== 0) placeholder = [];
    if (underscores.length !== 0) underscores = [];

    for (let i = 0; i < chosenWord.length; i++) {
        placeholder.push(" ");
        underscores.push("_");
    }
}

function updatePlaceHolder(char) {
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === char) {
            placeholder[i] = char;
        }
    }
    renderPlaceHolder();
}

function renderPlaceHolder() {
    cursor.clearRect(0, 0, letters.width, letters.height / 2);
    writeText(placeholder.join(" "), letters.width / 2, letters.height / 2, 40);
}

function showWrongChars() {
    cursor.clearRect(0, (letters.height / 2) + 10, letters.width, letters.height);
    writeText(wrongChars.join(" "), letters.width / 2, (letters.height / 2) + 35, 20);
}

function guessWord(currentChar) {
    if (currentChar === "Ñ" || isValidChar(currentChar)) {
        if (chosenWord.indexOf(currentChar) !== -1) {
            updatePlaceHolder(currentChar);
            return true;
        }
        else if (wrongChars.includes(currentChar)) {
            return true;
        }
        drawNextPart(tries++);
        wrongChars.push(currentChar);
        showWrongChars();
    }
    return false;
}

function verifyKeyPressed(e) {
    let currentKey;
    
    if (window.innerWidth > 600) {
        currentKey = e.key.toUpperCase();
        console.log(currentKey);
    }
    else {
        currentKey = e.data.toUpperCase();
        console.log(e.data);
        hiddenInput.value = "";
    }
    if (currentKey === "Ñ" || isValidChar(currentKey)) {
        guessWord(currentKey);
        if (tries > 7) {
            showModal("PERDISTE");
            endGame();
        }
        else if (placeholder.join("") === chosenWord) {
            showModal("GANASTE");
            endGame();
        }
    }
}

function startGame() {
    chosenWord = selectRandomWord(wordsList);

    initializePlaceholder();
    writeText(placeholder.join(" "), letters.width / 2, letters.height / 2, 40);
    
    if (window.innerWidth >= 600) {
        document.body.addEventListener("keyup", verifyKeyPressed);
    }
    else {
        hiddenInput.addEventListener("input", verifyKeyPressed);
    }

    writeText(underscores.join(" "), letters.width / 2, letters.height / 2, 40);
    hiddenInput.focus();
}

function endGame() {
    if (tries >= 7 ) document.title = "PERDISTE";
    else if (placeholder.join("") === chosenWord) document.title = "GANASTE";
    chosenWord = "";
    placeholder = [];
    underscores = [];
    wrongChars = [];
    tries = 0;
    cleanGameCanvas();
    document.body.removeEventListener("keyup", verifyKeyPressed);
    hiddenInput.removeEventListener("input", verifyKeyPressed);
}
