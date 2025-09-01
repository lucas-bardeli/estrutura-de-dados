
// O setor de Recursos Humanos de uma empresa deseja armazenar os nomes dos funcionários que participaram de um treinamento.

// Requisitos:
// - Criar uma instância da classe Funcionarios.
// - Adicionar os nomes de quatro funcionários ao array.
// - Obter o nome do terceiro funcionário que participou. 
// - Limpar todos os registros do array.

// Perguntas:
// - O que acontece se tentarmos acessar um índice inexistente após limpar o array?
// - Como modificar a classe para garantir que os nomes armazenados sejam únicos?

const Funcionarios = require("./Funcionarios.js")

const funcionarios = new Funcionarios()

funcionarios.adicionar("Anelize")
funcionarios.adicionar("Euller")
funcionarios.adicionar("Lucas")
funcionarios.adicionar("Vinícius")

console.table(funcionarios.funcionarios)

console.log(funcionarios.obterElemento(2))

funcionarios.limpar()
console.table(funcionarios.funcionarios)