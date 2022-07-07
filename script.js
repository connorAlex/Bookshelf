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

    showBooks();
    off();
}

//update DOM with all books in myLibrary array
function showBooks(){
    let output = document.querySelector(".output");
    output.innerHTML = "";
    myLibrary.forEach(function (e,i) {
        let readOutput = "Unread";
        
        if (e.hasRead === true){
            readOutput = "Have Read";
        }

        output.innerHTML =  
            `<div>   
                <div>${e.title}</div> 
                <div>${e.author}</div> 
                <div>${e.pages} left</div>
                <div>${readOutput}</div>
                <button 
                        onclick = "removeBook(${i})" 
                        class = "remove">
                            X
                </button>
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
    reset(values);
    return {'title':data[0], 'author':data[1], 'pages':data[2], 'read':data[3]};
}

//reset the input values to empty string
function reset(values){
    values.forEach(e => e = "");
    console.log("ASDf");
}

let add = document.querySelector(".add");
add.addEventListener("click",addBookToLibrary);

let addBook = document.querySelector(".addBook");
addBook.addEventListener("click",on);
//addBook.addEventListener("click",off);

function on(e){
    document.querySelector(".overlay").style.display = "flex";
}

function off(e){
    document.querySelector(".overlay").style.display = "none";
}