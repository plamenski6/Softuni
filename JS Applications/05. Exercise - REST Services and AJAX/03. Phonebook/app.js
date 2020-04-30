function attachEvents() {

    let loadButton = document.getElementById('btnLoad');
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');
    let createButton = document.getElementById('btnCreate');
    let ul = document.getElementById('phonebook');

    loadButton.addEventListener("click", loadPhonebook);

    createButton.addEventListener('click', (e) => {
        let person = personInput.value;
        let phone = phoneInput.value;
        let obj = {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ person, phone })
        };

        if (person.length > 0 && phone.length > 0) {
            fetch('https://phonebook-nakov.firebaseio.com/phonebook.json', obj)
                .then(res => res.json())
                .then(() => {
                    personInput.value = '';
                    phoneInput.value = '';

                    loadPhonebook();
                })
                .catch(handleError)
        }
    });

    function loadPhonebook() {
        ul.textContent = '';

        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach((data) => {
                    let id = data[0];
                    let person = data[1].person;
                    let phone = data[1].phone;

                    let li = document.createElement('li');
                    li.textContent = `${person}: ${phone}`;
                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = "Delete";
                    deleteButton.setAttribute('data-target', id);
                    li.appendChild(deleteButton);
                    ul.appendChild(li);

                    deleteButton.addEventListener('click', deletePhone);
                });
            })
            .catch(handleError)
    }

    function deletePhone() {
        let phonebookId = this.getAttribute('data-target');
        let obj = {
            method: 'delete'
        };

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${phonebookId}.json`, obj)
            .then(() => {
                loadPhonebook();
            })
            .catch(handleError)
    }

    function handleError(err) {
        console.log(err);
    }

}

attachEvents();
