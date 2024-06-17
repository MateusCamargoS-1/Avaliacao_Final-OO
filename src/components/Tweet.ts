import { v4 as uuid } from 'uuid';
import User from './User';

class Tweet {
    id?: string;
    content: string;
    type: 'normal' | 'reply';
    user: User;
    likes: User[];
    replies: Tweet[];
    createdAt: Date;

    constructor(content: string, type: 'normal' | 'reply', user: User) {
        this.id = uuid();
        this.content = content;
        this.type = type;
        this.user = user;
        this.likes = [];
        this.replies = [];
        this.createdAt = new Date();
    }

    like(user: User) {
        if (!this.likes.includes(user)) {
            this.likes.push(user);
        }
    }

    reply(reply: Tweet) {
        this.replies.push(reply);
    }

    show() {
        console.log(`@${this.user.username}: ${this.content}`);
        if (this.likes.length === 1) {
            console.log(`${this.likes[0].username} curtiu`);
        } else if (this.likes.length > 1) {
            console.log(`${this.likes[0].username} e mais ${this.likes.length - 1} usuários curtiram`);
        }
        this.replies.forEach(reply => {
            console.log(`> @${reply.user.username}: ${reply.content}`);
        });
    }
}

export default Tweet;