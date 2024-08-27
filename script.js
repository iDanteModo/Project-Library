const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? `already read` : `not read yet`}`
    }
}

function addBookToLibrary() {
    const submit = document.querySelector('#submit');
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const yes = document.querySelector('#yes');
    const no = document.querySelector('#no');
    submit.addEventListener("click", () => {
        event.preventDefault();
        if(!title.value) {
            alert("Please Enter a Book Name");
            return false;
        }else if(!author.value) {
            alert("Please Enter The Author's Name")
            return false;
        }else if(!pages.value) {
            alert("Please enter the number of pages");
            return false;
        }else if(yes.checked == false && no.checked == false) {
            alert("Please select if you read the book or not");
            return false;
        }
        let wasread = true;
        if (no.checked){
            wasread = false;
        }else{
            wasread = true;
        }
        const inputBook = new Book(title.value, author.value, pages.value, wasread);
        myLibrary.push(inputBook);
        const div = document.createElement('div')
        const button = document.createElement('button');
        div.classList.add('row');
        const inputTitle = document.createElement('p');
        const inputAuthor = document.createElement('p');
        const inputPages = document.createElement('p');
        const inputRead = document.createElement('p');
        inputTitle.textContent = title.value;
        inputAuthor.textContent = author.value;
        inputPages.textContent = pages.value;
        button.textContent = "Remove";
        if(wasread){
            inputRead.textContent = "Yes"
        }else {
            inputRead.textContent = "No"
        }
        button.textContent = "Remove"
        library.appendChild(div);
        div.appendChild(inputTitle);
        div.appendChild(inputAuthor);
        div.appendChild(inputPages);
        div.appendChild(inputRead);
        div.appendChild(button);
        button.addEventListener('click',() => {
            div.remove();
        })
    title.value = "";
    author.value = "";
    pages.value = "";
    yes.checked = false;
    no.checked = false;
    });
}

const theHobbit= new Book("The Hobbit", "J.R.R Tolkien", 295, true);
const theWheelOfTime = new Book("The Wheel of Time", "Robert Jordan", "782", false);
const theNameOfTheWind = new Book("The Name Of The Wind", "Patrick Rothfuss", "662", false);
const theBrokenSword = new Book("The Broken Sword", "Poul Anderson", "256", true);
// console.log(theHobbit.info());
myLibrary.push(theHobbit);
myLibrary.push(theWheelOfTime);
myLibrary.push(theNameOfTheWind);
myLibrary.push(theBrokenSword);

const library = document.querySelector('#library');

myLibrary.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add('row');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const button = document.createElement('button')
    title.textContent = item.title;
    author.textContent = item.author;
    pages.textContent = item.pages;
    if(item.read){
        read.textContent = "Yes"
    }else {
        read.textContent = "No"
    }
    button.textContent = "Remove"
    library.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(button);
    button.addEventListener('click',() => {
        div.remove();
    })
})

addBookToLibrary();
