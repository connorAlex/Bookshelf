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
    let data = validate();
    if (data === false){
        return 0;
    }
    const a = new Book(data.title,data.author,data.pages);
    myLibrary.push(a);
    showBooks();
}

function showBooks(){
    let output = document.querySelector(".output");
    output.innerHTML = "";
    myLibrary.forEach(function (e,i) {output.innerHTML += 
    `<div><div>${e.title}</div> <div>${e.author}</div> <div>${e.pages} left</div> <div>read?</div><button onclick = "removeBook(${i})" class = "remove">X</button></div>`});
    
}

function removeBook(id){
    myLibrary.splice(id,1);
    showBooks();
}

function validate(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;

    let data = [title, author, pages];
    for (let i = 0; i < data.length; i++){
        if (data[i] === ""){
            return false;
        }
    }
    return {'title':data[0], 'author':data[1], 'pages':data[2]};
}
let add = document.querySelector(".add");
add.addEventListener("click",addBookToLibrary);