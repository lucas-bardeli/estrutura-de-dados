
// Crie uma classe Endereco em Endereco.js e uma classe Cliente em Cliente.js que recebe um Endereco no construtor. 
// No app.js, monte um cliente com endereço e exiba os dados.

const Endereco = require("./Endereco.js")
const Cliente = require("./Cliente.js")

const endereco = new Endereco("Rua Tal", "Bairro Jardim", 2012, "Jaú", "SP")
const cliente = new Cliente("Lucas", 19, endereco)

console.log(cliente)