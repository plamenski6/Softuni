async function loadCommits() {

    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let ul = document.getElementById('commits');
    ul.textContent = '';

    try {
        let response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
        
        if (response.status < 400) {
            let data = await response.json();
            Object.entries(data).forEach(arr => {
                let author = arr[1].commit.author.name;
                let message = arr[1].commit.message;

                let li = document.createElement('li');
                li.textContent = `${author}: ${message}`;
                ul.appendChild(li);
            });
        } else {
            throw response;
        }
    } catch (err) {
        ul.textContent = '';
        let li = document.createElement('li');
        li.textContent = `Error: ${err.status} (${err.statusText})`;
        ul.appendChild(li)
    }
    
}
