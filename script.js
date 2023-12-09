const myLibrary = [];

// constructor for the book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



// book constructor
function addBookToLibrary(new_book) {
    myLibrary.push(new_book)
}

// function that displays books as cards on the DOM
// (we can change this function to display one book at a time instead of iterate through all)
function displayBooks(array) {
    array.forEach(function (book) {
        const div = document.createElement('div');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');

        p1.textContent = book.title;
        p2.textContent = book.author;
        p3.textContent = book.pages;
        p4.textContent = book.read;

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)

        div.setAttribute('class', 'book-card')
        // div.textContent = `<p>${book.title}</p> <p>${book.author}</p> <p>${book.pages}</p> <p>${book.read}</p>`;

        const main = document.querySelector('.main')
        main.appendChild(div)

    })
}

//MODAL POPUP BOX (to ask user for book input);
// 1) create button and close button
const button = document.querySelector('.button');
const close_button = document.querySelector('.close-button');
const submit_modal = document.querySelector('.modal-submit')
// close_button.setAttribute('class', 'close_button');


const dialog = document.querySelector('dialog');

dialog.setAttribute('class', 'dialog-box');


// listener to listen for opening the modal
button.addEventListener('click', () => {
    dialog.showModal()
})

// listener for clicking the 'close' button
close_button.addEventListener('click', () => {
    dialog.close();
})

//listener for submitting info we've typed into the Modal's form
submit_modal.addEventListener('click', () => {
    // Decide what to do when we submit the modal
})

//listener for the form submission. Prevent default behavior and get submission info
const myForm = document.getElementById('form');

myForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    // console.log(title)
    // console.log(author)
    // console.log(pages)
    // console.log(read)
    addBookToLibrary(new Book(title, author, pages, read));

    // FIX THIS LINE NEXT
    // every time we submit the form, we're adding the entire library to the display
    // ... we should only add the last entry to the display
    displayBooks(myLibrary[myLibrary.length - 1]);
    dialog.close();
})







// just testing
// testing1 = new Book('book1', 'author1', 23, true);
// testing2 = new Book('book2', 'author2', 23, true);
// testing3 = new Book('book3', 'author3', 23, true);
// testing4 = new Book('book4', 'author4', 23, true);
// addBookToLibrary(testing1);
// addBookToLibrary(testing2)
// addBookToLibrary(testing3)
// addBookToLibrary(testing4)

displayBooks(myLibrary)
// console.log(testing)