function createArticle() {

	let input1 = document.getElementById("createTitle");
	let input2 = document.getElementById("createContent");

	if (input1.value !== "" && input2.value !== "") {
		let section = document.getElementById("articles");
		let article = document.createElement("article");
		section.appendChild(article);
		let h3 = document.createElement("h3");
		article.appendChild(h3);
		let p = document.createElement("p");
		article.appendChild(p);
		h3.textContent = input1.value;
		p.textContent = input2.value;
	}

	input1.value = "";
	input2.value = "";

}
