
// Crie uma classe Pessoa em Pessoa.js com os atributos nome e idade e um método apresentar().
// No app.js, importe a classe, crie dois objetos e chame o método para cada um.

const Pessoa = require("./Pessoa.js")

const pessoa1 = new Pessoa("João", 18)
const pessoa2 = new Pessoa("Lucas", 19)

pessoa1.apresentar()
pessoa2.apresentar()