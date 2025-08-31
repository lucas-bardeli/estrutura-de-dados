
const MeuArray = require("./MeuArray.js")

// Exemplo de uso
const meu_array = new MeuArray()

meu_array.adicionar(10)
meu_array.mostrarItens()

meu_array.adicionar(20)
meu_array.mostrarItens()

meu_array.adicionar(30)
meu_array.mostrarItens()

console.log(meu_array.obterElemento(1)) // Saída: 20
console.log(meu_array.tamanhoArray()) // Saída: 3

// Saída: 30 (Remove o último elemento)
console.log(meu_array.remover())
meu_array.mostrarItens()

console.log(meu_array.tamanhoArray()) // Saída: 2

console.log(meu_array.editar(1, 30)) // Saída: 20 (Editou o 20 para 30)
meu_array.mostrarItens()

console.log(meu_array.obterIndice(30)) // Saída: 1