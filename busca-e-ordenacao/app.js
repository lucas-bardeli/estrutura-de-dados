
const Sorter = require('./Sorter.js');
const Buscas = require('./Buscas.js');

const lista = [7, 2, 5, 1, 9, 0, 3, 6, 10, 8, 4];

console.log("Bubble Sort: ", Sorter.bubbleSort(lista));
console.log("Quick Sort: ", Sorter.quickSort(lista));
console.log("Merge Sort: ", Sorter.mergeSort(lista));

const dados = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log("\nBusca Sequencial: ", Buscas.sequencial(dados, 70));
console.log("Busca Binária: ", Buscas.binaria(dados, 70));
console.log("Busca por Interpolação: ", Buscas.interpolacao(dados, 70));