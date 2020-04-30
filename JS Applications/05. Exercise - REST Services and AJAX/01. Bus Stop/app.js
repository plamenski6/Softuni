function getInfo() {

    let stopIdInput = document.getElementById("stopId");
    let stopName = document.getElementById("stopName");
    let busContainer = document.getElementById("buses");

    const fetchUrl = `https://judgetests.firebaseio.com/businfo/${stopIdInput.value}.json`;

    fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
            let buses = data.buses;
            let name = data.name;

            stopName.textContent = name;

            Object.entries(buses).forEach((bus) => {
                let newBus = document.createElement("li");
                newBus.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes.`;
                busContainer.appendChild(newBus);
            });
        })
        .catch(err => {
            stopName.textContent = "Error";
        })

        stopIdInput.value = '';
        stopName.textContent = '';
        busContainer.textContent = '';
        
}
