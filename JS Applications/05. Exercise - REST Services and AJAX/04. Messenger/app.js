function attachEvents() {

    let textArea = document.getElementById('messages');
    let authorInput = document.getElementById('author');
    let contentInput = document.getElementById('content');
    let sendButton = document.getElementById('submit');
    let refreshButton = document.getElementById('refresh');

    sendButton.addEventListener('click', (e) => {

        let author = authorInput.value;
        let content = contentInput.value;
        let obj = {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ author, content })
        }

        if (author.length > 0 && content.length > 0) {
            fetch(`https://rest-messanger.firebaseio.com/messanger.json`, obj)
                .then(res => res.json())
                .then(data => {
                        authorInput.value = '';
                        contentInput.value = '';
                        textArea.textContent = '';

                        refresh();
                })
                .catch(err => {
                    textArea.textContent = 'Error!';
                })
        }

    });

    refreshButton.addEventListener('click', refresh);

    function refresh(){
        let newArr = [];

        fetch(`https://rest-messanger.firebaseio.com/messanger.json`)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(arr => {
                    let id = arr[0];
                    let author = arr[1].author;
                    let content = arr[1].content;
                    newArr.push(`${author}: ${content}`);
                    textArea.textContent = newArr.join('\n');
                });
            })
            .catch(err => {
                textArea.textContent = 'Error!';
            })
    }

}

attachEvents();
