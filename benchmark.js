// Importando as classes necessárias para o benchmark
const MeuArray = require("./array/MeuArray.js");
const Pilha = require("./pilha/Pilha.js");
const Fila = require("./fila/Fila.js");
const LinkedList = require("./listas-encadeadas/lista-encadeada/LinkedList.js");
const DoublyLinkedList = require("./listas-encadeadas/duplamente-encadeada/DoublyLinkedList.js");
const AVLTree = require("./arvores-binarias/arvore-avl/ALVTree.js");
const BinaryTree = require("./arvores-binarias/arvore-binaria/BinaryTree.js");

// Instanciando as classes
const meuArray = new MeuArray();
const pilha = new Pilha();
const fila = new Fila();
const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();
const binaryTree = new BinaryTree();
const avlTree = new AVLTree();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste
const size = 10000000;
const valor_para_busca = "Lucas Bardeli";

console.log("\nTestes de inserções:");
// Testando o MeuArray
console.time("Timer do MeuArray");
for (let i = 0; i < size; i++) {
  meuArray.adicionar(getRandomIntRange(i, size));
}
meuArray.adicionar(valor_para_busca);
console.timeEnd("Timer do MeuArray");

// Testando a Pilha
console.time("Timer da Pilha");
for (let i = 0; i < size; i++) {
  pilha.adicionar(getRandomIntRange(i, size));
}
pilha.adicionar(valor_para_busca);
console.timeEnd("Timer da Pilha");

// Testando a Fila
console.time("Timer da Fila");
fila.enqueue(valor_para_busca);
for (let i = 0; i < size; i++) {
  fila.enqueue(getRandomIntRange(i, size));
}
console.timeEnd("Timer da Fila");

// Testando a LinkedList
console.time("Timer da LinkedList");
for (let i = 0; i < size; i++) {
  linkedList.insertAtBeginning(getRandomIntRange(i, size));
}
linkedList.insertAtEnd(valor_para_busca);
console.timeEnd("Timer da LinkedList");

// Testando a DoublyLinkedList
console.time("Timer da DoublyLinkedList");
for (let i = 0; i < size; i++) {
  doublyLinkedList.append(getRandomIntRange(i, size));
}
doublyLinkedList.append(valor_para_busca);
console.timeEnd("Timer da DoublyLinkedList");

// Testando a BinaryTree
console.time("Timer da BinaryTree");
for (let i = 0; i < size; i++) {
  binaryTree.insert(getRandomIntRange(i, size));
}
binaryTree.insert(valor_para_busca);
console.timeEnd("Timer da BinaryTree");

// Testando a AVLTree
console.time("Timer da AVLTree");
for (let i = 0; i < size; i++) {
  avlTree.insert(getRandomIntRange(i, size));
}
avlTree.insert(valor_para_busca);
console.timeEnd("Timer da AVLTree");

console.log("\n---------------------------");
console.log("Testes de busca:");
// Testando o MeuArray
console.time("Timer do MeuArray");
meuArray.obterIndice(valor_para_busca);
console.timeEnd("Timer do MeuArray");

// Testando a Pilha
console.time("Timer da Pilha");
pilha.topo();
console.timeEnd("Timer da Pilha");

// Testando a Fila
console.time("Timer da Fila");
fila.front();
console.timeEnd("Timer da Fila");

// Testando a LinkedList
console.time("Timer da LinkedList");
linkedList.find(valor_para_busca);
console.timeEnd("Timer da LinkedList");

// Testando a DoublyLinkedList
console.time("Timer da DoublyLinkedList");
doublyLinkedList.find(valor_para_busca);
console.timeEnd("Timer da DoublyLinkedList");

// Testando a BinaryTree
console.time("Timer da BinaryTree");
binaryTree.search(valor_para_busca);
console.timeEnd("Timer da BinaryTree");

// Testando a AVLTree
console.time("Timer da AVLTree");
avlTree.search(valor_para_busca);
console.timeEnd("Timer da AVLTree");