
class MeuArray {
  // Usamos uma lista para armazenar os itens do array
  constructor() {
    this.itens = []
  }

  // Mantemos o controle do tamanho do array
  #tamanho = 0
  
  // Adiciona um elemento no final do array
  adicionar(elemento) {
    // Insere o elemento na posição atual do tamanho
    this.itens[this.#tamanho] = elemento

    // Incrementa o tamanho
    this.#tamanho++
  }

  // Remove o último elemento do array
  remover() {
    // Se o array estiver vazio, não há o que remover
    if (this.#tamanho === 0) {
      return undefined
    }
    
    // Armazena o último item
    const ultimoItem = this.itens[this.#tamanho - 1]

    // Remove o último item do array
    delete this.itens[this.#tamanho - 1]

    // Decrementa o tamanho
    this.#tamanho--

    return ultimoItem // Retorna o item devolvido
  }

  // Acessa o elemento em um índice específico
  obterElemento(indice) {
    if (indice < 0 || indice >= this.#tamanho) {
      // Se o índice estiver fora do alcance retorna undefined
      return undefined
    }

    // Retorna o item no índice solicitado
    return this.itens[indice]
  }

  // Retorna o tamanho do array
  tamanhoArray() {
    // Retorna o valor do tamanho atual do array
    return this.#tamanho
  }

  // Remove todos os elementos do array
  limpar() {
    // Limpa o objeto
    this.itens = []

    // Reinicializa o tamanho
    this.#tamanho = 0
  }

  editar(indice, novoValor) {}

  obterIndice(elemento) {}
}

module.exports = MeuArray