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
function addBookToLibrary(book){
  myLibrary.push(book);
}

function showBooks(){
  let output = document.querySelector(".output");
  console.log(myLibrary[0].title);
  myLibrary.forEach(e => output.innerHTML += e.title);
  
}

const a = new Book("a","b",12);
addBookToLibrary(a);
showBooks();

