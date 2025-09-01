
// Uma empresa deseja criar um sistema simples para gerenciar as tarefas da equipe.
// Cada tarefa será armazenada em um array utilizando a classe MeuArray.

// Requisitos:
// - Criar uma instância da classe Tarefas.
// - Adicionar cinco tarefas ao array.
// - Remover a última tarefa adicionada.
// - Exibir todas as tarefas armazenadas.

// Perguntas:
// - O que acontece quando tentamos acessar um índice fora do tamanho do array?
// - Como garantir que a ordem das tarefas seja mantida ao adicionar e remover itens?

const Tarefas = require("./Tarefas.js")

const tarefas = new Tarefas()

tarefas.adicionar("Recepção: atender os clientes")
tarefas.adicionar("Contabilidade: Emitir notas fiscais")
tarefas.adicionar("Marketing: acompanhar leads")
tarefas.adicionar("RH: recrutar novo funcionário")
tarefas.adicionar("Estagiário: fazer o café")

tarefas.mostrarTarefas()

console.log(tarefas.remover())

tarefas.mostrarTarefas()