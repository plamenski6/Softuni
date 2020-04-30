function loadCommits() {

    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let ul = document.getElementById('commits');
    ul.textContent = '';

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(res => {
            if (res.status < 400) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data => {
            Object.entries(data).forEach(arr => {
                let author = arr[1].commit.author.name;
                let message = arr[1].commit.message;

                let li = document.createElement('li');
                li.textContent = `${author}: ${message}`;
                ul.appendChild(li);
            });
        })
        .catch(err => {
            ul.textContent = '';
            let li = document.createElement('li');
            li.textContent = `Error: ${err.status} (${err.statusText})`;
            ul.appendChild(li)
        })

}
