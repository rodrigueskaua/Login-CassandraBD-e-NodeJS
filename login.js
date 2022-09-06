const PromptFunction = require("prompt-sync")
const prompt = PromptFunction();
var functions = require('./functions');

console.log('\n=-=-=LOGIN=-=-=\n')
email = prompt("Email: ")
senha = prompt("Senha: ")

functions.login(email,senha)

 
