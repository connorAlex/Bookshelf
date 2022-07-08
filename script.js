let myLibrary = [];

function Book(title, author, pages){
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = false;
  
    //methods
    function read(){
        this.hasRead = true;
    }
}

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
        if (isBookRead === "Yes") {
            newBook.hasRead = true;
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

                <div>
                    <button id = "readCheckbox" data-item = "${i}" onclick = "readBook(this.dataset.item)"> ${readOutputInverse} </button>
                    <button 
                            onclick = "removeBook(${i})" 
                            class = "remove">
                                X
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
// recreating the <form> functionality here... not good...
function validate(){

    //these vars can be condensed to one line
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;

    //let a = document.getElementsByTagName("input");
    
    let values = [title, author, pages ,read];
    let data = values;

    for (let i = 0; i < data.length; i++){
        if (data[i] === ""){
            return false;
        }
    }
    document.getElementById('title').value = "";
    //reset(values);
    return {'title':data[0], 'author':data[1], 'pages':data[2], 'read':data[3]};
}

//reset the input values to empty string
function reset(values){
    values.forEach(e => {e = ""; console.log(e);});
    
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


// Add event listeners to buttons

let add = document.querySelector(".add");
add.addEventListener("click",addBookToLibrary);

let addBook = document.querySelector(".addBook");
addBook.addEventListener("click",on);

//addBook.addEventListener("click",off);