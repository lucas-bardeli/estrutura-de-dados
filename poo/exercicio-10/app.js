
// Crie um Projeto, que contenha:
// – Livro.js → classe com título, autor e ano.
// – Biblioteca.js → classe que mantém um array de livros com métodos adicionarLivro(), listarLivros() e buscarPorAutor(autor).
// – app.js → monte uma biblioteca com pelo menos 3 livros e faça buscas por autor.

const Biblioteca = require("./Biblioteca.js")
const Livro = require("./Livro.js")

const biblioteca = new Biblioteca()

biblioteca.adicionarLivro(new Livro("O Livro do Cemitério", "Neil Gaiman", 2008))
biblioteca.adicionarLivro(new Livro("Coraline", "Neil Gaiman", 2002))
biblioteca.adicionarLivro(new Livro("Norse Mythology", "Neil Gaiman", 2017))
biblioteca.adicionarLivro(new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943))
biblioteca.adicionarLivro(new Livro("O Código Da Vinci", "Dan Brown", 2003))
biblioteca.adicionarLivro(new Livro("O Símbolo Perdido", "Dan Brown", 2009))

console.log(biblioteca.listarLivros())

biblioteca.buscarPorAutor("Neil Gaiman")