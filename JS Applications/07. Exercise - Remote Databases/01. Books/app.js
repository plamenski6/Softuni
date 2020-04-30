(function () {

    let loadButton = document.getElementById('loadBooks');
    let tbody = document.getElementsByTagName('tbody')[0];
    let titleInput = document.getElementById('title');
    let authorInput = document.getElementById('author');
    let isbnInput = document.getElementById('isbn');
    let submitButton = document.querySelector('form button');

    loadButton.addEventListener('click', loadBooks);

    submitButton.addEventListener('click', submitBook);

    function loadBooks() {
        tbody.textContent = '';

        fetch('https://softuni-remote-db.firebaseio.com/books.json')
            .then(jsonMiddleware)
            .then(data => {
                Object.entries(data).forEach(arr => {
                    let id = arr[0];
                    let author = arr[1].author;
                    let isbn = arr[1].isbn;
                    let title = arr[1].title;
                    //tr
                    let tr = document.createElement('tr');
                    tr.setAttribute('data-id', id);
                    tbody.appendChild(tr);
                    //tdTitle
                    let tdTitle = document.createElement('td');
                    tdTitle.className = 'title';
                    tdTitle.textContent = title;
                    tr.appendChild(tdTitle);
                    //tdAuthor
                    let tdAuthor = document.createElement('td');
                    tdAuthor.className = 'author';
                    tdAuthor.textContent = author;
                    tr.appendChild(tdAuthor);
                    //tdIsbn
                    let tdIsbn = document.createElement('td');
                    tdIsbn.className = 'isbn';
                    tdIsbn.textContent = isbn;
                    tr.appendChild(tdIsbn);
                    //tdButtons
                    let tdButtons = document.createElement('td');
                    tr.appendChild(tdButtons);
                    //editButton
                    let editButton = document.createElement('button');
                    editButton.textContent = 'Edit';
                    tdButtons.appendChild(editButton);
                    //deleteButton
                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    tdButtons.appendChild(deleteButton);

                    editButton.addEventListener('click', editBook);
                    deleteButton.addEventListener('click', deleteBook);
                });
            })
            .catch(err => console.log(err));
    }

    function submitBook(e) {
        e.preventDefault();

        let newBook = {
            title: titleInput.value,
            author: authorInput.value,
            isbn: isbnInput.value
        }

        let obj = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newBook)
        };

        if (titleInput.value === '' || authorInput.value === '' || isbnInput.value === '') {
            alert('Please fill in all fields !');
            throw new Error('Empty fields!');
        };

        if (titleInput.value.length > 0 && authorInput.value.length > 0 && isbnInput.value.length > 0) {
            fetch('https://softuni-remote-db.firebaseio.com/books.json', obj)
                .then(jsonMiddleware)
                .then(() => {
                    titleInput.value = '';
                    authorInput.value = '';
                    isbnInput.value = '';

                    loadBooks();
                })
                .catch(err => console.log(err))
        }
    }

    function editBook(e) {
        e.preventDefault();

        let bookId = e.target.parentNode.parentNode.getAttribute('data-id');

        let newEditBook = {
            title: titleInput.value.length === 0 ? e.target.parentNode.parentNode.querySelector('.title').textContent : titleInput.value,
            author: authorInput.value.length === 0 ? e.target.parentNode.parentNode.querySelector('.author').textContent : authorInput.value,
            isbn: isbnInput.value.length === 0 ? e.target.parentNode.parentNode.querySelector('.isbn').textContent : isbnInput.value
        }

        let obj = {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newEditBook)
        }

        fetch(`https://softuni-remote-db.firebaseio.com/books/${bookId}.json`, obj)
            .then(jsonMiddleware)
            .then(() => {
                titleInput.value = '';
                authorInput.value = '';
                isbnInput.value = '';

                loadBooks();
            })
            .catch(err => console.log(err))
    }

    function deleteBook(e) {

        let bookId = e.target.parentNode.parentNode.getAttribute('data-id');

        let obj = {
            method: 'DELETE'
        };

        fetch(`https://softuni-remote-db.firebaseio.com/books/${bookId}.json`, obj)
            .then(() => {
                loadBooks();
            })
            .catch(err => console.log(err))
    }

    function jsonMiddleware(res) {
        if (res.status < 400) {
            return res.json();
        } else {
            throw res;
        }
    }
     
})()
