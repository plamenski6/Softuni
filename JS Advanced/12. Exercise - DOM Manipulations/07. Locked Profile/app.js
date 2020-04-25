function lockedProfile() {

    const buttons = Array.from(document.getElementsByTagName("button"));

    for (let i of buttons) {
        i.addEventListener("click", (e) => {
            const hidden = e.currentTarget.parentNode.children[9];
            const radioLock = e.currentTarget.parentNode.children[2];

            if (radioLock.checked === false && i.textContent === "Show more") {
                hidden.style.display = "block";
                i.textContent = "Hide it";
            } else if (radioLock.checked === false && i.textContent === "Hide it") {
                hidden.style.display = "none";
                i.textContent = "Show more";
            }
        });
    }

}
