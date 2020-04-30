function solve() {

    let information = document.getElementsByClassName("info")[0];
    let departButton = document.getElementById("depart");
    let arriveButton = document.getElementById("arrive");

    let currentId = "depot";
    let currentName;

    function depart() {
        const fetchUrl = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;

        fetch(fetchUrl)
            .then(res => res.json())
            .then(data => {
                let name = data.name;
                let next = data.next;
                currentId = next;
                currentName = name;

                information.textContent = `Next stop ${currentName}`;

                arriveButton.disabled = false;
                departButton.disabled = true;
            })
            .catch(err => {
                information.textContent = "Error";

                arriveButton.disabled = true;
                departButton.disabled = true;
            })
    }

    function arrive() {
        information.textContent = `Arriving at ${currentName}`;

        arriveButton.disabled = true;
        departButton.disabled = false;
    }

    return {
        depart,
        arrive
    };
    
}

let result = solve();
