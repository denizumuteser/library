let myLibrary = [];

function Book(title, author, pages, isread=false) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
}

function addBookToLibrary(book) 
{
    myLibrary.push(book)
}

function removeBookfromLibrary(book)
{
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == book.title) {
            myLibrary.splice(i)
        }
    }
}

