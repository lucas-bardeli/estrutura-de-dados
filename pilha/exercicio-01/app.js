// O grande feiticeiro Eldrin vive em uma torre cheia de livros de feitiços.
// Ele sempre coloca os novos livros no topo da pilha e só pode pegar o que está no topo primeiro.

// Implemente um sistema para ajudá-lo a organizar seus feitiços com as seguintes funcionalidades:
// - Adicionar um novo feitiço no topo da pilha.
// - Remover o feitiço do topo (Eldrin usou e guardou em outro lugar).
// - Ver qual feitiço está no topo sem removê-lo.
// - Verificar se não há mais feitiços na pilha.

const Livros = require("./Livros.js");

const livros = new Livros();

livros.adicionar("Feitiços para não esquecer onde deixei a varinha");
livros.adicionar("Poções instantâneas: do miojo ao amor eterno");
livros.adicionar("Manual prático de como parecer ocupado em reuniões mágicas");

console.log(livros.remover());

console.log(livros.topo());

console.log(livros.estaVazia());