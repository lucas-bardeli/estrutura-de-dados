
const Node = require("./Node.js");

class DoublyLinkedList {
  #head = undefined; // Primeiro nó (cabeça)
  #tail = undefined; // Último nó (cauda)
  #length = 0; // Tamanho da lista

  // Adicionar um nó ao final da lista
  append(value) {
    const newNode = new Node(value);
    
    if (this.#head === undefined) {
      this.#head = newNode;
      this.#tail = newNode;
    }
    else {
      this.#tail.next = newNode;
      newNode.prev = this.#tail;
      this.#tail = newNode;
    }
    
    this.#length++;
  }
  
  // Adicionar um nó ao início da lista
  prepend(value) {
    const newNode = new Node(value);
    
    if (this.#head === undefined) {
      this.#head = newNode;
      this.#tail = newNode;
    }
    else {
      newNode.next = this.#head;
      this.#head.prev = newNode;
      this.#head = newNode;
    }

    this.#length++;
  }
  
  // Remover o nó do final da lista
  removeLast() {
    if (this.#tail === undefined) return undefined;

    const removedNode = this.#tail;

    if (this.#tail === this.#head) {
      this.#head = undefined;
      this.#tail = undefined;
    }
    else {
      this.#tail = this.#tail.prev;
      this.#tail.next = undefined;
    }

    this.#length--;
    return removedNode.value;
  }
  
  // Remover o nó do início da lista
  removeFirst() {
    if (this.#head === undefined) return undefined;

    const removedNode = this.#head;

    if (this.#head === this.#tail) {
      this.#head = undefined;
      this.#tail = undefined;
    }
    else {
      this.#head = this.#head.next;
      this.#head.prev = undefined;
    }

    this.#length--;
    return removedNode.value;
  }

  // Percorrer a lista do início ao fim
  traverse() {
    if (this.isEmpty()) {
      console.log("A lista está vazia.");
      return;
    }
    
    let current = this.#head;
    
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  
  // Percorrer a lista do fim ao início
  traverseReverse() {
    if (this.isEmpty()) {
      console.log("A lista está vazia.");
      return;
    }

    let current = this.#tail;
    
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }

  // Inserir um nó em uma posição específica
  insertAt(value, index) {
    if (index < 0 || index > this.#length) return undefined;

    const newNode = new Node(value);

    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.#length) {
      this.append(value);
      return;
    }

    let current = this.#head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    newNode.prev = previous;
    previous.next = newNode;
    current.prev = newNode;

    this.#length++;
  }

  // Encontrar o índice de um valor específico
  find(value) {
    let current = this.#head;
    let index = 0;

    while (current) {
      if (current.value === value) return index; // Valor encontrado

      current = current.next;
      index++;
    }

    return -1; // Valor não encontrado
  }

  // Remove um nó em uma posição específica
  removeAt(index) {
    if (index < 0 || index > this.#length) return undefined;

    if (index === 0) return this.removeFirst();

    if (index === this.#length - 1) return this.removeLast();

    let current = this.#head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.#length--;
    return current.value;
  }

  // Retorna o tamanho da lista
  size = () => this.#length;

  // Retorna true se a lista estiver vazia
  isEmpty = () => this.#head === undefined;

  // Exibir a lista (opcional, para facilitar a visualização)
  toString() {
    let current = this.#head;
    let list = '';

    while (current !== undefined) {
      list += ` <- ${current.value} -> `;
      current = current.next;
    }

    console.log(`undefined ${list} undefined`);
  }
}

module.exports = DoublyLinkedList;