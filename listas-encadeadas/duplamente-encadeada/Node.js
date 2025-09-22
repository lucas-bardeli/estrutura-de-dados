
class Node {
  constructor(value) {
    this.value = value;

    // Ponteiro para o próximo nó
    this.next = undefined;

    // Ponteiro para o nó anterior
    this.prev = undefined;
  }
}

module.exports = Node;