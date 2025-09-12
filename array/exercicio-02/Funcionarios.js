
class Funcionarios {
  
  constructor() {
    this.funcionarios = []
    this.i = 0
  }

  adicionar(tarefa) {
    this.funcionarios[this.i] = tarefa
    this.i++
  }

  remover() {
    if (this.i === 0) {
      return undefined
    }
    
    const ultimaTarefa = this.funcionarios[this.i - 1]

    delete this.funcionarios[this.i - 1]

    this.i--

    return ultimaTarefa
  }

  obterElemento(indice) {
    if (indice < 0 || indice >= this.i) {
      return undefined
    }

    return this.funcionarios[indice]
  }

  limpar() {
    this.funcionarios = []
    this.i = 0
  }
}

module.exports = Funcionarios