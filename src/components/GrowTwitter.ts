import Users from "../db/Users.db";
import User from "./User";

class GrowTwitter {
    cadastrarUsuario(user: User) {
        const usernameExiste = Users.findIndex(item => item.username === user.username);

        if (usernameExiste !== -1) {
            console.log(`O nome de usuário já existe`);
        } else {
            Users.push(user);
        }
    }
}

export default GrowTwitter;
