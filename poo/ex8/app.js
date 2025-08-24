
// Crie um classe Matematica em Matematica.js apenas com os métodos estáticos soma(a, b), subtrair(a, b), fatorial(n).
// No app.js, importe e use sem precisar instanciar.

const Matematica = require("./Matematica.js")

console.log(`O resultado da soma é: ${Matematica.somar(928, 245)}`)
console.log(`O resultado da subtração é: ${Matematica.subtrair(367, 356)}`)
console.log(Matematica.fatorial(5))