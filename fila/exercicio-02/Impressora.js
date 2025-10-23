
class Impressora {
  #documentos = [];
  #inicio = 0;
  #fim = 0;

  enqueue(documento) {
    if (this.tamanho() === 5) {
      console.log(`Não foi possível adicionar o documento ${documento.nome} pois a fila está lotada!`);
      return;
    }
    
    this.#documentos[this.#fim] = documento;
    
    this.#fim++;
  }
  
  dequeue() {
    if (this.estaVazia()) {
      return undefined;
    }

    const documento = this.#documentos[this.#inicio];

    delete this.#documentos[this.#inicio];

    this.#inicio++;

    console.log(`Imprimindo o documento ${documento.nome}...`);
  }

  estaVazia = () => this.#fim === this.#inicio;
  tamanho = () => this.#fim - this.#inicio;
}

module.exports = Impressora;