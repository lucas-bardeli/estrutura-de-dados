
const DoublyLinkedList = require('./DoublyLinkedList.js');

const lista = new DoublyLinkedList();

console.clear();

console.log("\n--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Lista inicial');
console.log(lista.isEmpty() ? "A lista está vazia." : "A lista não está vazia.");

console.log("\n--------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo no Fim (tail):');
lista.append("Jesualdo");
lista.toString();
lista.append("Andrew");
lista.toString();
lista.append("Lindolfo");
lista.toString();

console.log("\n--------------------");
console.log('\x1b[34m%s\x1b[0m', 'Percorrendo do início ao fim:');
lista.traverse();

console.log("\n--------------------");
console.log('\x1b[34m%s\x1b[0m', 'Percorrendo do fim ao início:');
lista.traverseReverse();

console.log("\n--------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo no Início (head):');
lista.prepend("Altair");
lista.toString();
lista.prepend("Elton");
lista.toString();
lista.prepend("Gênesis");
lista.toString();

console.log("\n--------------------");
console.log('\x1b[34m%s\x1b[0m', 'Percorrendo do início ao fim:');
lista.traverse();

console.log("\n--------------------");
console.log('\x1b[31m%s\x1b[0m', 'Removendo um nó do fim (tail) da lista:');
console.log(`Nó removido: ${lista.removeLast()}`);
lista.toString();

console.log("\n--------------------");
console.log('\x1b[31m%s\x1b[0m', 'Removendo um nó do inicio (head) da lista:');
console.log(`Nó removido: ${lista.removeFirst()}`);
lista.toString();

console.log("\n--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Buscando o valor: Altair');
console.log(`Encontrado na posição: ${lista.find("Altair")}`);

console.log("\n--------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo na posição 3:');
lista.insertAt("Mateus", 3);
lista.toString();

console.log("\n--------------------");