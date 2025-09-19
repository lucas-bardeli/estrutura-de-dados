
class BauTesouro {
  #tesouros = [];
  #tamanho = 0;

  adicionar(tesouro) {
    this.#tesouros[this.#tamanho] = tesouro;
    this.#tamanho++;
  }

  remover() {
    if (this.#tamanho === 0) {
      return undefined;
    }

    const ultimoTesouro = this.#tesouros[this.#tamanho - 1];

    delete this.#tesouros[this.#tamanho - 1];

    this.#tamanho--;

    return ultimoTesouro;
  }

  topo() {
    if (this.#tamanho === 0) {
      return undefined;
    }

    return this.#tesouros[this.#tamanho - 1];
  }

  estaVazio = () => this.#tamanho === 0;
}

module.exports = BauTesouro;