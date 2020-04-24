function solve() {

  let textArea1 = document.getElementsByTagName("textarea")[0];
  let generate = document.getElementsByTagName("button")[0];
  let textArea2 = document.getElementsByTagName("textarea")[1];
  let buy = document.getElementsByTagName("button")[1];
  let tbody = document.getElementsByTagName("tbody")[0];
  let checkbox = document.getElementsByTagName('input')[0];
  checkbox.disabled = true;

  generate.addEventListener("click", (e) => {

    let parsed = JSON.parse(textArea1.value)

    for (let i of parsed) {
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = i.img;
      td1.appendChild(img);

      let td2 = document.createElement("td");
      let p2 = document.createElement("p");
      p2.innerHTML = i.name;
      td2.appendChild(p2);

      let td3 = document.createElement("td");
      let p3 = document.createElement("p");
      p3.innerHTML = Number(i.price);
      td3.appendChild(p3);

      let td4 = document.createElement("td");
      let p4 = document.createElement("p");
      p4.innerHTML = Number(i.decFactor);
      td4.appendChild(p4);

      let td5 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      td5.appendChild(input);

      tbody.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
    }
    textArea1.value = "";
  });

  buy.addEventListener("click", (e) => {
    let allInputs = Array.from(document.getElementsByTagName("input"));
    let bought = [];

    for (let i = 1; i < allInputs.length; i++) {
      if (allInputs[i].checked === true) {
        bought.push(tbody.children[i]);
      }
    }

    let names = [];
    let totalPrice = 0;
    let averageDec = [];

    for (let item of bought) {
      names.push(item.children[1].textContent);
      totalPrice += Number(item.children[2].textContent);
      averageDec.push(Number(item.children[3].textContent));
    }

    textArea2.value += `Bought furniture: ${names.join(", ")}\n`;
    textArea2.value += `Total price: ${totalPrice}\n`;
    textArea2.value += `Average decoration factor: ${calculateAvg(averageDec)}`;


  });

  function calculateAvg(arr) {
    let total = 0;
    for (let i of arr) {
      total += i;
    }
    let average = total / arr.length;
    return average;
  }

}
