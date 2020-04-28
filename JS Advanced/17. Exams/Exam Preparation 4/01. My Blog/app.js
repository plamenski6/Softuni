function solve(){

   let authorInput = document.getElementsByTagName("input")[0];
   let titleInput = document.getElementsByTagName("input")[1];
   let categoryInput = document.getElementsByTagName("input")[2];
   let content = document.getElementById("content");
   let articleSection = document.getElementsByTagName("section")[1];
   let list = document.getElementsByTagName("ul")[0];
   let createButton = document.getElementsByTagName("button")[0];
   
   createButton.addEventListener("click", (e) => {
      e.preventDefault();

      let article = document.createElement("article");
      articleSection.appendChild(article);

      let h1 = document.createElement("h1");
      h1.textContent = titleInput.value;
      article.appendChild(h1);

      let p = document.createElement("p");
      p.textContent = 'Category:';
      article.appendChild(p);
      let strong = document.createElement("strong");
      strong.textContent = categoryInput.value;
      p.appendChild(strong);

      let p2 = document.createElement("p");
      p2.textContent = 'Creator:';
      article.appendChild(p2);
      let strong2 = document.createElement("strong");
      strong2.textContent = authorInput.value;
      p2.appendChild(strong2);

      let p3 = document.createElement("p");
      p3.textContent = content.value;
      article.appendChild(p3);

      let div = document.createElement("div");
      div.className = "buttons";
      article.appendChild(div);

      //buttons
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btndelete";
      div.appendChild(deleteButton);

      let archiveButton = document.createElement("button");
      archiveButton.textContent = "Archive";
      archiveButton.className = "btnarchive";
      div.appendChild(archiveButton);

      deleteButton.addEventListener("click", (e) => {
         article.remove();
      });

      archiveButton.addEventListener("click", (e) => {

         let li = document.createElement("li");
         li.textContent = h1.textContent;
         list.appendChild(li);

         sortUL(list);
         article.remove();
      });

      authorInput.value = "";
      titleInput.value = "";
      categoryInput.value = "";
      content.value = "";
   });

   function sortUL (ul){
      Array.from(ul.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
  }

}
