class myLibrary {
    constructor(book, author, pages, read) {
        this.book = book;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = `${title} by ${author} , ${pages} pages ${read ? 'already read' : 'not read yet'}`;
    }

   updateDOM = (selector,content) => {
    const element = document.querySelector(selector);
    if(element){
        element.innerHTML = content;
    }
    addBook = () => {
        const submit = document.querySelector('#submit');
        submit.addEventListener('click', () => {
            if (this.updateDOM('#title', '')){
                alert("Please Enter a Book Name");
                return false;
            }else if(this.updateDOM('#author', '')){
                alert("Please Enter the Author");
                return false;
            }else if (this.updateDOM('#pages', '')) {
                alert("Please enter the pages");
                return false;
            }else if (this.updateDOM("#read", false && this.updateDOM('#read', ))  == true){
                alert("Please select if you read the book or not");
                return false;
            }
        })
        
    }
    }
}