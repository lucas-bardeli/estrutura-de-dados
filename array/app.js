
const MeuArray = require("./MeuArray.js")

// Exemplo de uso
const meu_array = new MeuArray()

meu_array.adicionar(10)
console.table(meu_array.itens)

meu_array.adicionar(20)
console.table(meu_array.itens)

meu_array.adicionar(30)
console.table(meu_array.itens)

console.log(meu_array.obterElemento(1)) // Saída: 20
console.log(meu_array.tamanhoArray()) // Saída: 3

// Saída: 30 (Remove o último elemento)
console.log(meu_array.remover())

console.log(meu_array.tamanhoArray()) // Saída: 2