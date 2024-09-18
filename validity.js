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
            showValid();
        }else {
            titleValid.textContent = "";
            showError();
        }
    })

    author.addEventListener('input', () => {
        if (author.validity.valid) {
            showValid();
        } else {
            authorValid.textContent = "";
            showError();
        }  
    })
    
    pages.addEventListener('input', () => {
        if (pages.validity.valid) {
            showValid();
        } else {
            pagesValid.textContent = "";
            showError();
        }
    })

    const showError = () => {
        if(title.validity.valueMissing) {
            titleValid.textContent ="";
            titleError.textContent = "Please enter a title.";
        } else if (title.validity.tooShort) {
            titleValid.textContent ="";
            titleError.textContent = "Minimum 2 characters";
        }

        if(author.validity.valueMissing) {
            authorValid.textContent ="";
            authorError.textContent = "Please enter an author";
        }

        if(pages.validity.valueMissing) {
            pagesValid.textContent ="";
            pagesError.textContent = "Please enter the number of pages";
        }else if (pages.validity.rangeUnderflow) {
            pagesValid.textContent ="";
            pagesError.textContent = "Minimum 2 pages";
        }
    }

    const showValid = () => {
        if(title.validity.valid) {
            titleError.textContent = "";
            titleError.className = "error";
            titleValid.textContent = "OK";
        }
        if(author.validity.valid) {
            authorError.textContent = "";
            authorError.className = "error";
            authorValid.textContent = "OK";
        }
        if(pages.validity.valid) {
            pagesError.textContent = "";
            pagesError.className = "error";
            pagesValid.textContent = "OK";
        }
    }

    showError();
}
