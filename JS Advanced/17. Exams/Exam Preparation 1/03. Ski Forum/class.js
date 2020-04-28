class Forum {

    constructor() {
        this._users = [];
        this._questions = [];
        this.currentLoggedUsers = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email) {

        if (username === "" || password === "" || repeatPassword === "" || email === "") {
            throw new Error("Input can not be empty");
        }

        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }

        if (this._users.find(x => x.name === username)) {
            throw new Error("This user already exists!");
        }

        this._users.push({
            username,
            email,
            password
        });

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {

        if (!this._users.find(x => x.username === username)) {
            throw new Error("There is no such user");
        }

        if (this._users.find(x => x.username === username && x.password === password)) {
            this.currentLoggedUsers.push(username);
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password) {

        if (!this._users.find(x => x.username === username)) {
            throw new Error("There is no such user");
        }

        if (this._users.find(x => x.username === username && x.password === password)) {
            this.currentLoggedUsers = this.currentLoggedUsers.filter(x => x !== username);
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question) {

        if (!this._users.find(x => x.username === username) || !this.currentLoggedUsers.includes(username)) {
            throw new Error("You should be logged in to post questions");
        }

        if (question === "") {
            throw new Error("Invalid question");
        }


        this._questions.push({
            id: this._id,
            question,
            postedBy: username,
            answers: []
        });
        this._id++;
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer) {

        if (!this._users.find(x => x.username === username) || !this.currentLoggedUsers.includes(username)) {
            throw new Error("You should be logged in to post answers");
        }

        if (answer === "") {
            throw new Error("Invalid answer");
        }

        if (questionId >= this.id || questionId < 1) {
            throw new Error("There is no such question");
        }

        let questionRef = this._questions.find(question => question.id === questionId);
        questionRef.answers.push({
            answerdBy: username,
            answer
        });

        return "Your answer has been posted successfully";
    }

    showQuestions() {
        return this._questions.reduce((acc, x, i) => {
            return acc += `Question ${x.id} by ${x.postedBy}: ${x.question}`
                + x.answers.reduce((answerAcc, answer) => {
                    return answerAcc += `\n---${answer.answerdBy}: ${answer.answer}`
                }, '') + `\n`
        }, '').trim();
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");

console.log(forum.showQuestions());
