const myLibrary = [];

// constructor for the book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function that toggles book's 'read' status on your Book prototype instance
Book.prototype.toggleRead = function () {
    if (this.read === true) {
        this.read = false;
    } else {
        this.read = true;
    }
}



// construct books and add them to the library array
function addBookToLibrary(new_book) {
    myLibrary.push(new_book)
}

// function that displays books as cards on the DOM
// (we can change this function to display one book at a time instead of iterate through all)
function displayBooks(array) {
    const main = document.querySelector('.main')

    // this segment of code loops through and removes all book cards from 
    // the display
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
    let i = 0;
    array.forEach(function (book) {
        const div = document.createElement('div');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('button');

        p4.setAttribute('class', 'toggle-read')

        const del_button = document.createElement('button');
        del_button.setAttribute('class', 'delete-button')
        del_button.setAttribute('id', `delete-${i}`);

        p1.textContent = book.title;
        p2.textContent = book.author;
        p3.textContent = book.pages;
        p4.textContent = book.read;

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)
        div.appendChild(del_button);

        div.setAttribute('class', 'book-card')

        div.setAttribute('id', `delete-${i}`)
        i += 1;
        // div.textContent = `<p>${book.title}</p> <p>${book.author}</p> <p>${book.pages}</p> <p>${book.read}</p>`;


        main.appendChild(div)

    })

}

//MODAL POPUP BOX (to ask user for book input);
// 1) create button and close button
const button = document.querySelector('.button');
const close_button = document.querySelector('.close-button');
const submit_modal = document.querySelector('.modal-submit')

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



// EVENT LISTENER TO USED TO DELETE A CARD
// 1) listen for clicks,
// 2) When click happens, check if delete button (card) exists
// 3) if card exists, delete card and also delete corresponding entry from myLibrary
document.addEventListener('click', function (event) {
    const clickedElementClass = event.target.classList

    if (event.target.classList.contains('delete-button')) {
        delete_card(event)
    }

    if (event.target.classList.contains('toggle-read')) {
        console.log('Toggle clicked')
        ///WE STOPPED HERE LASST TIME

    }
})

function delete_card(event) {
    let remove_id = event.target.id;

    const element_remove = document.querySelector(`#${remove_id}`)
    element_remove.remove()

    let lastIndex = remove_id.length - 1;
    let lastCharacter = remove_id[lastIndex];
    myLibrary.splice(Number(lastCharacter), 1)

}

//listener for the form submission. Prevent default behavior and get submission info
const myForm = document.getElementById('form');

myForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const checkbox = document.getElementById('read')
    const read = checkbox.checked;
    // const read = document.getElementById('read');

    addBookToLibrary(new Book(title, author, pages, read));

    displayBooks(myLibrary);
    dialog.close();
})


