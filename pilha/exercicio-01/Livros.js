
class Livros {
  #livros = [];
  #tamanho = 0;

  adicionar(livro) {
    this.#livros[this.#tamanho] = livro;
    this.#tamanho++;
  }

  remover() {
    if (this.#tamanho === 0) {
      return undefined;
    }

    const ultimoLivro = this.#livros[this.#tamanho - 1];

    delete this.#livros[this.#tamanho - 1];

    this.#tamanho--;

    return ultimoLivro;
  }

  topo() {
    if (this.#tamanho === 0) {
      return undefined;
    }

    return this.#livros[this.#tamanho - 1];
  }

  estaVazia = () => this.#tamanho === 0;
}

module.exports = Livros;