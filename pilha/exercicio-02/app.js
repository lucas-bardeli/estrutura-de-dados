// O Capitão Barbarruiva tem um baú cheio de tesouros,
// mas ele só consegue pegar o último item que colocou.

// Crie um programa para ajudá-lo a:
// - Guardar um novo tesouro no baú.
// - Retirar o último tesouro guardado.
// - Olhar qual é o último tesouro sem pegá-lo
// - Saber se o baú está vazio.

const BauTesouro = require("./BauTesouro.js");

const bauTesouro = new BauTesouro();

bauTesouro.adicionar("Mapa do tesouro que leva a outro baú vazio");
bauTesouro.adicionar("Coleção completa de tampinhas mágicas de refrigerante");
bauTesouro.adicionar("Um dragão de bolso que só solta fumaça quando espirra");

console.log(bauTesouro.remover());

console.log(bauTesouro.topo());

console.log(bauTesouro.estaVazio());