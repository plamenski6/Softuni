function mySolution() {

    let textArea = document.querySelector('#inputSection textarea');
    let username = document.querySelector('#inputSection div input');
    let sendButton = document.querySelector('#inputSection div button');
    let pendQuestions = document.querySelector('#pendingQuestions');
    let openQuestions = document.querySelector('#openQuestions');

    sendButton.addEventListener("click", (e) => {
        
        let div = document.createElement("div");
        div.className = "pendingQuestion";
        pendQuestions.appendChild(div);
        //1
        let img = document.createElement('img');
        img.src = './images/user.png';
        img.width = '32';
        img.height = '32';
        div.appendChild(img);
        //2
        let span = document.createElement("span");
        if (username.value.length > 0) {
            span.textContent = username.value;
        } else {
            span.textContent = "Anonymous";
        }
        div.appendChild(span);
        //3
        let p = document.createElement('p');
        p.textContent = textArea.value;
        div.appendChild(p);
        //4
        let newDiv = document.createElement('div');
        newDiv.className = 'actions';
        div.appendChild(newDiv);
        //newDiv buttons
        let archiveButton = document.createElement('button');
        archiveButton.className = 'archive';
        archiveButton.textContent = 'Archive';
        newDiv.appendChild(archiveButton);
        let openButton = document.createElement('button');
        openButton.className = 'open';
        openButton.textContent = 'Open';
        newDiv.appendChild(openButton);

        textArea.value = "";
        username.value = "";

        archiveButton.addEventListener("click", (e) => {
            div.remove();
        });

        openButton.addEventListener("click", (e) => {

            let openDiv = document.createElement("div");
            openDiv.className = "openQuestion";
            openQuestions.appendChild(openDiv);
            //1
            let openImg = document.createElement('img');
            openImg.src = './images/user.png';
            openImg.width = '32';
            openImg.height = '32';
            openDiv.appendChild(openImg);
            //2
            let openSpan = document.createElement("span");
            openSpan.textContent = span.textContent;
            openDiv.appendChild(openSpan);
            //3
            let openP = document.createElement('p');
            openP.textContent = p.textContent;
            openDiv.appendChild(openP);
            //4
            let openNewDiv = document.createElement('div');
            openNewDiv.className = 'actions';
            openDiv.appendChild(openNewDiv);
            //openNewDiv buttons
            let replyButton = document.createElement('button');
            replyButton.className = 'reply';
            replyButton.textContent = 'Reply';
            openNewDiv.appendChild(replyButton);
            //5
            let openNewDiv2 = document.createElement('div');
            openNewDiv2.className = 'replySection';
            openNewDiv2.style.display = 'none';
            openDiv.appendChild(openNewDiv2);
            //openNewDiv2 childs
            let openInput = document.createElement('input');
            openInput.className = 'replyInput';
            openInput.type = "text";
            openInput.placeholder = 'Reply to this question here...';
            openNewDiv2.appendChild(openInput);

            let innerButton = document.createElement('button');
            innerButton.className = 'replyButton';
            innerButton.textContent = 'Send';
            openNewDiv2.appendChild(innerButton);

            let ol = document.createElement('ol');
            ol.className = "reply";
            ol.type = '1';
            openNewDiv2.appendChild(ol);

            replyButton.addEventListener("click", (e) => {
                if (e.target.textContent === "Reply") {
                    openNewDiv2.style.display = "block";
                    replyButton.textContent = "Back";

                    innerButton.addEventListener("click", (e) => {
                        if (openInput.value.length > 0) {
                            let li = document.createElement('li');
                            li.textContent = openInput.value;
                            ol.appendChild(li);
                        }
                        openInput.value = "";
                    });
                } else {
                    openNewDiv2.style.display = "none";
                    replyButton.textContent = "Reply"; 
                }
            });

            div.remove();
        });
    });
    
}
