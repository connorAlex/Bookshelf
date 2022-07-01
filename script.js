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
    output.innerHTML = "";
    myLibrary.forEach(function (e,i) {output.innerHTML += 
    `<div>${e.title}, ${e.author}, ${e.pages} left. <button onclick = "removeBook(${i})" class = "remove">X</button></div>`});
    
}

function removeBook(id){
    myLibrary.splice(id,1);
    showBooks();
}

let add = document.querySelector(".add");

add.addEventListener("click",addBookToLibrary);