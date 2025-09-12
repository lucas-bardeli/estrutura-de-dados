
class Biblioteca {
  constructor() {
    this.livros = []
  }

  adicionarLivro(livro) {
    this.livros.push(livro)
    console.log("Livro adicionado!")
  }

  listarLivros() {
    return this.livros
  }

  buscarPorAutor(autor) {
    for (let livro of this.livros) {
      if (livro.autor === autor) {
        console.log(livro)
      }
    }
  }
}

module.exports = Biblioteca