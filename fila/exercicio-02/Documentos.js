
class Documentos {
  #documentos = [];
  #inicio = 0;
  #fim = 0;

  enqueue(documento) {
    const tamanho = this.tamanho();
    if (tamanho === 5) {
      return "A fila está lotada!";
    }
    
    this.#documentos[this.#fim] = documento;
    
    this.#fim++;
  }
  
  dequeue() {
    if (this.estaVazia()) {
      return undefined;
    }
    if (this.tamanho() === 5) {
      return "A fila está lotada!";
    }

    const documento = this.#documentos[this.#inicio];

    delete this.#documentos[this.#inicio];

    this.#inicio++;

    return documento;
  }

  estaVazia = () => this.#fim === this.#inicio;
  tamanho = () => this.#fim - this.#inicio;
}

module.exports = Documentos;