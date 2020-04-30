function attachEvents() {

    let anglerInput = document.querySelector('#addForm .angler');
    let weightInput = document.querySelector('#addForm .weight');
    let speciesInput = document.querySelector('#addForm .species');
    let locationInput = document.querySelector('#addForm .location');
    let baitInput = document.querySelector('#addForm .bait');
    let captureTimeInput = document.querySelector('#addForm .captureTime');
    let loadButton = document.querySelector('aside .load');
    let addButton = document.querySelector('#addForm .add');
    let divCatches = document.getElementById('catches');

    loadButton.addEventListener('click', loadCatch);

    addButton.addEventListener('click', addCatch);


    function loadCatch() {

        divCatches.textContent = '';
        fetch('https://fisher-game.firebaseio.com/catches.json')
            .then(jsonMiddleware)
            .then(data => {
                Object.entries(data).forEach(arr => {
                    let id = arr[0];
                    let angler = arr[1].angler;
                    let weight = arr[1].weight;
                    let species = arr[1].species;
                    let location = arr[1].location;
                    let bait = arr[1].bait;
                    let captureTime = arr[1].captureTime;

                    //divCatch
                    let divCatch = document.createElement('div');
                    divCatch.className = 'catch';
                    divCatch.setAttribute('data-id', id);
                    divCatches.appendChild(divCatch);
                    //anglerLabel
                    let anglerLaber = document.createElement('label');
                    anglerLaber.textContent = 'Angler';
                    divCatch.appendChild(anglerLaber);
                    //anglerInput
                    let anglerInput = document.createElement('input');
                    anglerInput.type = 'text';
                    anglerInput.className = 'angler';
                    anglerInput.value = angler;
                    divCatch.appendChild(anglerInput);
                    //anglerHr
                    let anglerHr = document.createElement('hr')
                    divCatch.appendChild(anglerHr);
                    //weightLabel
                    let weightLabel = document.createElement('label');
                    weightLabel.textContent = 'Weight';
                    divCatch.appendChild(weightLabel);
                    //weightInput
                    let weightInput = document.createElement('input');
                    weightInput.type = 'number';
                    weightInput.className = 'weight';
                    weightInput.value = weight;
                    divCatch.appendChild(weightInput);
                    //weightHr
                    let weightHr = document.createElement('hr')
                    divCatch.appendChild(weightHr);
                    //speciesLabel
                    let speciesLabel = document.createElement('label');
                    speciesLabel.textContent = 'Species';
                    divCatch.appendChild(speciesLabel);
                    //speciesInput
                    let speciesInput = document.createElement('input');
                    speciesInput.type = 'text';
                    speciesInput.className = 'species';
                    speciesInput.value = species;
                    divCatch.appendChild(speciesInput);
                    //speciesHr
                    let speciesHr = document.createElement('hr')
                    divCatch.appendChild(speciesHr);
                    //locationLabel
                    let locationLabel = document.createElement('label');
                    locationLabel.textContent = 'Location';
                    divCatch.appendChild(locationLabel);
                    //locationInput
                    let locationInput = document.createElement('input');
                    locationInput.type = 'text';
                    locationInput.className = 'location';
                    locationInput.value = location;
                    divCatch.appendChild(locationInput);
                    //locationHr
                    let locationHr = document.createElement('hr')
                    divCatch.appendChild(locationHr);
                    //baitLabel
                    let baitLabel = document.createElement('label');
                    baitLabel.textContent = 'Bait';
                    divCatch.appendChild(baitLabel);
                    //baitInput
                    let baitInput = document.createElement('input');
                    baitInput.type = 'text';
                    baitInput.className = 'bait';
                    baitInput.value = bait;
                    divCatch.appendChild(baitInput);
                    //baitHr
                    let baitHr = document.createElement('hr')
                    divCatch.appendChild(baitHr);
                    //captureTimeLabel
                    let captureTimeLabel = document.createElement('label');
                    captureTimeLabel.textContent = 'Capture Time';
                    divCatch.appendChild(captureTimeLabel);
                    //captureTimeInput
                    let captureTimeInput = document.createElement('input');
                    captureTimeInput.type = 'number';
                    captureTimeInput.className = 'captureTime';
                    captureTimeInput.value = captureTime;
                    divCatch.appendChild(captureTimeInput);
                    //captureTimeHr
                    let captureTimeHr = document.createElement('hr')
                    divCatch.appendChild(captureTimeHr);
                    //updateButton
                    let updateButton = document.createElement('button');
                    updateButton.className = 'update';
                    updateButton.textContent = 'Update';
                    divCatch.appendChild(updateButton);
                    //deleteButton
                    let deleteButton = document.createElement('button');
                    deleteButton.className = 'delete';
                    deleteButton.textContent = 'Delete';
                    divCatch.appendChild(deleteButton);

                    updateButton.addEventListener('click', updateCatch);
                    
                    deleteButton.addEventListener('click', deleteCatch);
                })
            })
            .catch(err => console.log(err))
    }

    function addCatch() {

        let myCatch = {
            angler: anglerInput.value,
            weight: weightInput.value,
            species: speciesInput.value,
            location: locationInput.value,
            bait: baitInput.value,
            captureTime: captureTimeInput.value
        };

        let obj = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(myCatch)
        };

        fetch('https://fisher-game.firebaseio.com/catches.json', obj)
            .then(jsonMiddleware)
            .then(() => {
                anglerInput.value = '';
                weightInput.value = '';
                speciesInput.value = '';
                locationInput.value = '';
                baitInput.value = '';
                captureTimeInput.value = '';
                
                loadCatch();
            })
            .catch(err => console.log(err))
    }

    function updateCatch(){
        let catchId = this.parentNode.getAttribute('data-id');

        let myCatch = {
            angler: this.parentNode.querySelector('.angler').value,
            weight: this.parentNode.querySelector('.weight').value,
            species: this.parentNode.querySelector('.species').value,
            location: this.parentNode.querySelector('.location').value,
            bait: this.parentNode.querySelector('.bait').value,
            captureTime: this.parentNode.querySelector('.captureTime').value
        };

        let obj = {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(myCatch)
        }

        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, obj)
            .then(jsonMiddleware)
            .then(() => {
                loadCatch();
            })
            .catch(err => console.log(err))
    }

    function deleteCatch(){
        let catchId = this.parentNode.getAttribute('data-id');
        let obj = {
            method: 'DELETE'
        };

        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, obj)
            .then(() => {
                loadCatch();
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

}

attachEvents();
