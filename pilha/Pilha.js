
class Pilha {
  // Usamos uma lista para armazenar os elementos da pilha
  #itens = [];

  // Mantemos o controle do tamanho da pilha
  #tamanho = 0;

  // Adiciona um elemento ao topo da pilha
  adicionar(elemento) {
    // Insere o elemento na posição atual do tamanho
    this.#itens[this.#tamanho] = elemento;

    // Incrementa o tamanho
    this.#tamanho++;
  }

  // Remove e retorna o elemento do topo da pilha
  remover() {
    // Se a pilha estiver vazia, retorna undefined
    if (this.#tamanho === 0) {
      return undefined;
    }

    // Pega o item no topo da pilha
    const ultimoItem = this.#itens[this.#tamanho - 1];

    // Remove o item do topo
    delete this.#itens[this.#tamanho - 1];

    // Decrementa o tamanho da pilha
    this.#tamanho--;

    // Retorna o item removido
    return ultimoItem;
  }
}