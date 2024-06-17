import { User } from './components';
import GrowTwitter from './components/GrowTwitter';

const growTwitter = new GrowTwitter();

const user1 = new User({ name: 'Marcelo', email: 'marcelo@email.com', username: 'marcelo12', password: 'senha123' });
const user2 = new User({ name: 'Mateus', email: 'mateus@email.com', username: 'mateus14', password: 'senha123' });
const user3 = new User({ name: 'Marcele', email: 'marcele@email.com', username: 'marcele19', password: 'senha123' });

growTwitter.cadastrarUsuario(user1);
growTwitter.cadastrarUsuario(user2);
growTwitter.cadastrarUsuario(user3);

user1.follow(user2);
user1.follow(user3);

const tweet1 = user1.sendTweet('Fala GrowDevers!');
const tweet2 = user2.sendTweet('E ai blz?');
const tweet3 = user3.sendTweet('Tranquilos?');

user1.likeTweet(tweet2);
user2.likeTweet(tweet1);
user3.likeTweet(tweet2);


user1.reply(tweet3, 'Só de boas');


console.log('\n============================ GROWTWITTER ===============================\n');
tweet1.show();
console.log();
tweet2.show();
console.log();
tweet3.show();
console.log();


console.log('Feed do usuário 1:');
user1.showFeed();