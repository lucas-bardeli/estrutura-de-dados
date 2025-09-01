
class Tarefas {
  #tarefas = []
  #i = 0

  adicionar(tarefa) {
    this.#tarefas[this.#i] = tarefa
    this.#i++
  }

  remover() {
    if (this.#i === 0) {
      return undefined
    }
    
    const ultimaTarefa = this.#tarefas[this.#i - 1]

    delete this.#tarefas[this.#i - 1]

    this.#i--

    return ultimaTarefa
  }

  mostrarTarefas() {
    console.table(this.#tarefas)
  }
}

module.exports = Tarefas