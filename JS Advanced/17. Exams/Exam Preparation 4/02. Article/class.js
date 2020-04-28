class Article {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        }

        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like(username) {

        if (username === this.creator) {
            throw new Error("You can't like your own articles!");
        }

        let person = this._likes.find(x => x === username);

        if (person) {
            throw new Error("You can't like the same article twice!");
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (this._likes[0] !== username) {
            throw new Error("You can't dislike this article!");
        }

        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let comment = this._comments.find(x => x.id === id);
        if (id === undefined || !comment) {
            let nextID = this._comments.length + 1;
            comment = {
                id: nextID,
                username,
                content,
                replies: []
            }

            this._comments.push(comment);

            return `${username} commented on ${this.title}`;
        }

        if (comment) {
            let repliesCount = comment.replies.length + 1;
            let currReply = `${comment.id}.${repliesCount}`
            let newestReply = { id: currReply, username, content }
            comment.replies.push(newestReply);
            return `You replied successfully`
        }
    }

    toString(sortingType) {
        let result = "";
        result += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`

        if (sortingType === 'asc') {
            this._comments = this._comments.sort((a, b) => a.id - b.id);
            for (const com of this._comments) {
                result += `-- ${com.id}. ${com.username}: ${com.content}\n`
                com.replies = com.replies.sort((a, b) => +(a.id) - (+(b.id)));
                for (const reply of com.replies) {
                    result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`
                }
            }
        } else if (sortingType === 'desc'){
            this._comments = this._comments.sort((a,b)=> b.id-a.id);
            for (const com of this._comments) {
                result+=`-- ${com.id}. ${com.username}: ${com.content}\n`
                com.replies = com.replies.sort((a,b)=> +(b.id)-(+(a.id)));
                for (const reply of com.replies) {
                    result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`
                }
            }
        } else {
            this._comments = this._comments.sort((a,b)=> a.username.localeCompare(b.username))
            for (const com of this._comments) {
                result+=`-- ${com.id}. ${com.username}: ${com.content}\n`
                com.replies = com.replies.sort((a,b)=> a.username.localeCompare(b.username));
                for (const reply of com.replies) {
                    result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`
                }
            }
        }
        return result.trim();
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
