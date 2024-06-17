"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Users_db_1 = require("../db/Users.db");
class User {
    constructor(user) {
        this.id = (0, uuid_1.v4)();
        this.nome = user.nome;
        this.email = user.email;
        this.username = user.username;
        this.senha = user.senha;
    }
    cadastrarUsuario() {
        const index = Users_db_1.Users.findIndex(item => item.username === this.username);
        const newUser = {
            id: this.id,
            nome: this.nome,
            email: this.email,
            username: this.username,
            senha: this.senha
        };
        if (index === -1) {
            Users_db_1.Users.push(newUser);
        }
        else {
            return `O username ${this.username} já existe!`;
        }
    }
}
exports.default = User;
