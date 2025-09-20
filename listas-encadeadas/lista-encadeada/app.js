
const LinkedList = require("./LinkedList.js");

const lista = new LinkedList();

console.clear();

console.log("\n--------------------");
console.log("\x1b[35m%s\x1b[0m", "Lista inicial");
console.log(lista.isEmpty() ? "A lista está vazia." : "A lista não está vazia.");

console.log("\n--------------------");
console.log("\x1b[32m%s\x1b[0m", "Inserindo no início:");
lista.insertAtBeginning("Jesualdo");
lista.toString(); // Saída: Jesualdo -> undefined
lista.insertAtBeginning("Altair");
lista.toString(); // Saída: Altair -> Jesualdo -> undefined
lista.insertAtBeginning("Elton");
lista.toString(); // Saída: Elton -> Altair -> Jesualdo -> undefined
console.log(`Tamanho da lista: ${lista.size()}`); // Saída: Tamanho da lista: 3

console.log("\n--------------------");
console.log("\x1b[32m%s\x1b[0m", "Inserindo no fim:");
lista.insertAtEnd("Andrew");
lista.toString(); // Saida: Elton -> Altair -> Jesualdo -> Andrew -> undefined
lista.insertAtEnd("Lindolfo");
lista.toString(); // Saida: Elton -> Altair -> Jesualdo -> Andrew -> Lindolfo -> undefined
console.log(`Tamanho da lista: ${lista.size()}`); // Saida: Tamanho da lista: 5

console.log("\n--------------------");
console.log("\x1b[32m%s\x1b[0m", "Exibindo a lista:");
lista.toString(); // Saida: Elton -> Altair -> Jesualdo -> Andrew -> Lindolfo -> null

console.log("\n------------------");
console.log("\x1b[31m%s\x1b[0m", "Removendo Itens:");
// Removendo um valor
lista.removeByValue("Jesualdo");
lista.toString(); // Saída: Elton -> Altair -> Andrew -> Lindolfo -> null

console.log("\n------------------");
console.log("\x1b[34m%s\x1b[0m", "Procurando um Valor:");
let node = lista.find("Andrew");
console.log(node ? `Valor encontrado: ${node.value}` : "Valor não encontrado");

console.log("\n------------------");