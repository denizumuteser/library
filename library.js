//book cobject
function Book(title, author, page, isread=false) 
{
    this.title = title;
    this.author = author;
    this.page = page;
    this.isread = isread;
}

//get from local storage
function getFromStorage(name)
{
    return JSON.parse(localStorage.getItem(name));
}

//remove from storage
function removeFromStorage(storage,obj)
{
    let temp = getFromStorage(storage)
    for (let i = 0; i < temp.length; i++) {
        if (temp[i]["title"] == obj.childNodes[0].textContent) {
            temp.splice(i,1);
            localStorage.removeItem(storage);
            addToStorage(storage, temp)
        }
    }
}

//add to storage
function addToStorage(name, myobj)
{
    localStorage.setItem(name, JSON.stringify(myobj))
}

//remove a book
function removeBookfromLibrary(library, book)
{
    for (let i = 0; i < library.length; i++) {
        if (library[i].title == book.title) {
            library.splice(i)
        }
    }
    return library;
}

//add books at local storage to container
function populateLibrary()
{
    let temp = getFromStorage("stored_books")
    let container = document.getElementById("book-container")
    for (let i = 0; i < temp.length; i++) {
        
        const div = document.createElement('div');
        div.setAttribute('class', 'book')
        const title = document.createElement('h1');
        title.setAttribute('class', 'book-title')
        title.textContent = temp[i]['title']
        div.appendChild(title);

        const author = document.createElement('h2');
        author.setAttribute('class', 'book-author')
        author.textContent = temp[i]['author']
        div.appendChild(author);

        const page = document.createElement('h2');
        page.setAttribute('class', 'book-page')
        page.textContent = temp[i]['page']
        div.appendChild(page);

        const div2 = document.createElement('div');
        div2.setAttribute('class', 'buttons')
        div.appendChild(div2);

        const btn = document.createElement('button');
        btn.setAttribute('id', 'isread-button')
        if (temp[i]['isread']) {
            btn.textContent = "read";
        }
        else
        {
            btn.textContent = "not read";
        }
        btn.addEventListener('click', () =>
        {
            console.log(btn.textContent)
            if (btn.textContent == "read")
            {
                btn.textContent = "not read"
            }
            else
            {
                btn.textContent = "read"
            }
        })
        div.childNodes[3].appendChild(btn);

        const btn2 = document.createElement('button');
        btn2.setAttribute('id', 'remove-book')
        btn2.textContent = "Remove"
        btn2.addEventListener('click', () =>
        {
            let to_remove = btn2.parentElement.parentElement
            removeFromStorage("stored_books",to_remove);
            refreshLibrary();
        });
        div.childNodes[3].appendChild(btn2);

        container.appendChild(div)
    }
}

populateLibrary()

//clear library
function clearLibrary()
{
    let container = document.getElementById("book-container")
    while(container.firstChild)
    {
        container.removeChild(container.lastChild);
    }   
}

//refresh library
function refreshLibrary()
{
    clearLibrary()
    populateLibrary()
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

//add book button
let addform = document.getElementById('add-book-form');
addform.onsubmit = () => {
    let ftitle = document.getElementById('ftitle').value;
    let fauthor = document.getElementById('fauthor').value;
    let fpage = document.getElementById('fpage').value;
    let fisread = document.getElementById('fisread').checked;

    let new_book = new Book(ftitle, fauthor, fpage, fisread)
    
    let temp = getFromStorage("stored_books")
    temp.push(new_book)
    localStorage.clear();
    addToStorage("stored_books" ,temp)

    refreshLibrary()
    return false;
};

//if nothing in storage create an empty array
if (!(getFromStorage("stored_books")))
{
    addToStorage("stored_books", [])
}

//DEBUG
//console.log(localStorage)
//localStorage.clear()