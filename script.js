//Bookshelf

//arr to hold books
let myLibrary = [];

class Book{
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = false;
    }
    read() {
        this.hasRead = true;
    }
}

//add initial book to shelf
const addHobbit = function() {
    const hobbit = new Book("The Hobbit", "J.R. Tolkien", 304);
    myLibrary.push(hobbit);
    showBooks();
}
addHobbit();

//add book to an array
function addBookToLibrary(){
    let data = validate();
 
    if (data === false){
        return 0;
    }
    
    const newBook = new Book(data.title,data.author,data.pages);
    checkRead(data.read);

    myLibrary.push(newBook);

    function checkRead(isBookRead) {
        if (isBookRead === true) {
            
            newBook.read();
        }
    }
    off();
    showBooks();
    
}

//update DOM with all books in myLibrary array
function showBooks(){
    let output = document.querySelector(".output");
    output.innerHTML = "";

    myLibrary.forEach(function (e,i) {
        let readOutput = "Unread";
        let readOutputInverse = "Read"
        if (e.hasRead === true){
            readOutput = "Read";
            readOutputInverse = "Unread";
        }
        
        //this is book object displayed on the "shelf"
        output.innerHTML =  
            `<div >   
                <div class = "title">${e.title}</div>
                <div class = "author">${e.author}</div>
                <div>${e.pages} pages</div>
                <div>${readOutput}</div>
                <div class = "options">
                    <button 
                        id = "readCheckbox" 
                        data-item = "${i}" 
                        onclick = "readBook(this.dataset.item)"
                    > 
                        ${readOutputInverse} 
                    </button>
                    <button 
                        onclick = "removeBook(${i})" 
                        class = "remove"
                    >
                        Delete
                    </button>
                </div>
            </div>` + output.innerHTML;
        }
    );    
}

//remove a specific book from the stack
function removeBook(id){
    myLibrary.splice(id,1);
    showBooks();
}

// js validation for the different input elements
function validate(){
    //these vars can be condensed to one line
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    
    let values = [title, author, pages ,read];
    let data = values;
    
    return {'title':data[0], 'author':data[1], 'pages':data[2], 'read':data[3]};
}

// create overlay
function on(e){
    document.querySelector(".overlay").style.display = "flex";
}

// remove overlay
function off(e){
    document.querySelector(".overlay").style.display = "none";
}

function readBook(e){
    //get the myLibrary item based on this index and toggle the .read
    myLibrary[e].hasRead = !myLibrary[e].hasRead;
    showBooks();
}

let addBook = document.querySelector(".addBook");
addBook.addEventListener("click",on);

