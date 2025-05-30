let mainBookList = [];

function addBookToTable(book) {
    const newLine = document.createElement('tr');
    const tableBookCode = document.createElement('td');
    const tableBookTitle = document.createElement('td');
    const tableBookSubtitle = document.createElement('td');
    const tableBookAuthor = document.createElement('td');
    const tableBookPublisher = document.createElement('td');
    const tableBookSynopsis = document.createElement('td');
    const tableBookYear = document.createElement('td');
    const tableBookPages = document.createElement('td');
    const tableBookSubjects = document.createElement('td');
    const tableBookCover = document.createElement('td');

    tableBookCode.innerHTML = book.code;
    tableBookTitle.innerHTML = book.title;
    tableBookSubtitle.innerHTML = book.subtitle;
    tableBookAuthor.innerHTML = book.author;
    tableBookPublisher.innerHTML = book.publisher;
    tableBookSynopsis.innerHTML = book.synopsis;
    tableBookYear.innerHTML = book.year;
    tableBookPages.innerHTML = book.pages;
    tableBookSubjects.innerHTML = book.subjects;
    tableBookCover.innerHTML = book.cover;

    newLine.appendChild(tableBookCode);
    newLine.appendChild(tableBookTitle);
    newLine.appendChild(tableBookSubtitle);
    newLine.appendChild(tableBookAuthor);
    newLine.appendChild(tableBookPublisher);
    newLine.appendChild(tableBookSynopsis);
    newLine.appendChild(tableBookYear);
    newLine.appendChild(tableBookPages);
    newLine.appendChild(tableBookSubjects);
    newLine.appendChild(tableBookCover);

    const bookListTable = document.getElementById("book_table");

    bookListTable.appendChild(newLine);
}

function saveBook() {
    const inputBookCode = document.getElementById("book_code");
    const inputBookTitle = document.getElementById("book_title").innerHTML;
    const inputBookSubtitle = document.getElementById("book_subtitle").innerHTML;
    const inputBookAuthor = document.getElementById("book_author").innerHTML;
    const inputBookPublisher = document.getElementById("book_publisher").innerHTML;
    const inputBookSynopsis = document.getElementById("book_synopsis").innerHTML;
    const inputBookYear = document.getElementById("book_year").innerHTML;
    const inputBookPages = document.getElementById("book_pages").innerHTML;
    const inputBookSubjects = document.getElementById("book_subjects").innerHTML;
    const inputBookCover = document.getElementById("book_cover").innerHTML;

    const newBook = {
        code: inputBookCode.value,
        title: inputBookTitle,
        subtitle: inputBookSubtitle,
        author: inputBookAuthor,
        publisher: inputBookPublisher,
        synopsis: inputBookSynopsis,
        year: inputBookYear,
        pages: inputBookPages,
        subjects: inputBookSubjects,
        cover: inputBookCover,
    };

    console.log(newBook);
    addBookToTable(newBook);

    mainBookList.push(newBook);
}

//Faz a busca da API de Livros
function searchBook() {
    const inputBookCode = document.getElementById("book_code");
    const bookCodeValue = inputBookCode.value;

    fetch("https://brasilapi.com.br/api/isbn/v1/" + bookCodeValue)
        .then((resposta) => {
            return resposta.json();
        })
        .then((json) => {
            const inputBookTitle = document.getElementById("book_title");
            inputBookTitle.innerText = json.title;
            const inputBookSubtitle = document.getElementById("book_subtitle");
            inputBookSubtitle.innerText = json.subtitle;
            const inputBookAuthor = document.getElementById("book_author");
            inputBookAuthor.innerText = json.authors;
            const inputBookPublisher = document.getElementById("book_publisher");
            inputBookPublisher.innerText = json.publisher;
            const inputBookSynopsis = document.getElementById("book_synopsis");
            inputBookSynopsis.innerText = json.synopsis;
            const inputBookYear = document.getElementById("book_year");
            inputBookYear.innerText = json.year;
            const inputBookPages = document.getElementById("book_pages");
            inputBookPages.innerText = json.page_count;
            const inputBookSubjects = document.getElementById("book_subjects");
            inputBookSubjects.innerText = json.subjects;
            const inputBookCover = document.getElementById("book_cover");
            inputBookCover.innerText = json.cover_url;
        });

}

//Inicializa os eventos quando a página for carregada
function setupEventListeners() {
    const inputBookCode = document.getElementById("book_code");
    inputBookCode.addEventListener("focusout", searchBook);
    const saveButton = document.getElementById("save_button");
    saveButton.addEventListener("click", saveBook);
}

window.addEventListener("load", setupEventListeners);