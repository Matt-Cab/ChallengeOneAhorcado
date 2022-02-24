// ************************** BUTTONS *****************************
const btnStartGame = document.querySelector("#startGame");
const btnStartNewGame = document.querySelector("#newGame");
const btnAddWord = document.querySelector("#addWord");
const btnSaveAndStart = document.querySelector("#saveAndStart");
const btnCancel = document.querySelector("#cancel");
const btnGiveUp = document.querySelector("#giveUp");

// ************************** SECTIONS *****************************
const startSection = document.querySelector("#startSection");
const addWordSection = document.querySelector("#addWordSection");
const gameSection = document.querySelector("#gameSection");

// // ************************** INPUTS *****************************
// const inputNewWord = document.querySelector("#newWordInput");

// ************************** FUNCTIONS *****************************

function showStartSection() {
    document.title = "Inicio"
    gameSection.classList.add("invisible");
    addWordSection.classList.add("invisible");
    startSection.classList.remove("invisible");
}

function showAddWordSection() {
    document.title = "Agregar palabra";
    startSection.classList.add("invisible");
    gameSection.classList.add("invisible");
    addWordSection.classList.remove("invisible");
}

function showGameSection() {
    document.title = "Jugando...";
    startSection.classList.add("invisible");
    addWordSection.classList.add("invisible");
    gameSection.classList.remove("invisible");
}

// ************************** EVENT HANDLERS *****************************

btnStartGame.addEventListener("click", () => {
    showGameSection();
    startGame();
});

btnStartNewGame.addEventListener("click", () => {
    endGame();
    startGame();
});

btnAddWord.addEventListener("click", () => {
    showAddWordSection();
});

btnSaveAndStart.addEventListener("click", () => {
    if (addWordToList(wordsList)) {
        showGameSection();
        startGame();
        inputNewWord.value = "";
    }
});

btnCancel.addEventListener("click", () => {
    showStartSection();
    inputNewWord.value = "";
});

btnGiveUp.addEventListener("click", () => {
    endGame();
    showStartSection();
});