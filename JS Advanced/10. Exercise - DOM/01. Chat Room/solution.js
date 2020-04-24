function solve() {

    let button = document.getElementById("send");
    let input = document.getElementById("chat_input");
    let messages = document.getElementById("chat_messages");

    button.addEventListener('click', function (e) {

        let newEl = document.createElement("div");
        newEl.innerHTML = input.value;
        newEl.classList.add("message", "my-message");
        messages.appendChild(newEl);
        input.value = '';
    });

}
