function focus() {

    let divs = Array.from(document.getElementsByTagName('div')[0].children);

    for (let i of divs) {
        i.lastElementChild.addEventListener("focus", focused)
    }

    function focused(e) {
        let currentDiv = this.parentElement;

        for (let i of divs) {
            if (i !== currentDiv) {
                i.classList.remove("focused");
            }
        }

        currentDiv.classList.add("focused")
    }

}
