
// Crie uma classe Funcionario em Funcionario.js com os atributos nome e salario, e um método calcularBonus().
// Depois crie a classe Gerente e Desenvolvedor que sobrescrevem esse método para cálculos diferentes.
// No app.js, crie objetos de cada tipo e mostre o bônus.

const Desenvolvedor = require("./Desenvolvedor.js")
const Gerente = require("./Gerente.js")

const dev = new Desenvolvedor("Lucas", 3000)
const gerente = new Gerente("João", 5000)

console.log(`Bônus do dev: ${dev.calcularBonus()}`)
console.log(`Bônus do gerente: ${gerente.calcularBonus()}`)