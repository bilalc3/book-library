let myLibrary = [
    {
        id: 0, 
        title: 'Bob the Builder',
        author: 'Ssdfj SJFKld',
        pages: 123,
        haveRead: 'read'

    },
    {
        id: 1, 
        title: 'Bob 2 Builder',
        author: 'Ssdfj SJFKld',
        pages: 123,
        haveRead: 'read'

    },
    {
        id: 2, 
        title: 'Bob the Builder',
        author: 'Ssdfj SJFKld',
        pages: 123,
        haveRead: 'read'

    },

];


function Book(id, title, author, pages, haveRead) {
    this.id = id; 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${haveRead}`
    }
}


// constants grab 
const grid = document.getElementById('book-grid')
const addToLibrary = () => {

}

function createCard(book) {
        //setting basic card for grid
        const card = document.createElement('div');
        card.classList.add('book-card');

        // created the html components
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');
        const btn = document.createElement('button');

        title.classList.add('book-title');
        const len = myLibrary.length;

        btn.innerText = `Remove ${book.id}`
        btn.classList.add(`book-remove`) 
        btn.setAttribute("id",`a${book.id}`);
        card.setAttribute("id",`data-${book.id}`);



        grid.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(btn); 

        title.innerText = `${book.title}`
        author.innerText = `${book.author}`
        pages.innerText = `${book.pages}`
        read.innerText = `${book.haveRead}`
        
}





// submissions process  
const addBook = document.getElementById('addBook');
const form = document.getElementById('form');
const modal = document.getElementById('modal')
const submit = document.getElementById('add-btn') 



// event listeners 

addBook.addEventListener('click', (e) => {
    modal.classList.add('show-modal');
})


form.addEventListener('submit', (e) => {
    console.log('object');
    modal.classList.remove("show-modal");
    e.preventDefault()

    const bookTitle = document.getElementById('title')
    const bookAuthor = document.getElementById('author')
    const bookPages = document.getElementById('pages')
    const bookRead = document.getElementById('read')
    const len = myLibrary.length; 

    const newAdd = new Book(len, bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
    myLibrary.push(newAdd);
    createCard(newAdd); 

})



// create all items
myLibrary.forEach((book) => {
    createCard(book); 
})




















/* 
function displayCards() {
    myLibrary.forEach((book) => {
        //setting basic card for grid
        const card = document.createElement('div');
        console.log(card);
        card.classList.add('book-card');

        // created the html components
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');

        title.classList.add('book-title');

        grid.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        title.innerText = `${book.title}`
        author.innerText = `${book.author}`
        pages.innerText = `${book.pages}`
        read.innerText = `${book.haveRead}`
    })
}
 */


const clicked = window.addEventListener('click', (e) => {
    if (e.path[0].classList[0] != 'book-remove') {
        return; 
    }
    // console.log(e.path[0].id[1]);
    const card = document.getElementById(`data-${e.path[0].id[1]}`)
    card.parentElement.removeChild(card)
})