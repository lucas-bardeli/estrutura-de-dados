// Considere todas as estruturas de dados estudadas até hoje e faça um bechmark para avaliar o desempenho delas.
// Abaixo estão as instruções de metodologia:
// a) Cada estrutura deverá ter 10 mil elementos
// b) Teste a velocidade de inserção
// c) Teste a velocidade de listagem
// d) Teste a velocidade de remoção
// e) Organize os dados em uma planilha e apresente suas conclusões de qual melhor caso de uso para cada estrutura de dados

// Importando as classes necessárias para o benchmark
const AVLTree = require("./arvores-binarias/arvore-avl/ALVTree.js");
const BinaryTree = require("./arvores-binarias/arvore-binaria/BinaryTree.js");
const LinkedList = require("./listas-encadeadas/lista-encadeada/LinkedList.js");
const DoublyLinkedList = require("./listas-encadeadas/duplamente-encadeada/DoublyLinkedList.js");
const Fila = require("./fila/Fila.js");
const Pilha = require("./pilha/Pilha.js");
const MeuArray = require("./array/MeuArray.js");

// Instanciando as classes
const avlTree = new AVLTree();
const binaryTree = new BinaryTree();
const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();
const fila = new Fila();
const pilha = new Pilha();
const meuArray = new MeuArray();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste
const size = 100000;


// Teste de inserções
// Testando a Fila
console.time("Timer da Fila");
for (let i = 0; i < size; i++) {
  fila.enqueue(getRandomIntRange(i, size));
}
console.timeEnd("Timer da Fila");


// Testando a Pilha
console.time("Timer da Pilha");
for (let i = 0; i < size; i++) {
  pilha.adicionar(getRandomIntRange(i, size));
}
console.timeEnd("Timer da Pilha");


// Testando a LinkedList
console.time("Timer da LinkedList");
for (let i = 0; i < size; i++) {
  linkedList.insertAtEnd(getRandomIntRange(i, size));
}
console.timeEnd("Timer da LinkedList");


// Testando a DoublyLinkedList
console.time("Timer da DoublyLinkedList");
for (let i = 0; i < size; i++) {
  doublyLinkedList.append(getRandomIntRange(i, size));
}
console.timeEnd("Timer da DoublyLinkedList");


// Testando a BinaryTree
console.time("Timer da BinaryTree");
for (let i = 0; i < size; i++) {
  binaryTree.insert(getRandomIntRange(i, size));
}
console.timeEnd("Timer da BinaryTree");

// Testando a AVLTree
console.time("Timer da AVLTree");
for (let i = 0; i < size; i++) {
  avlTree.insert(getRandomIntRange(i, size));
}
console.timeEnd("Timer da AVLTree");