"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_db_1 = require("./db/Users.db");
const components_1 = require("./components");
const user1 = new components_1.User({ nome: 'Mateus', email: 'mateus@gmail', username: "1mateus_silva1", senha: "1234" });
user1.cadastrarUsuario();
console.log(Users_db_1.Users);
