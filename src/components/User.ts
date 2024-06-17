import Tweet from "./Tweet";
import { UserType } from "../types";
import { v4 as uuid } from 'uuid';
import { Tweets } from "../db/Tweets.db";

class User {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    tweets: Tweet[];
    following: User[];

    constructor(user: UserType) {
        this.id = uuid();
        this.name = user.name;
        this.email = user.email;
        this.username = user.username;
        this.password = user.password;
        this.tweets = [];
        this.following = [];
    }

    getId() {
        return this.id;
    }

    getSenha() {
        return this.password;
    }

    sendTweet(content: string) {
        const tweet = new Tweet(content, 'normal', this);
        this.tweets.push(tweet);
        Tweets.push(tweet);
        return tweet;
    }

    follow(user: User) {
        if (user.id !== this.id && !this.following.includes(user)) {
            this.following.push(user);
            user.following.push(this);
        }
    }

    likeTweet(tweet: Tweet) {
        tweet.like(this);
    }

    reply(tweet: Tweet, content: string) {
        const reply = new Tweet(content, 'reply', this);
        tweet.reply(reply);
        Tweets.push(reply);
    }

    showFeed() {
        const feed: Tweet[] = [];
        this.following.forEach((user) => {
            feed.push(...user.tweets);
        });

        
        feed.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).forEach((tweet) => tweet.show());
    }

    showTweets() {
        this.tweets.forEach((tweet) => tweet.show());
    }
}

export default User;
