
function createModal(msg) {
    const modal = document.createElement("div");
    
    modal.innerHTML = `
        <div class="msg-box">
        <p class="msg">${msg}</p>
        <button id="modalNewGame" class="btn dark-blue white-clr">Nuevo juego</button>
        <button id="modalAddWord" class="btn dark-border dark-blue-clr">Agregar palabra</button>
        </div>
    `
    
    modal.setAttribute("class", "modal invisible");
    modal.style.transition = "transition: opacity .2s, visibility .2s";
    
    return modal;
}

function closeModal(modal, btn) {
    modal.classList.add("invisible");
    
    btn.removeEventListener("click", closeModal);
    setTimeout(() => {
        modal.remove()
    }, 250);
}

function showModal(msg) {
    const modal = createModal(msg);
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.classList.remove("invisible");
    }, 200);
    
    
    const btnModalNewGame = document.querySelector("#modalNewGame");
    const btnModalAddWord = document.querySelector("#modalAddWord");

    btnModalNewGame.addEventListener("click", () => {
        closeModal(modal, btnModalNewGame);
        startGame();
    });

    btnModalAddWord.addEventListener("click", () => {
        closeModal(modal, btnModalNewGame);
        showAddWordSection();
    });
}