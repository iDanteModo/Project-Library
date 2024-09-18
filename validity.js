export function validity() {
    const title = document.getElementById('title');
    const titleError = document.querySelector('#title + span.error')
    const titleValid = document.getElementById('vTitle');
    const author = document.getElementById('author');
    const authorError = document.querySelector('#author + span.error')
    const authorValid = document.getElementById('vAuthor');
    const pages = document.getElementById('pages');
    const pagesError = document.querySelector('#pages + span.error');
    const pagesValid = document.getElementById('vPages');


    title.addEventListener('input', () => {
        if (title.validity.valid) {
            titleError.textContent = "";
            titleError.className = "error";
            showValid();
        }else {
            titleValid.textContent = "";
            showError();
        }
    })

    author.addEventListener('input', () => {
        if (author.validity.valid) {
            authorError.textContent = "";
            authorError.className = "error";
            showValid();
        } else {
            authorValid.textContent = "";
            showError();
        }  
    })
    
    pages.addEventListener('input', () => {
        if (pages.validity.valid) {
            pagesError.textContent = "";
            pagesError.className = "error";
            showValid();
        } else {
            pagesValid.textContent = "";
            showError();
        }
    })

    const showError = () => {
        if(title.validity.valueMissing) {
            titleError.textContent = "Please enter a title.";
        } else if (title.validity.tooShort) {
            titleError.textContent = "Minimum 2 characters";
        }

        if(author.validity.valueMissing) {
            authorError.textContent = "Please enter an author";
        }

        if(pages.validity.valueMissing) {
            pagesError.textContent = "Please enter the number of pages";
        }else if (pages.validity.rangeUnderflow) {
            pagesError.textContent = "Minimum 2 pages";
        }
    }

    const showValid = () => {
        if(title.validity.valid) {
            titleValid.textContent = "OK";
        }
        if(author.validity.valid) {
            authorValid.textContent = "OK";
        }
        if(pages.validity.valid) {
            pagesValid.textContent = "OK";
        }
    }

    showError();
}
