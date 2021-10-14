//array for holding all the books
let myLibrary = [];

//book cobject
function Book(title, author, page, isread=false) 
{
    this.title = title;
    this.author = author;
    this.page = page;
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
    openForm()
});
//form cancel button
const cancelbtn = document.querySelector('.cancel-button')
cancelbtn.addEventListener('click', () =>
{
    closeForm()
});

//add book button
let addform = document.getElementById('add-book-form');
addform.onsubmit = () => {
    //let ftitle = document.getElementById('ftitle').value;
    //let fauthor = document.getElementById('fauthor').value;
    //let fpage = document.getElementById('fpage').value;
    //let isread = document.getElementById('fisread').value;

    //let new_book = new Book(ftitle, fauthor, fpage, isread)
    //console.log(new_book)

    //let temp = getFromStorage("stored_classes")
    //temp.push(new_class)
    //removeFromStorage("stored_classes")
    //addToStorage("stored_classes" ,temp)
    console.log(ftitle = document.getElementById('ftitle'))
    return false;
};


//open addbook form
function openForm()
{
    document.getElementById("form-popup").style.display = "block";
}

//close addbook form
function closeForm()
{
    document.getElementById("form-popup").style.display = "none";
}

openForm()