//array for holding all the books
let myLibrary = [];

//book cobject
function Book(title, author, pages, isread=false) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
}

//add a book
function addBookToLibrary(book) 
{
    myLibrary.push(book)
}

//remove a book
function removeBookfromLibrary(book)
{
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == book.title) {
            myLibrary.splice(i)
        }
    }
}

//add a book button
const addbtn = document.querySelector('#add-book')
addbtn.addEventListener('click', () =>
{
    console.log("test")
});