const PromptFunction = require("prompt-sync")
const prompt = PromptFunction();
var functions = require('./functions');

email = prompt("Email: ")
senha = prompt("Senha: ")

functions.login(email,senha)

 
