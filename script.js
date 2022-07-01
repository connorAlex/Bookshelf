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
function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;

    const a = new Book(title,author,pages);
    myLibrary.push(a);
  
    showBooks();
}

function showBooks(){
    let output = document.querySelector(".output");
    myLibrary.forEach(e => output.innerHTML += 
    "<div>" + e.title + "<button>X</button></div>");
}



let btn = document.querySelector(".add");
btn.addEventListener("click",addBookToLibrary);

