function notify(message) {

    let div = document.getElementById("notification");
    div.textContent = message;
    div.style.display = "block";

    setTimeout(handler, 2000)

    function handler() {
        div.style.display = "none";
    }

}
