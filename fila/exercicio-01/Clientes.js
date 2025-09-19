
class Clientes {
  #clientes = [];
  #inicio = 0;
  #fim = 0;

  enqueue(cliente) {
    this.#clientes[this.#fim] = cliente;
    
    this.#fim++;
  }

  dequeue() {
    if (this.estaVazia()) {
      return undefined;
    }

    const cliente = this.#clientes[this.#inicio];

    delete this.#clientes[this.#inicio];

    this.#inicio++;

    return cliente;
  }

  estaVazia = () => this.#fim === this.#inicio;
}

module.exports = Clientes;