function solve() {

    let input = document.getElementsByTagName("input")[0];
    let button = document.getElementsByTagName("button")[0];
    let li = document.getElementsByTagName("li");

    button.addEventListener("click", (e) => {

        let firstLetter = input.value[0].toUpperCase();
        let index = Number(firstLetter.charCodeAt()) - 65;
        let oldValue = li[index].innerHTML;
        let name = firstLetter + input.value.substring(1).toLowerCase();

        if (oldValue === "") {
            li[index].innerHTML = name;
        } else {
            li[index].innerHTML += `, ${name}`;
        }

        input.value = "";
    });

}
