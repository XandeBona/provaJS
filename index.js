function saveBook() {
    console.log("botao ok");
    const bookCodeInput = document.getElementById("book_code");
    const bookTitleInput = document.getElementById("book_title");

    const newBook = {
        code: bookCodeInput.value,
        title: bookTitleInput.value,
    }
}

function searchBook() {
    console.log("funcionando")
}

function setupEventListeners(){
    const inputBookCode = document.getElementById("book_code");
    inputBookCode.addEventListener("focusout", searchBook);
    const saveButton = document.getElementById("save_button");
    saveButton.addEventListener("click", saveBook);
}

window.addEventListener("load", setupEventListeners);